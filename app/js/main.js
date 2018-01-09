//preloader
$(window).on('load', function () {
	var $preloader = $('#page-preloader'),
	$spinner   = $preloader.find('.spinner');
	$spinner.fadeOut();
	$preloader.delay(350).fadeOut('slow');
});
//fixed Header
// var header = document.getElementById("header");
// var greenSection = document.getElementById("greenSection");

// function fixedHeader() {
// 	var scroll = document.body.scrollTop;
// 	var ffScroll = document.documentElement.scrollTop;

// 	var intervalHeader = greenSection.offsetTop;
// 	if(scroll > intervalHeader || ffScroll > intervalHeader) {
// 		/*header.style.cssText = "background: #606060;";*/
// 		header.classList.add("header__bg");
// 	} else if (scroll < intervalHeader || ffScroll < intervalHeader) {
// 		header.className = "header navbar-fixed-top";
// 		header.classList.remove("header__bg");
// 	}
// 	console.log(intervalHeader);
// }

// window.onscroll = function () {
// 	fixedHeader();
// }
