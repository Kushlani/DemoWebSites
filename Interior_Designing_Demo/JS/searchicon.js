$(document).ready(function() {
	
    $(".search-icon").on("click", function() {

        $("input[type=text]").toggleClass("active");
        $("nav a").toggleClass("open");
       
    });

});

