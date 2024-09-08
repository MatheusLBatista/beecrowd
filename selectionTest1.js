lines = [2, 3, 2, 6];

let A = lines[0];
let B = lines[1];
let C = lines[2];
let D = lines[3];

if(B > C && D > A && (C+D) > (A+B) && C > 0 && D > 0 && A % 2 == 0 ) {
    console.log("Valores aceitos");
}else{
    console.log("Valores nao aceitos");
}