$(document).ready(function() {
	
    $(".mobile-menu-icon").on("click", function() {

        $(".primary-navigation").toggleClass("active");
        $(this).toggleClass("open");
    });

});

