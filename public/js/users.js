$(document).ready(function() {
    // hide the container
    $(".searchCardsContainer").css("display", "none");
    // welcomes members
    $.get("/api/user_data").then(function(data) {
        // grabbing the username from the route to display in the users page
        let username = JSON.stringify(data.username);
        username = username.replace(/"/g, "")
        $(".member-name").text(` ${username}!`);
    });

    // When user hits enter for the search button
    $(document).on('click', "#searchterm", function(event) {
        $(".three").empty();
        // shows the container for results
        $(".searchCardsContainer").css("display", "block");
        // variable for user input
        var userInput = $("#search-input").val();
        // variables for api key and query url for API
        var queryURL = "../src/characters.json"
        // let apiKey = "AIzaSyAYJ05r2WOK34MO9zLkmaz0Ux9NWnYTCcI"
        // var queryURL = "https://factchecktools.googleapis.com/v1alpha1/claims:search?languageCode=en&query=" + userInput + "&key=" + apiKey;

        event.preventDefault();

        // grabs and displays the information from the API
        $.get(queryURL, function(response) {
            // loops through the responses
            if (response.length !== 0) {
                for (var i = 0; i < 6; i++) {
                    var id = response[i].id;
                    var name = response[i].name;
                    var attackOne = response[i].attacks.one
                    var attackTwo =  response[i].attacks.Two;
                    var strongAgainst = response[i].strongAgainst[i];
                    var weaknesses = response[i].weaknesses[i];
                    var image = response[i].image
                    console.log(name)
                    // displays the facts in cards
                    var fact =
                        `    
                            <div class="card inverted searchCard">
                        <div class="ui inverted segment">
                                <p id="name-${i}">${name}</p>
                                <div class="ui inverted divider"></div>
                                <p id="attacks-${i}">${attackOne,attackTwo}</p>
                                <i id="Strong Against-${i}">Strong Against Attack Types: ${strongAgainst}</i>
                                <i id="Weak Against-${i}">Weak Against Attack Types ${weaknesses}</i>
                                <h4><a href=${image} data-url${i}="${image}"></a><h4>
                                <button type="Add to my Arsenal" id ="saveBtn" class="ui inverted teal basic button" data-id="${i}">SAVE FACT</button>
                            </div>   
                            </div>    
                        `
                        // appends to the html
                    $(".userSearches").append(fact);
                };
            };
        });
    });

    // event listener for save button
    $(document).on('click', "#saveBtn", function(event) {
        event.preventDefault();
        // grabs the clicked card data that will be saved to the user's profile page where you will find the user's saved characters
        var savedname =$("#name-" + $(this).data("id"));
        var savedAttackOne = $("#AttackOne-" + $(this).data("id"));
        var savedAttackTwo = $("#AttackTwo-" + $(this).data("id"));
        var savedStrong = $("#Strong-" + $(this).data("id"));
        var savedWeak = $("#Weakness-" + $(this).data("id"));
        var savedimage = $("#image-" + $(this).data("id"));

        // an object to hold our results to be passed into our route
        var savedResults = {
            id: savedid[0].innerHTML,
            name: savedname[0].innerHTML,
            attackOne: savedAttackOne[0].innerHTML,
            attackTwo: savedAttackTwo[0].innerHTML,
            strongAgainst: savedstrongAgainst[0].innerHTML,
            weaknesses: savedweaknesses[0].innerHTML
            image: savedimage[0].parentElement.children[4].outerHTML,
            rating: savedRating[0].innerHTML,
        };

        // get request for the ID of the user
        $.get("/api/user_data").then(function(data) {
            var id = data.id
                // posts our object savedResults into the route for the specific user
            $.post("/api/user/" + id + "/search", savedResults);
        });
    });
});