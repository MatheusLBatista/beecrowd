let lines = [576];

let notaValor = lines[0];
let nota100 = 0;
let nota50 = 0;
let nota20 = 0;
let nota10 = 0;
let nota5 = 0;
let nota2 = 0;
let nota1 = 0;

if (notaValor > 0 && notaValor < 1000000 ) {

    while(notaValor !== 0) {

        if (notaValor >= 100) {
            nota100 = Math.floor(notaValor / 100);
            notaValor = notaValor % 100;
        } 
        else if (notaValor >= 50){
            nota50 = Math.floor(notaValor / 50);
            notaValor = notaValor % 50;
        }
        else if (notaValor >= 20){
            nota20 = Math.floor(notaValor / 20);
            notaValor = notaValor % 20;
        }
        else if (notaValor >= 10){
            nota10 = Math.floor(notaValor / 10);
            notaValor = notaValor % 10;
        }
        else if (notaValor >= 5){
            nota5 = Math.floor(notaValor / 5);
            notaValor = notaValor % 5;
        }
        else if (notaValor >= 2){
            nota2 = Math.floor(notaValor / 2);
            notaValor = notaValor % 2;
        }
        else if (notaValor >= 1){
            nota1 = Math.floor(notaValor / 1);
            notaValor = notaValor % 1;
        }
    }

    console.log(
        lines[0] +"\n" +
        `${nota100} nota(s) de R$ 100,00` + "\n" +
        `${nota50} nota(s) de R$ 50,00` + "\n" +
        `${nota20} nota(s) de R$ 20,00` + "\n" +
        `${nota10} nota(s) de R$ 10,00` + "\n" +
        `${nota5} nota(s) de R$ 5,00` + "\n" +
        `${nota2} nota(s) de R$ 2,00` + "\n" +
        `${nota1} nota(s) de R$ 1,00`

    );
    
} else {
    console.log("Presentation Error");
}
