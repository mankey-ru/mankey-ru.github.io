// scripts/generate-pdf.mjs
// Генерация PDF из HTML-файла (имитирует «Print to PDF» в браузере)

import { chromium } from 'playwright';
import path from 'path';
import { access } from 'fs/promises';

async function generatePDF() {
	if (process.argv.length < 4) {
		console.error('Использование: node scripts/generate-pdf.mjs <input.html> <output.pdf>');
		process.exit(1);
	}

	const htmlPath = process.argv[2];
	const pdfPath = process.argv[3];

	try {
		await access(htmlPath);
	} catch {
		console.error(`Файл не найден: ${htmlPath}`);
		process.exit(1);
	}

	const browser = await chromium.launch({
		headless: true,
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	});

	const page = await browser.newPage();
	const fileUrl = `file://${path.resolve(htmlPath)}`;

	await page.goto(fileUrl, { waitUntil: 'networkidle0' });

	await page.pdf({
		path: pdfPath,
		format: 'A4',
		printBackground: true,
		margin: {
			top: '20mm',
			bottom: '20mm',
			left: '20mm',
			right: '20mm'
		}
	});

	await browser.close();
	console.log(`✅ PDF успешно сгенерирован: ${pdfPath}`);
}

generatePDF().catch(err => {
	console.error('Ошибка генерации PDF:', err);
	process.exit(1);
});