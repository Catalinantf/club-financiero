$(function () {

	var siteSticky = function () {
		$(".js-sticky-header").sticky({ topSpacing: 0 });
	};
	siteSticky();

	var siteMenuClone = function () {

		$('.js-clone-nav').each(function () {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function () {

			var counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle': 'collapse',
					'data-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class': 'collapse',
					'id': 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		})

		// click outisde offcanvas
		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	};
	siteMenuClone();

});
function irArriba(pxPantalla) {
	window.addEventListener("scroll", () => {
		let scroll = document.documentElement.scrollTop;
		let botonArriba = document.getElementById("botonArriba");
		if (scroll > pxPantalla) {
			botonArriba.style.right = 20 + "px";
		} else {
			botonArriba.style.right = -100 + "px";
		}
	});
}

irArriba(500);

$(function () {

	$("a").click(function (event) {
		if (this.hash !== "") {
			event.preventDefault();

			var gato = this.hash;

			$("html, body").animate({
				scrollTop: $(gato).offset().top
			}, 800, function () {
				window.location.hash = gato;
			});
		}
	});

	$('[data-toggle="popover"]').popover();

});

function contador() {
	setInterval(intervalo, 50);
	x = 0;
	let clases = $("*[data-valor]");
	function intervalo() {
		x++;
		for (let i = 0; i < clases.length; i++) {
			resultados = $(clases[i]).attr('data-valor');
			if (x > resultados) {
				continue;
			}
			else {

			}
			$(clases[i]).text(x);
		}
	}
}
contador()