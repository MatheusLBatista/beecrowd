let lines = [400];

let daysInput = lines[0];
let years = 0;
let months = 0;
let days = 0;

while (daysInput !== 0) {
    if(daysInput >= 365) {
        years = Math.floor(daysInput / 365);
        daysInput = daysInput % 365;
    }
    else if(daysInput >= 30 && daysInput < 365) {
        months = Math.floor(daysInput / 30);
        daysInput = daysInput % 30;
    }
    else {
        days = daysInput;
        break;
    }
}

console.log(
    `${years} ano(s)` +'\n'+
    `${months} mes(es)` +'\n'+
    `${days} dia(s)`
)