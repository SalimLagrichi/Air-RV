// Return to top of the page when logo in navbar is clicked.

function returnToTop(toTop) {

    window.scrollTo(0, 0);
    
}

// Default - Home page when loading up, Shows Class A product cards.

$(document).ready(function(){
    $("#screen-2").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".class-a-description-aidra").hide();
    $(".class-a-description-burstner").hide();
    $(".class-a-description-frankia").hide();
    $(".class-b-description-mobilvetta").hide();
    $(".class-b-description-hymer").hide();
    $(".class-b-description-winnebago").hide();
    $(".class-c-description-ducato").hide();
    $(".class-c-description-roller").hide();
    $(".class-c-description-coachman").hide();
    $(".camper-description-sprinter").hide();
    $(".camper-description-california").hide();
    $(".camper-description-transport").hide();
    $("#form").hide();
    
  });

// Click Class B Icon - Will hide everything except for Class B product cards.

$(".classIcon-B").on("click", function(){
    $("#screen-2").show();
    $("#screen-1").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
});

// Click Class C Icon - Will hide everything except for Class C product cards.

$(".classIcon-C").on("click", function(){
    $("#screen-2").hide();
    $("#screen-1").hide();
    $("#screen-3").show();
    $("#screen-4").hide();
});

// Click Camper Icon - Will hide everything except for Camper product cards.

$(".classIcon-Camper").on("click", function(){
    $("#screen-2").hide();
    $("#screen-1").hide();
    $("#screen-3").hide();
    $("#screen-4").show();
});

// Click Class A Icon - Will hide everything except for Class A product cards.

$(".classIcon-A").on("click", function(){
    $("#screen-2").hide();
    $("#screen-1").show();
    $("#screen-3").hide();
    $("#screen-4").hide();
});

// Click Class A 'Fiat Aidra' - Will hide everything except for Fiat Aidra description.

$("#product-image-aidra").on("click", function(){
    $("#screen-1").hide();
    $("#screen-2").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".class-a-description-aidra").show();
});

// Click Class A 'Burstner' - Will hide everything except for Burstner description.

$("#product-image-burstner").on("click", function(){
    $("#screen-1").hide();
    $("#screen-2").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".class-a-description-burstner").show();
});

// CLick Class A 'Mercedes Frankia' - Will hide everything except for Mercedes Frankia description.

$("#product-image-frankia").on("click", function(){
    $("#screen-1").hide();
    $("#screen-2").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".class-a-description-frankia").show();
});

// Click CLass B 'Fiat Mobilvetta' - Will hide everything except for Fiat Mobilvetta description.

$("#product-image-mobilvetta").on("click", function(){
    $("#screen-1").hide();
    $("#screen-2").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".class-b-description-mobilvetta").show();
});

// Click CLass B 'Mercedes Hymer' - Will hide everything except for Mercedes Hymer description.

$("#product-image-hymer").on("click", function(){
    $("#screen-1").hide();
    $("#screen-2").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".class-b-description-hymer").show();
});

// Click Class B 'Mercedes Winnebago' - Will hide everything except for Mercedes Winnebago description.

$("#product-image-winnebago").on("click", function(){
    $("#screen-1").hide();
    $("#screen-2").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".class-b-description-winnebago").show();
});

// Click Class C 'Fiat Ducato' - Will hide everything except for Fiat Ducato description.

$("#product-image-ducato").on("click", function(){
    $("#screen-1").hide();
    $("#screen-2").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".class-c-description-ducato").show();
});

// Click Class C 'Ford Roller' - Will hide everything except for Ford Roller description.

$("#product-image-roller").on("click", function(){
    $("#screen-1").hide();
    $("#screen-2").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".class-c-description-roller").show();
});

// Click Class C 'Mercedes Coachman' - Will hide everything except for Mercedes Coachman description.

$("#product-image-coachman").on("click", function(){
    $("#screen-1").hide();
    $("#screen-2").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".class-c-description-coachman").show();
});

// Click Camper 'Mercedes Sprinter' - Will hide everything except for Mercedes Sprinter description.

$("#product-image-sprinter").on("click", function(){
    $("#screen-1").hide();
    $("#screen-2").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".camper-description-sprinter").show();
});

// Click Camper 'Volkswagen California' - Will hide everything except for Volkswagen California description.

$("#product-image-california").on("click", function(){
    $("#screen-1").hide();
    $("#screen-2").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".camper-description-california").show();
});

// Click Camper 'Volkswagen Transport' - Will hide everything except for Volkswagen California description.

$("#product-image-transport").on("click", function(){
    $("#screen-1").hide();
    $("#screen-2").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".camper-description-transport").show();
});

// Click Class A icon - Will only show Class A icons & hide previous clicked descriptions.

$(".classIcon-A").on("click", function(){
    $("#screen-1").show();
    $("#screen-2").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".class-a-description-aidra").hide();
    $(".class-a-description-burstner").hide();
    $(".class-a-description-frankia").hide();
    $(".class-b-description-mobilvetta").hide();
    $(".class-b-description-hymer").hide();
    $(".class-b-description-winnebago").hide();
    $(".class-c-description-ducato").hide();
    $(".class-c-description-roller").hide();
    $(".class-c-description-coachman").hide();
    $(".camper-description-sprinter").hide();
    $(".camper-description-california").hide();
    $(".camper-description-transport").hide();
    $("#form").hide();
});

// Click Class B icon - Will only show Class B icons & hide previous clicked descriptions.

$(".classIcon-B").on("click", function(){
    $("#screen-2").show();
    $("#screen-1").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".class-a-description-aidra").hide();
    $(".class-a-description-burstner").hide();
    $(".class-a-description-frankia").hide();
    $(".class-b-description-mobilvetta").hide();
    $(".class-b-description-hymer").hide();
    $(".class-b-description-winnebago").hide();
    $(".class-c-description-ducato").hide();
    $(".class-c-description-roller").hide();
    $(".class-c-description-coachman").hide();
    $(".camper-description-sprinter").hide();
    $(".camper-description-california").hide();
    $(".camper-description-transport").hide();
    $("#form").hide();
});

// Click CLass C icon - Will only show Class C icons & hide previous clicked descriptions.

$(".classIcon-C").on("click", function(){
    $("#screen-3").show();
    $("#screen-1").hide();
    $("#screen-2").hide();
    $("#screen-4").hide();
    $(".class-a-description-aidra").hide();
    $(".class-a-description-burstner").hide();
    $(".class-a-description-frankia").hide();
    $(".class-b-description-mobilvetta").hide();
    $(".class-b-description-hymer").hide();
    $(".class-b-description-winnebago").hide();
    $(".class-c-description-ducato").hide();
    $(".class-c-description-roller").hide();
    $(".class-c-description-coachman").hide();
    $(".camper-description-sprinter").hide();
    $(".camper-description-california").hide();
    $(".camper-description-transport").hide();
    $("#form").hide();
});

// Click Camper icon - Will only show Camper icons & hide previous clicked descriptions.

$(".classIcon-Camper").on("click", function(){
    $("#screen-4").show();
    $("#screen-1").hide();
    $("#screen-2").hide();
    $("#screen-3").hide();
    $(".class-a-description-aidra").hide();
    $(".class-a-description-burstner").hide();
    $(".class-a-description-frankia").hide();
    $(".class-b-description-mobilvetta").hide();
    $(".class-b-description-hymer").hide();
    $(".class-b-description-winnebago").hide();
    $(".class-c-description-ducato").hide();
    $(".class-c-description-roller").hide();
    $(".class-c-description-coachman").hide();
    $(".camper-description-sprinter").hide();
    $(".camper-description-california").hide();
    $(".camper-description-transport").hide();
    $("#form").hide();
});

// Click button on product description pages - Will take you to form page and hide everything else.

$("button").on("click", function(){
    $("#screen-1").hide();
    $("#screen-2").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".class-a-description-aidra").hide();
    $(".class-a-description-burstner").hide();
    $(".class-a-description-frankia").hide();
    $(".class-b-description-mobilvetta").hide();
    $(".class-b-description-hymer").hide();
    $(".class-b-description-winnebago").hide();
    $(".class-c-description-ducato").hide();
    $(".class-c-description-roller").hide();
    $(".class-c-description-coachman").hide();
    $(".camper-description-sprinter").hide();
    $(".camper-description-california").hide();
    $(".camper-description-transport").hide();
    $("#form").show();
});

// Click 'submit button' on form page - Will take you to home page.

$(".form-submit").on("click", function(){
    $("#screen-1").show();
    $("#screen-2").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".class-a-description-aidra").hide();
    $(".class-a-description-burstner").hide();
    $(".class-a-description-frankia").hide();
    $(".class-b-description-mobilvetta").hide();
    $(".class-b-description-hymer").hide();
    $(".class-b-description-winnebago").hide();
    $(".class-c-description-ducato").hide();
    $(".class-c-description-roller").hide();
    $(".class-c-description-coachman").hide();
    $(".camper-description-sprinter").hide();
    $(".camper-description-california").hide();
    $(".camper-description-transport").hide();
    $("#form").hide();
});

// Click 'back button' on form page - Will take you to home page.

$(".back-button").on("click", function(){
    $("#screen-1").show();
    $("#screen-2").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".class-a-description-aidra").hide();
    $(".class-a-description-burstner").hide();
    $(".class-a-description-frankia").hide();
    $(".class-b-description-mobilvetta").hide();
    $(".class-b-description-hymer").hide();
    $(".class-b-description-winnebago").hide();
    $(".class-c-description-ducato").hide();
    $(".class-c-description-roller").hide();
    $(".class-c-description-coachman").hide();
    $(".camper-description-sprinter").hide();
    $(".camper-description-california").hide();
    $(".camper-description-transport").hide();
    $("#form").hide();
});

// Click logo - Will take you to home page from anywhere on site.

$(".logo").on("click", function(){
    $("#screen-1").show();
    $("#screen-2").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".class-a-description-aidra").hide();
    $(".class-a-description-burstner").hide();
    $(".class-a-description-frankia").hide();
    $(".class-b-description-mobilvetta").hide();
    $(".class-b-description-hymer").hide();
    $(".class-b-description-winnebago").hide();
    $(".class-c-description-ducato").hide();
    $(".class-c-description-roller").hide();
    $(".class-c-description-coachman").hide();
    $(".camper-description-sprinter").hide();
    $(".camper-description-california").hide();
    $(".camper-description-transport").hide();
    $("#form").hide();
});

// Click 'search' icon - Will take you to home page from anywhere on site.

$(".search-icon").on("click", function(){
    $("#screen-1").show();
    $("#screen-2").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".class-a-description-aidra").hide();
    $(".class-a-description-burstner").hide();
    $(".class-a-description-frankia").hide();
    $(".class-b-description-mobilvetta").hide();
    $(".class-b-description-hymer").hide();
    $(".class-b-description-winnebago").hide();
    $(".class-c-description-ducato").hide();
    $(".class-c-description-roller").hide();
    $(".class-c-description-coachman").hide();
    $(".camper-description-sprinter").hide();
    $(".camper-description-california").hide();
    $(".camper-description-transport").hide();
    $("#form").hide();
});

// Click 'map' icon - Will take you to home page from anywhere on site.

$(".map-icon").on("click", function(){
    $("#screen-1").show();
    $("#screen-2").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".class-a-description-aidra").hide();
    $(".class-a-description-burstner").hide();
    $(".class-a-description-frankia").hide();
    $(".class-b-description-mobilvetta").hide();
    $(".class-b-description-hymer").hide();
    $(".class-b-description-winnebago").hide();
    $(".class-c-description-ducato").hide();
    $(".class-c-description-roller").hide();
    $(".class-c-description-coachman").hide();
    $(".camper-description-sprinter").hide();
    $(".camper-description-california").hide();
    $(".camper-description-transport").hide();
    $("#form").hide();
});

// Click 'about' icon - Will take you to home page from anywhere on site.

$(".about-icon").on("click", function(){
    $("#screen-1").show();
    $("#screen-2").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
    $(".class-a-description-aidra").hide();
    $(".class-a-description-burstner").hide();
    $(".class-a-description-frankia").hide();
    $(".class-b-description-mobilvetta").hide();
    $(".class-b-description-hymer").hide();
    $(".class-b-description-winnebago").hide();
    $(".class-c-description-ducato").hide();
    $(".class-c-description-roller").hide();
    $(".class-c-description-coachman").hide();
    $(".camper-description-sprinter").hide();
    $(".camper-description-california").hide();
    $(".camper-description-transport").hide();
    $("#form").hide();
});