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
