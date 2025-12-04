

var luku1 = parseFloat(prompt("Anna luku 1: "));
var luku2 = parseFloat(prompt("Anna luku 2: "));
if(luku1 >= luku2){
    console.log("Luku 1, "+luku1+" on suurempi");
} else if(luku2 >= luku1){
    console.log("Luku 2, "+luku2+" on suurempi");
} else {
    console.log("Luvut ovat yhtä suuret");
}