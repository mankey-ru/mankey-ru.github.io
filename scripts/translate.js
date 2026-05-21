// @ts-check

/** @typedef {import('openai-fetch').ChatResponse} ChatResponse */

/**
 * @typedef {Object} OpenRouterUsage
 * @property {number} prompt_tokens
 * @property {number} completion_tokens
 * @property {number} total_tokens
 * @property {number} [cost] - Total cost in USD
 */

/**
 * @typedef {Object} OpenRouterChoice
 * @property {number} index
 * @property {Object} message
 * @property {string} message.role
 * @property {string} message.content
 * @property {string|null} [message.refusal]
 * @property {string} finish_reason
 * @property {Object} [logprobs]
 */

/**
 * @typedef {Object} OpenRouterResponse
 * @property {string} id
 * @property {string} object
 * @property {number} created
 * @property {string} model
 * @property {OpenRouterChoice[]} choices
 * @property {OpenRouterUsage} [usage]
 */
import fs from 'fs/promises';

async function main() {
	try {
		const [, , inputPath = 'index.html', outputPath = 'index_ru.html'] = process.argv;

		const openrouterKey = process.env.OPENROUTER_API_KEY;
		const openaiKey = process.env.OPENAI_API_KEY;
		const provider = openrouterKey ? 'openrouter' : openaiKey ? 'openai' : null;

		if (!provider) {
			console.error(
				'ERROR: No API key set. Set OPENROUTER_API_KEY (preferred) or OPENAI_API_KEY as repository secrets.',
			);
			process.exit(1);
		}

		const model = openrouterKey
			? process.env.OPENROUTER_MODEL || 'deepseek/deepseek-v4-flash:free'
			: process.env.OPENAI_MODEL || 'gpt-3.5-turbo';

		console.log(
			`Using ${provider} with model ${model} to translate ${inputPath} -> ${outputPath}`,
		);

		const html = await fs.readFile(inputPath, 'utf8');

		const system = `You are a careful assistant that translates HTML pages into natural Russian while preserving all code, structure, IDs, class names, URLs, and inline scripts/styles exactly as-is. Only translate user-visible text (text nodes), attributes that are user-facing (for example: alt, title, placeholder, aria-label), and metadata like meta description or meta keywords. Do NOT change code, filenames, IDs, class names, or embedded JavaScript logic; keep punctuation in code and attribute values intact unless it is clearly human-readable text. Output only the final full translated HTML document and nothing else. Do not translate  words "EN" to "АНГЛ" and "RU" to "РУС"`;

		const user = `Translate the following HTML to Russian. Preserve structure and code exactly as described. Begin translation now:\n\n${html}`;

		const body = {
			model,
			messages: [
				{ role: 'system', content: system },
				{ role: 'user', content: user },
			],
			temperature: 0,
		};

		let endpoint;
		let apiKey;
		if (provider === 'openrouter') {
			endpoint = 'https://openrouter.ai/api/v1/chat/completions';
			apiKey = openrouterKey;
		} else {
			endpoint = 'https://api.openai.com/v1/chat/completions';
			apiKey = openaiKey;
		}

		const res = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
			},
			body: JSON.stringify(body),
		});

		if (!res.ok) {
			const text = await res.text();
			console.error(`${provider} API error:`, res.status, text);
			process.exit(1);
		}

		/** @type {OpenRouterResponse}  */
		const data = await res.json();
		let content = (data.choices?.[0]?.message?.content || '').trim();
		content = content.trim();

		// Strip triple-backtick fences if present
		if (content.startsWith('```')) {
			content = content.replace(/^```[a-zA-Z]*\n/, '').replace(/\n```$/, '');
		}
		
		// Swap active/inactive language classes if they were translated
		content = content.replaceAll(`lang--active`, `lang--TEMP`);
		content = content.replaceAll(`lang--inactive`, `lang--active`);
		content = content.replaceAll(`lang--TEMP`, `lang--inactive`);

		if (!content.startsWith('<')) {
			console.warn(
				'Warning: translated content does not start with "<"; writing output anyway.',
			);
		}
		console.log(
			`Cost of translation: ${data.usage?.cost ? `$${data.usage.cost.toFixed(6)} USD` : 'unknown'}`,
		);
		await fs.writeFile(outputPath, content, 'utf8');
		console.log(`Wrote translated file to ${outputPath}`);
	} catch (err) {
		console.error('Translation failed:', err);
		process.exit(1);
	}
}

main();
