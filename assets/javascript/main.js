$("document").ready(function () {

    // build array for preloaded buttons (topics)
    var food = [
        "sushi",
        "sandwich",
        "pizza",
        "ramen",
        "steak",
        "burrito",
    ];


    // function for grabbing food from button
    function foodCall() {
        var food = $(this).attr("data-food");
        var apiKey = "Slxk7tck3X7EpB9VouJWIMx6gh04Vq3C";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=" + apiKey + "&limit=10";

        // ajax call
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data;

            // div to hold gif stuff
            var foodDiv = $("<div class='food'>");

            for (var i = 0; i < results.length; i++) {

                // var for rating
                var rating = results[i].rating;
                var pRating = $("<p>").text("Rating: " + rating);
                foodDiv.append(pRating);

                // var for images
                var imgUrl = results[i].images.fixed_width.url;
                var image = $("<img>").attr("src", imgUrl)
                foodDiv.append(image);
            }

            // prepend info into dom
            $(".showRoom").html(foodDiv);

        })
    }


    // for loop to run through food array
    function buildBtn() {
        $(".searchButtons").empty();

        // loop through array
        for (var i = 0; i < food.length; i++) {
            var foodBtn = $("<button>")
            foodBtn.attr("data-food", food[i]);
            foodBtn.addClass("foodsBtn")
            foodBtn.text(food[i]);

            // create the buttons
            $(".searchButtons").append(foodBtn);
        }
    }


    // global on-click/var for search terms to dom
    $("#addFood").on("click", function (event) {
        event.preventDefault();
        var searchBtn = $("#food-input").val();
        if (searchBtn === "") {
            alert("Empty!");
        }
        else {
            food.push(searchBtn);
        }
        // if (!(searchBtn in food)) {
        //     alert("You already typed that one!");
        // }
        buildBtn();
    })




    // build function for on.click
    $(document).on("click", ".foodsBtn", foodCall);
    buildBtn();

})