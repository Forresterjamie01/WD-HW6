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
    });

    function weatherPrediction(searchTerm) {
        $ajax({
            type: "Retrieve Data"
            url:"http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=cbf2d0da55eacc492ad854fbeb02b8fa" + searchTerm + "cbf2d0da55eacc492ad854fbeb02b8fa",
       
       
        }).then(function (data) {
            if (pasthistory.indexOf(searchTerm) === -1) {
                pasthistory.push(searchTerm);
                localStorage.setItem("history", JSON.stringify(pasthistory));
                generaterow(searchTerm);
            }
        
            //this function will get rid of old content that the user inputted
        $("today").empty();

    

