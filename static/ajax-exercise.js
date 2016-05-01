"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    // .get the fortune (from /fortune, returns a fortune, and then
    // perform success function - to display the fortune in #fortune-text
    // div
    
    $.get('/fortune', function(result) { 
        $('#fortune-text').html(result); });
}

$('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, function(result) {
        $('#weather-info').html(result['forecast'])
    });
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

// TODO: if the result code is ERROR, make it show up in red (see our CSS!)
function showOrder(result) {
    if (result.code === "OK") {
        $('#order-status').html(result['msg']);
    } else {
        $('#order-status').addClass("order-error");
        $('#order-status').html(result['msg']);
    }
}

function orderMelons(evt) {
    evt.preventDefault();

    var formInputs = {
        "melon_type": $("#melon-type-field").val(),
        "qty": $('qty-field').val()
    };

    // TODO: show the result message after your form
    $.post('/order-melons.json', formInputs, showOrder);
}

  



$("#order-form").on('submit', orderMelons);

