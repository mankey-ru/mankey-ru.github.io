{
	initTopBtn();
	initLazyImages();
	initLangSwitcher();

	function initLangSwitcher() {
		const params = new URLSearchParams(window.location.search);
		const targetLang = params.get('lang');
		const targetSwitcher = document.getElementById(`langswitch-${targetLang}`);
		// тупо
		if (targetSwitcher) {targetSwitcher.click();}
	}

	function initTopBtn() {
		const mybutton = document.getElementById('btn-back-to-top');

		let scrollTimeout;
		window.addEventListener('scroll', () => {
			if (scrollTimeout) {
				window.cancelAnimationFrame(scrollTimeout);
			}

			scrollTimeout = window.requestAnimationFrame(() => {
				const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				scrollTop > 20
					? mybutton.classList.add('visible')
					: mybutton.classList.remove('visible');
			});
		});

		mybutton.addEventListener('click', () => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	}

	function initLazyImages() {
		document.querySelectorAll('details').forEach((details) => {
			details.addEventListener('toggle', () => {
				if (details.open) {
					details.querySelectorAll('img[data-src]').forEach((img) => {
						img.src = img.dataset.src;
						img.removeAttribute('data-src');
					});
				}
			});
		});
	}
}
