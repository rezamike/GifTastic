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

    buildBtn();

    // global on-click/var for search terms to dom
    $("#addFood").on("click", function (event) {
        var searchBtn = $("#food-input").val();
        if (searchBtn != food) {
           food.push(searchBtn); 
        }
        buildBtn();
        event.preventDefault();
    })


    // for loop to run through food array
    function buildBtn() {
        for (var i = 0; i < food.length; i++) {
            var foodBtn = $("<button>").attr("data-food", food[i]);
            $(foodBtn).text(food[i]);

            // create the buttons
            $("#searchButtons").append(foodBtn);

        }
    }






    // build function for on.click
    // $("button" + i).on("click", function () {

        // build var for each of the buttons


        // create ajax get


        // var for image property


        // creating image tag


        // setting attributs to the dom


        // prepending everything
    // })
})