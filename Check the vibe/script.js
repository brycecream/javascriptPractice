
let day = document.getElementById("day");
let button1 = document.querySelector("#button1");

button1.onclick = theDay;

function theDay() {
// get's the pages title and image
let title = document.getElementById("title");
let image = document.getElementById("image");
// get's the value from input and makes it lowercase!
let dayValue = day.value;
let dayLower = dayValue.toLowerCase();
// start of logic for showing message/gif for the inputed day
    if (dayLower == "monday") {
        title.innerText = "Oh...It's Monday..I hate that day."; //innertext changes the pages h1 text to the matching message
        //changes the pages image's src to the correct gif
        image.src = "https://media1.giphy.com/media/5Szs80FJTKDHQmA1SD/giphy.gif?cid=ecf05e47qg3un5ryyikgvjh2dwglbwsx3pw8n1cbkhhm9nn5&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    } else if (dayLower == "tuesday" || dayLower == "wednesday" || dayLower == "thursday" ) {
        title.innerText = "It's one of the bad days...";
        image.src = "https://media3.giphy.com/media/q6RoNkLlFNjaw/giphy.gif?cid=ecf05e47ah1hr5lito94619tymvs2yjykk9ltaddpwnaikdh&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    } else if (dayLower == "friday" || dayLower == "saturday" ) {
        title.innerText = "It's the weekend?!?!?!";
        image.src = "https://media3.giphy.com/media/3oz8xPJ7Uwbbee7E9a/giphy.gif?cid=ecf05e47hx6qeau17vzzwncxli98qk3xtvqbzj8j3dchthuh&ep=v1_gifs_related&rid=giphy.gif&ct=g"
    } else if (dayLower == "sunday") {
        title.innerText = "Oh..it's a lazy Sunday.";
        image.src = "https://media3.giphy.com/media/l1J3NB0CwlBT01GXS/giphy.gif?cid=ecf05e477k0a0r4gil08nqc4plm7j000y078d3g52y7s610y&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    } else {
        title.innerText = "That's not even a day. Try again.";
        image.src = "https://media2.giphy.com/media/R51a8oAH7KwbS/giphy.gif?cid=ecf05e47db0nbcmccy5ar38w2527f5idpjtubooe898wh1u5&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    }
}