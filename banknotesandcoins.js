lines = [573.76];

let totalValue = parseFloat(lines[0]) * 100;
let nota100 = 0;
let nota50 = 0;
let nota20 = 0;
let nota10 = 0;
let nota5 = 0;
let nota2 = 0;
let coin1 = 0;
let coin050 = 0;
let coin025 = 0;
let coin010 = 0;
let coin005 = 0;
let coin001 = 0;

if(totalValue>=0 && totalValue <=1000000.00 * 100) {
    while (totalValue !== 0 ) {
        if(totalValue >= 10000){
            nota100 = Math.floor(totalValue / 10000);
            totalValue = totalValue % 10000;
        }
        else if(totalValue >= 5000){
            nota50 = Math.floor(totalValue / 5000);
            totalValue = totalValue % 5000;
        }
        else if(totalValue >= 2000){
            nota20 = Math.floor(totalValue / 2000);
            totalValue = totalValue % 2000;
        }
        else if(totalValue >= 1000){
            nota10 = Math.floor(totalValue / 1000);
            totalValue = totalValue % 1000;
        }
        else if(totalValue >= 500){
            nota5 = Math.floor(totalValue / 500);
            totalValue = totalValue % 500;
        }
        else if(totalValue >= 200){
            nota2 = Math.floor(totalValue / 200);
            totalValue = totalValue % 200;
        }
        else if(totalValue >= 100){
            coin1 = Math.floor(totalValue / 100);
            totalValue = totalValue % 100;
        }
        else if(totalValue >= 50){
            coin050 = Math.floor(totalValue / 50);
            totalValue = totalValue % 50;
        }
        else if(totalValue >= 25){
            coin025 = Math.floor(totalValue / 25);
            totalValue = totalValue % 25;
        }
        else if(totalValue >= 10){
            coin010 = Math.floor(totalValue / 10);
            totalValue = totalValue % 10;
        }
        else if(totalValue >= 5){
            coin005 = Math.floor(totalValue / 5);
            totalValue = totalValue % 5;
        }
        else {
            coin001 = Math.floor(totalValue / 1);
            totalValue = totalValue % 1;
            break;
        }
    }

    console.log(
        "NOTAS:" + '\n' +
        `${nota100} nota(s) de R$ 100.00` + "\n" +
        `${nota50} nota(s) de R$ 50.00` + "\n" +
        `${nota20} nota(s) de R$ 20.00` + "\n" +
        `${nota10} nota(s) de R$ 10.00` + "\n" +
        `${nota5} nota(s) de R$ 5.00` + "\n" +
        `${nota2} nota(s) de R$ 2.00` + "\n" +
        "MOEDAS:" + '\n' +
        `${coin1} moeda(s) de R$ 1.00` + "\n" +
        `${coin050} moeda(s) de R$ 0.50` + "\n" +
        `${coin025} moeda(s) de R$ 0.25` + "\n" +
        `${coin010} moeda(s) de R$ 0.10` + "\n" +
        `${coin005} moeda(s) de R$ 0.05` + "\n" +
        `${coin001} moeda(s) de R$ 0.01` 
    );
}
else{
    console.log("Presentation Error");
}