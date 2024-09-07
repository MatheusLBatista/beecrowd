let lines = ['7', '14', '106'];

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let c = parseInt(lines[2]);

let maiorab = ((a + b) + Math.abs(a-b)) / 2;
let maiorabc = ((maiorab + c) + Math.abs(maiorab - c)) / 2

if(maiorab > maiorabc) {
    console.log(maiorab + " eh o maior")
}
else {
    console.log(maiorabc + " eh o maior")
}
