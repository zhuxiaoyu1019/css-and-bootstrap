$("#all-btn").click(function() {
    $("#all").removeClass("hidden");
    $("#javascript").addClass("hidden");
    $("#shiny").addClass("hidden");
    $("#figma").addClass("hidden");
});

$("#javascript-btn").click(function() {
    $("#all").addClass("hidden");
    $("#javascript").removeClass("hidden");
    $("#shiny").addClass("hidden");
    $("#figma").addClass("hidden");
});

$("#shiny-btn").click(function() {
    $("#all").addClass("hidden");
    $("#javascript").addClass("hidden");
    $("#shiny").removeClass("hidden");
    $("#figma").addClass("hidden");
});

$("#figma-btn").click(function() {
    $("#all").addClass("hidden");
    $("#javascript").addClass("hidden");
    $("#shiny").addClass("hidden");
    $("#figma").removeClass("hidden");
});
