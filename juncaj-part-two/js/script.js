let rain = prompt("How many inches of rain fell this season?")

let inch = "*"
console.log("inches of rainfall " + inch.repeat(rain));

let yield = 50

if (rain >= 20) {
    yield = yield*.9
}

if (rain < 10){
    yield = yield*.8
}

let fertilizer = prompt("Did you use fertilizer? Answer YES or NO.");
if (fertilizer === "no") {
    console.log("The crop should yield roughly " + yield + " bushels of grain per acre.")
}
if(fertilizer === "yes") {
    var type = prompt("What type of fertilizer? PREMIUM or REGULAR")
}

if(type === "regular") {
    yield = yield*1.10;
    console.log("The crop should yield roughly " + yield + " bushels of grain per acre.")
} 
if(type === "premium") {
    yield = yield*1.15;
    console.log("The crop should yield roughly " + yield + " bushels of grain per acre.")
}