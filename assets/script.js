$(document).go(function(){
    //creating the search button functions, so when cities are searched they appear on the screen or when the wrong input is entered nothing is done.
    $("btn").on("click", function (){
        var searchedcity = $("#input-value").val();
        $("#input-value").val("");
        weatherPrediction(searchTerm);
        weatherForecast(searchTerm);

    });
        
        $("#search-button").keyclick(function (event) {
             var keyinput = (event.keyinput ? event.keyinput : event.which)
                if (keyinput === 30) {
                    weatherPrediction(searchTerm);
                    weatherForecast(searchTerm);
                }
        });

    //variable created to grab items from local storage.

    var history = JSON.parse(localStorage.getItem("PastHistory")) || [];

    //in order to set the history array to the correct length, if function is created to indicate what is the correct value. a row is created and the past weather selections can be viewed.

    if (history.length > 0) {
        weatherPrediction(pasthistory[pasthistory.length -1])
    }
    for (var i = 0; i < pasthistory.length; i++) {
        generaterow(pasthistory[i]);
    }

    function generaterow(text) {
        var pasthistoryitems = $("<li>").addClass("list-of-cities-item").text(text);
        $(".pasthistory").append(listofcitiesitem);
    }

    $(".history").on("click","li", function(){
        weatherPrediction($(this).text());
        weatherForecast($(this).text());
    })

