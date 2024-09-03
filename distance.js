let lines = [ ['1.0', '7.0'],
              ['5.0', '9.0'] 
            ];

let X1 = parseFloat(lines[0][0]);
let Y1 = parseFloat(lines[0][1]);

let X2 = parseFloat(lines[1][0]);
let Y2 = parseFloat(lines[1][1]);

let distance = Math.sqrt( Math.pow(X2 - X1, 2) + Math.pow(Y2 - Y1, 2) )

console.log(distance.toFixed(4));

/*
let X1 = parseFloat(lines[0].split(' ')[0]);
let Y1 = parseFloat(lines[0].split(' ')[1]);

let X2 = parseFloat(lines[1].split(' ')[0]);
let Y2 = parseFloat(lines[1].split(' ')[1]);

let distance = Math.sqrt( Math.pow(X2 - X1, 2) + Math.pow(Y2 - Y1, 2) )

console.log(distance.toFixed(4));
*/