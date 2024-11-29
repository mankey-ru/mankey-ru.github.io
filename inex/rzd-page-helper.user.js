// ==UserScript==
// @name PTK_2018 Page helper
// @namespace Violentmonkey Scripts
// @match *://*.oooinex.ru/*
// @match *://*.rzd.ru/*
// @version 1.7.5
// @grant none
// @run-at document-end
// ==/UserScript==
(function () {
	const rootSys = document.querySelector('root')?.querySelector?.('sys');
	const isXML = !!rootSys;

	let pageId;
	if (window.PAGEDATA) {
		const data = {};
		pageId = window.PAGEDATA.page_id;
		if (pageId) data.pageId = pageId;
		if (window.PAGEDATA.template) data.template = window.PAGEDATA.template;
		if (window.PAGEDATA.vp) data.vpId = window.PAGEDATA.vp;

		const cont = '';
		for (var k in data) {
			cont += `<span style="margin: 0 1em">${k}=${data[k]}</span> `;
		}

		if (cont) {
			document.querySelector('body').insertAdjacentHTML('beforeend', `<div style="background:grey;color:#fff;padding:3px 0;position:fixed;bottom:0;right:0;z-index:1;">${cont}</div>`)
		}
	}
	else {
		pageId = rootSys?.querySelector?.('page_id').innerHTML;
	}

	// ???
	const errBlock = document.getElementById('error-text');
	if (errBlock) {
		errBlock.style.display = 'block';
	}

	const {
		hostname
	} = window.location;
	let ptkCode;
	if (hostname.includes('oooinex')) {
		ptkCode = hostname.split('.')[1];
	}
	else if (hostname.startsWith('test-')) {
		ptkCode = 'po'
	}
	else {
		ptkCode = 'pr'
	}

	if (ptkCode !== 'oooinex' && ptkCode !== 'wflow') {
		ptkCode = ptkCode.substring(0, 2);
		ptkCode = toSmallCaps(ptkCode);
		let titleChangeCnt = 0;
		const titleChangeInterval = 500;
		const titleChangeCntMax = 50;
		// таймер - для страниц, которые меняют тайтл в процессе загрузки, например, в админке
		const titleChangeTimer = setInterval(() => {
			const prefix = `${ptkCode} `;
			if (!document.title.startsWith(prefix) && document.title !== prefix.trim()) { // trim - для кейса когда тайтл состоит только из префикса, дело в том, что тайтл автоматом делает trim
				const continuation = isXML ? pageId : document.title;
				document.title = prefix + continuation;
			}
			titleChangeCnt++;
			if (titleChangeCnt >= titleChangeCntMax) {
				clearInterval(titleChangeTimer);
			}
		}, titleChangeInterval)
	}

	function toSmallCaps (str) {
		if (!str) throw new Error("String cannot be empty");
		if (typeof str !== "string") throw new TypeError("String must be a string");
		const smallCapsMap = {
			A: "ᴀ",
			B: "ʙ",
			C: "ᴄ",
			D: "ᴅ",
			E: "ᴇ",
			F: "ғ",
			G: "ɢ",
			H: "ʜ",
			I: "ɪ",
			J: "ᴊ",
			K: "ᴋ",
			L: "ʟ",
			M: "ᴍ",
			N: "ɴ",
			O: "ᴏ",
			P: "ᴘ",
			Q: "ǫ",
			R: "ʀ",
			S: "s",
			T: "ᴛ",
			U: "ᴜ",
			V: "ᴠ",
			W: "ᴡ",
			X: "x",
			Y: "ʏ",
			Z: "ᴢ",
			a: "ᴀ",
			b: "ʙ",
			c: "ᴄ",
			d: "ᴅ",
			e: "ᴇ",
			f: "ғ",
			g: "ɢ",
			h: "ʜ",
			i: "ɪ",
			j: "ᴊ",
			k: "ᴋ",
			l: "ʟ",
			m: "ᴍ",
			n: "ɴ",
			o: "ᴏ",
			p: "ᴘ",
			q: "ǫ",
			r: "ʀ",
			s: "s",
			t: "ᴛ",
			u: "ᴜ",
			v: "ᴠ",
			w: "ᴡ",
			x: "x",
			y: "ʏ",
			z: "ᴢ",
			" ": " ",
		};

		return str
			.split("")
			.map((char) => smallCapsMap[char] || char)
			.join("");
	}
})()