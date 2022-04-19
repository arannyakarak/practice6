
//This code does NOT create any global variables.
//Promises can be chained together, with the previous promise
// passing its results to the next one in the chain.
// the format is: fetch().then().then().catch()
//it's easier to read if we put each step in its own line,
//that's why the periods start the then lines.

window.onload = function() {
    fetch("https://x-colors.herokuapp.com/api/random")
    .then((response) => response.json())
    .then((data) => {
        document.body.style.backgroundColor = data.rgb;
    })
    .catch((err) => console.log("Oops!", err));
};

fetch("houses.json")
    .then((response) => response.json())
    .then((data) => {
        //create a temp holder to append all the html generated inside the forEach iterator
        let html = "";
        html += `<dl class="showcase">`;
        //the argument "house" passed to the arrow function
        //holds each item in the array in turn.
        data.forEach((house) => {
            let family = house.members.join(" | ");

            // generate the html snippet for one array item
            //to be added to the "html" temp holder.
           
            let dt = `<dt class="name">${house.name}</dt>`;
            html += dt;

            let dd = `<dd class="desc">${family}</dd>`;
            html += dd;

        //     let objInfo = `<p class="house">${house.name}</p>
        // <p class="folks">${family}</p>`;
            // html += objInfo;
        });

        html += `</dl>`;
        //make a reference to the html container where
        //the info will be displayed.
        const container = document.querySelector("#container");
        container.innerHTML = html;
    })
    .catch((err) => console.log("Oops!", err));
    //this only runs if there is an error during the above process
