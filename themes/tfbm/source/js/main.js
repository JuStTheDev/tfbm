/*
	Massively by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
    $(document.getElementById('navPanelToggle')).click(function (event) {
        $('body').toggleClass('nav-visible');
        event.preventDefault();
    });
    $(document.getElementById('nav-close')).click(function (event) {
        $('body').removeClass('nav-visible');
        event.preventDefault();
    });

})(jQuery);
