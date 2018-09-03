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
    var apiKey = "Slxk7tck3X7EpB9VouJWIMx6gh04Vq3C";

    buildBtn();

    $(".foods").on("click", function foodInfo() {
            var food = $(this).attr("data-food");
            var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=" + apiKey + "&limit=10";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                var foodDiv = $("<div class='food'>");

                var rating = response.rating;
                var pRating = $("<p>").text("Rating: " + rating);
                foodDiv.append(pRating);

                var imgUrl = response.images.original.url;
                var image = $("<img>").attr("src", imgUrl)
                foodDiv.append(image);
                console.log(imgUrl)

                $(".showRoom").append(foodDiv);

            })
    })


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
        if (!(searchBtn in food)) {
            alert("You already typed that one!");
        }
        buildBtn();
    })


    // for loop to run through food array
    function buildBtn() {
        $("#searchButtons").empty();
        for (var i = 0; i < food.length; i++) {
            var foodBtn = $("<button>").attr("data-food", food[i]);
            foodBtn.attr("class", "foods")
            $(foodBtn).text(food[i]);

            // create the buttons
            $("#searchButtons").append(foodBtn);

        }
    }

    // build function for on.click
    $("button").on("click", function () {

        // build var for each of the buttons


        // create ajax get


        // var for image property


        // creating image tag


        // setting attributs to the dom


        // prepending everything
    })
})