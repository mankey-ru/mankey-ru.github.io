// ==UserScript==
// @name Rzd Page helper
// @namespace Violentmonkey Scripts
// @match *://*.oooinex.ru/*
// @match *://*.rzd.ru/*
// @grant none
// @run-at document-end
// ==/UserScript==
(function () {
	if (window.PAGEDATA) {
		var data = {};
		var pageId = window.PAGEDATA.page_id || window.PAGEDATA.layer;
		if (pageId) {
			data.pageId = pageId;
		}
		if (window.PAGEDATA.template) {
			data.template = window.PAGEDATA.template;
		}
		if (window.PAGEDATA.vp) {
			data.vpId = window.PAGEDATA.vp;
		}

		var cont = '';
		for (var k in data) {
			cont += `<span style="margin: 0 1em">${k}=${data[k]}</span> `;
		}

		if (cont) {
			document.querySelector('body').insertAdjacentHTML('beforeend', `<div style="background:grey;color:#fff;padding:3px 0;position:fixed;bottom:0;right:0;z-index:1;">${cont}</div>`)
		}
	}
	var errBlock = document.getElementById('error-text');
	if (errBlock) {
		errBlock.style.display = 'block';
	}

	const { hostname } = window.location;
	let ptkCode;
	if (hostname.includes('oooinex')) {
		ptkCode = hostname.split('.')[1];
		//if (ptkCode === 'local') ptkCode = 'L'
		//else ptkCode = ptkCode.substring(0,2); // heta будет he
	} else if (hostname.startsWith('test-')) {
		//ptkCode = 'π';
		ptkCode = 'po'
	} else {
		//ptkCode = 'Π';
		ptkCode = 'pr'
	}

	ptkCode = ptkCode.substring(0, 2);
	ptkCode = toSmallCaps(ptkCode);

	if (ptkCode !== 'oooinex') {
		document.title = `${ptkCode} ${document.title}`;
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