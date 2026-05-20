{
	initTopBtn();
	initLazyImages();
	initLangLinks();

	function initLangLinks() {
		const langSwitcher = document.getElementById('lang-switcher');
		if (!langSwitcher) return;
		const currentPath = window.location.pathname;
		langSwitcher.querySelectorAll('a').forEach((link) => {
			const linkHref = link.getAttribute('href').replace('./', '/');
			console.log(`linkHref === '/' && currentPath === '':`, linkHref === '/' && currentPath === '');
			console.log(`linkHref === currentPath:`, linkHref === currentPath);
			if (linkHref === currentPath || (linkHref === '/' && currentPath === '')) {
				link.classList.add('active');
			}
		});
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
