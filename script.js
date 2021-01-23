changeBg()
function changeBg(){
    const league = [
        'url("img/ecole.jpg")',
        'url("img/jinx.png")',
        'url("img/akali.jpg")',
        'url("img/diana.jpg")',
        'url("img/ezreal.jpg")',
        'url("img/jiinx.jpg")',
        'url("img/kaisa.jpg")',
        'url("img/kindred.jpg")',
        'url("img/lee.png")',
        'url("img/lux.png")',
    ]
    const body = document.querySelector('body');
    const bg = league[Math.floor(Math.random() * league.length)];
    
    body.style.backgroundImage = bg;
    body.style.backgroundSize = "cover, no-repeat"
}
setInterval(changeBg, 10000)
const main = document.querySelector('main');

const date = new Date ()
console.log(date);
let weekday = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const date_hour = document.createElement('div');
date_hour.id = "date_hour";
main.appendChild(date_hour);

const container = document.createElement('div');
container.className = 'container';
date_hour.appendChild(container);

const date_today = document.createElement('div');
date_today.className = 'date'
date_today.textContent = weekday[date.getDay()] + " " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear() + " | ";
container.appendChild(date_today);

const hour = document.createElement('div');
hour.id = 'hour';
hour.textContent = date.toLocaleTimeString('fr-FR');
container.appendChild(hour);

function UR_Start()
{
UR_Nu = new Date();
UR_Indhold = showFilled(UR_Nu.getHours())+ ":" + showFilled(UR_Nu.getMinutes()) + ":" + showFilled(UR_Nu.getSeconds());
document.all.hour.innerHTML = UR_Indhold;
setTimeout("UR_Start()",1000);}
function showFilled(Value)
{return (Value > 9) ? "" + Value : "0" + Value;
} 