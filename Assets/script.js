$("#all-btn").click(function() {
    $(".card").removeClass("hidden");
});

$("#javascript-btn").click(function() {
    $("#weather-dashboard").removeClass("hidden");
    $("#gun-violence-data-report").addClass("hidden");
    $("#groupup").addClass("hidden");
});

$("#shiny-btn").click(function() {
    $("#weather-dashboard").addClass("hidden");
    $("#gun-violence-data-report").removeClass("hidden");
    $("#groupup").addClass("hidden");
});

$("#figma-btn").click(function() {
    $("#weather-dashboard").addClass("hidden");
    $("#gun-violence-data-report").addClass("hidden");
    $("#groupup").removeClass("hidden");
});
