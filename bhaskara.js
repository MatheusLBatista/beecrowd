let lines = [10.0, 20.1, 5.1];

let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let C = parseFloat(lines[2]);

let bhaskara = Math.pow(B, 2) - (4 * A * C);

if(A === 0 || bhaskara < 0 ) {
    console.log("Impossivel calcular");
}
else{
    let R1 = (-(B) + Math.sqrt(bhaskara)) / (2 * A)
    let R2 = (-(B) - Math.sqrt(bhaskara)) / (2 * A)

    console.log(
        "R1 = " + R1.toFixed(5) + "\n" +
        "R2 = " + R2.toFixed(5)
    )
}