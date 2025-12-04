const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Anna luku 1: ', input => {
    const luku1 = Number(input);
    rl.question('Anna luku 2: ', input => {
        const luku2 = Number(input);
        rl.close();

        if(luku1 >= luku2){
            console.log("Luku 1, "+luku1+" on suurempi");
        } else if(luku2 >= luku1){
            console.log("Luku 2, "+luku2+" on suurempi");
        } else {
            console.log("Luvut ovat yhtä suuret");
        }
    });
});

