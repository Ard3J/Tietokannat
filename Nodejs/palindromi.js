const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Anna sana: ', input => {
    const sana = input;
    rl.close();
    var palindromi = 1;
    for(let i = 0; i <(sana.length/2); i++){
        if(sana[i] !== sana[sana.length-1-i]){  //-1 koska length tulos alkaa ykkösestä ja indeksi nollasta
            palindromi = 0;
            break;
        }
    }
    if(palindromi == 1){
            console.log(sana+' on palindromi.');
    } else {
        console.log(sana+' ei ole palindromi.');
    }
});