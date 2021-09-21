const hour = document.querySelector('.time-h-v');
const mins = document.querySelector('.time-m-v');
const sec = document.querySelector('.time-s-v');
const ampm = document.querySelector('.time-a-p');
const wis = document.querySelector('.main-w-t');


function addZero(arg) {
    return arg < 10 ? '0'.concat(arg) : arg;
}


function time()
{
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    hour.textContent = `${addZero((h % 12) || 12)}`;
    mins.textContent = `${addZero(m)}`;
    sec.textContent = `${addZero(s)}`;
    ampm.textContent = `${h >= 12 ? 'PM' : 'AM'}`;
    wis.textContent = `${h >= 12 ? 'GOOD AFTERNOON' : 'GOOD MORNING'}`
}
setInterval(time,1000);
