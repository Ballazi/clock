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
    wis.textContent = `${h >= 12 ? 'GOOD AFTERNOON !!' : 'GOOD MORNING !!'}`




}
setInterval(time,1000);






function imageTextChange()
{
    
    const sel1 = document.querySelector('#timestamps-w')
    const val1 = Number(sel1.value);

    const sel2 = document.querySelector('#timestamps-l')
    const val2 = Number(sel2.value);

    const sel3 = document.querySelector('#timestamps-n')
    const val3 = Number(sel3.value);

    const img = document.querySelector('.main-i');
    const text = document.querySelector('.main-i-t');



    let d = new Date();
    let c = d.getHours();



    if(val1 <= c && c < val2)
    {
        text.textContent = "wake up !!";
        img.style.backgroundImage = "url(./img/wake.png)";
    }
    else if(val2 <= c && c < val3)
    {
        text.textContent = "LET'S HAVE SOME LUNCH !!";
        img.style.backgroundImage = "url(./img/home.png)";
    }
    else
    {
        text.textContent = "good night !!";
        img.style.backgroundImage = "url(./img/sleep.png)";
    }


}

imageTextChange();








const party = document.querySelector('.main-b');
party.addEventListener('click' , eventlist);

function eventlist()
{
    const img = document.querySelector('.main-i');
    const text = document.querySelector('.main-i-t');
    text.textContent = "party time !!";
    img.style.backgroundImage = "url(./img/party.png)";
    party.textContent = "Double Click Stop Party !!";
}


party.addEventListener('dblclick', remove);
function remove()
{
    party.textContent = "Party Time !!";
    imageTextChange();
}
