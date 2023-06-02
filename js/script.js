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

$( "classIcon-B" ).click(function() {
    $("#screen-2").show();
    $("#screen-1").hide();
    $("#screen-3").hide();
    $("#screen-4").hide();
});

// Click Class C Icon - Will hide everything except for Class C product cards.


// Click Camper Icon - Will hide everything except for Camper product cards.
