let lines = [
    "5.0", "7.1"
];

let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);

let media = ((A * 3.5) + (B * 7.5)) / 11.0;

console.log("MEDIA = " + media.toFixed(5));
