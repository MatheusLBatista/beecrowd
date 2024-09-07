lines= [140153];

let duration = lines [0];
let hours = 0;
let minutes = 0;
let seconds = 0;

while (duration !== 0) {
    if(duration >= 3600) {
        hours = Math.floor(duration / 3600);
        duration = duration % 3600;
    }
    else if(duration<3600 && duration > 60) {
        minutes = Math.floor(duration / 60);
        duration = duration % 60;
    }
    else {
        seconds = duration;
        break;
    }
}

console.log(`${hours}:${minutes}:${seconds}`);