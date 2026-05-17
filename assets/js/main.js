{
	initTopBtn();
	initLazyImages();

	function initTopBtn () {

		const mybutton = document.getElementById('btn-back-to-top');

		let scrollTimeout;
		window.addEventListener('scroll', () => {
			if (scrollTimeout) {
				window.cancelAnimationFrame(scrollTimeout);
			}

			scrollTimeout = window.requestAnimationFrame(() => {
				const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				scrollTop > 20 ? mybutton.classList.add('visible') : mybutton.classList.remove('visible');
			});
		});

		mybutton.addEventListener('click', () => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	}

	function initLazyImages () {
		document.querySelectorAll('details').forEach(details => {
			details.addEventListener('toggle', () => {
				if (details.open) {
					details.querySelectorAll('img[data-src]').forEach(img => {
						img.src = img.dataset.src;
						img.removeAttribute('data-src');
					});
				}
			});
		});
	}
}