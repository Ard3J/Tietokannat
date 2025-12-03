setTimeout(doSomething,2000);

function doSomething(){
    console.log("Demonstrating the callbacks");
}
console.log("The application is started");

//Anonyymi

setTimeout(function() {
    console.log("Demonstrating the anonymous callback");
}, 2000);
console.log("The anonymous application is started");

//Arrow

setTimeout(() => {
    console.log("Demonstrating the arrow callback");
}, 2000);
console.log("The anonymous arrow is started");