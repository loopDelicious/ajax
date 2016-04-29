"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    // trigger ajax get request to fortune route, upon response, execute anonymous function that replaces
    // text of fortune-text div with result returned from server
    $.get('/fortune', function(result) { $('#fortune-text').html(result); });
}

$('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    // Ajax request to the dynamic url created above; upon response execute extractForecast
    $.get(url, extractForecast);
    // TODO: request weather with that URL and show the forecast in #weather-info
}

// Ajax callback function: result from server should be a dictionary containing the
// property "forecast". Extract value of forecast and have it show up in #weather-info div.
function extractForecast(result) {
    $('#weather-info').html(result['forecast']);
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


