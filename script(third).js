// let n12 = 123
// let n1 = 12.345
// const qq = 'Hello'
// a1 = null;
// let name;
// const name2 = true
// const name3 = false

// let Slark = 2
// const Weaver = 2
// let Hero = {
//     gender : 'male',
//     age : '??',
//     name : 'Luna',
//     luna: true
// };
// let market = ['things',true,30, {name:'Edeka'}]
// let agee = 2;
// agee = 7;
// let money = 5000;
// let price = 3000;
// let age = 15;
// let a = 1;
// let b = 1;
// let test = true;

// let day = 'понедельник';
// let time = 6;
// if(day == 'понедельник'&& time >= 8){
//     console.log('Сегодня утро понедельника. Пора в школу!');
// } else {
//     console.log("Сейчас можно отдыхать")
// }
// let food = 'breakfast';
// console.log(food == 'breakfast' || food == 'dinner');

// let time31 = 21
// if (time31 <= 6 || time31 >= 21){
// console.log("Пора спать")
// } else if (time === 13) {
//     console.log("Пора обедать");
// } else {
//     console.log("Планов нет");
// }


// if (test) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// if(b==1){
//     console.log('Верно');
// } else{
//     console.log('неверно');
// }

// if(a===0){
//     console.log('Верно');
// } else{
//     console.log('неверно')
// }



// if(18>=age){
//     console.log('Привет,как дела?')
// } else if(35>=age){
//     console.log('Добрый день')
// } else{
//     console.log('Доброго времени суток')
// }





// if(money>=price){
//     console.log('Ты можешь купить')
// } else if(money<price){
//     console.log('Тебе не хватает')
// }else{
//     console.log('Тут что то должно быть')
// }




// if(age>=6){
//     console.log('You can go to school')
// }
// console.log(-5 - 15)
// console.log(-5/14)
// console.log(5**6)
// console.log(118%114)
// console.log(Slark)//вывод цыфры из переменной
// console.log(Hero.gender)//вывод строчки из обьъкта
// console.log(Weaver)//вывод цыфры из переменной
// console.log(market[0]+ '' +market[1])//вывод строчек из массива
// console.log(1 === 11);
// console.log(5< -5);
// console.log(0<=0);
// console.log(15 === '15');
// console.log(15 == '15');

// let abc = 201 + 24;

// switch (abc) {
//     case 205:
//         alert('мало');
//         break;
//     case 28:
//         alert('очень мало')
//         break;
//     case 225:
//         alert('верно')
//         break;
//     default:
//         alert('нет таких значений');
// }
// let device = prompt('введите свой девайс')
// switch(device){
//     case 'pc':
//         alert('хороший девайс')
//         break;
//     case 'ps':
//         alert('хорошая приставка')
//         break;
//     case 'phone':
//         alert('хороший комактный девайс')
//         break;
//     default:
//         alert('Я ещё незнаю такого девайся')
// }
// let colour = prompt('какой сейчас цвет?')
// switch(colour){
//     case 'red':
//         alert('Стой на месте')
//         break;
//     case 'yellow':
//         alert('Приготовься')
//         break;
//     case 'green':
//         alert('Можешь ехать')
//         break;
//     default:
//         alert('Я тебя не понимаю')
// }
// const str = prompt('Введите число между 0 и 3');
// switch(str){
//     case '0':
//         alert("Вы ввели число 0")
//         break;
//     case '1':
//         alert('Вы ввели число 1')
//         break;
//     case '2':
//         alert('Вы ввели число 2')
//         break;
//     case '3':
//         alert('Вы ввели число 3')
//         break;
//     default:
//         alert('я такого не знаю')
// }

// let zahl = prompt('Введите любое число')
// alert('Вы ввели число: '+ zahl)
const plus = document.getElementById('plus');
const value = document.getElementById('value');


function increment() {
    let result = Number(value.textContent) + 1;
    value.textContent = result;
}


plus.onclick = increment;




const minus = document.getElementById('minus')
 function minuss (){
     let minus_res = Number(value.textContent) - 1;
    value.textContent = minus_res;
  }
 minus.onclick = minuss;
// let i = 0
// while (i<=10){
//     console.log('i ещё не десять i = '+ i);
//     i++;
// }
// for (i = 0; i <= 25; i++){
//     console.log(i)
// }
// for(i = 0; i<= 50;i++){
//     console.log(i)
// }
// let sum = 0;
// for (let i = 0; i <= 32; i++) {
//     sum += i;
// }
// console.log("Сумма чисел от 1 до 32:", sum);
// log = 0
// while (log > -3){
//     log--;
//     console.log(`number ${i}!`);
// }

// for(let i=-2; i<=2;i++){
//     console.log(i)
// }
// for(let i = 0; i<=50;i+=2){
//     console.log('Все чётные: '+ i)
// }
 for(let i = 1;i<=50;i+=2){
     console.log('Все не чётные: '+ i)
 }
const randomBtn = document.getElementById('random');

 function random() {
     randomBtn.textContent = Math.round(Math.random() * 1000);
 }
 
 randomBtn.onclick = random;


// console.log(Math.ceil(.95));
// console.log(Math.floor(-45.95));
// console.log(Math.min(10,20));
// console.log(Math.pow(7,2));
// console.log(Math.sign('-3'));

// console.log(Math.min(-100,-22,-20,-21,-1000))
// console.log(Math.max(-100,-22,-20,-21,-1000))
// console.log(Math.ceil(4.49858));
// console.log(Math.random() * 1000)
// let stri = '   Привет!   ';
// stri.trim()
// console.log(stri)
// let strimm = "Здравствуйте";

// let strimmm = strimm.startsWith("з")
// console.log(strimmm)
// let sqsq = "Привет всем! Желаю вам хорошего дня!";
// let newStr = sqsq.slice(13);
// console.log(newStr);

// 'Позвоните пожалуйста '.concat('по этому телефону +....',', в 7 вечера');
// console.log(' Я не буду повторять!'.repeat(2));
// 'Привет! Я рад тебя видеть!'.slice(8,13);
// 'АргеНтинА'.toUpperCase();
// 'Я хочу кушать'.startsWith('я');
// '  Ты молодец!  '.trim
// const x = ['qqq','www','eee']
// const y = ['qqe','wwe','eeq']
// x.pop();
// x.shift();
// y.unshift('qwe');
// y.push('wwq')
// console.log(x)
// console.log(y)
// let veg = ['carrot','brocolli','icecream']
// console.log(veg[2])
// console.log('Привет!+Как+твои+дела+?'.split("+"));
// const words = ['карты','мосты','дела','морковь'];
// const continuee = words.filter(words => words.length > 4);
// console.log(continuee)
console.log('Привет.Я.ученик.RTS'.split("."));
let m = [534,354,53]
m.unshift(11)
m.push(51)
console.log(m)
let xc = ['testtttt1','test2','test3']
let xcv = xc.filter(xc => xc.length > 5);
console.log(xcv)
let market = ['ice','watter','test','computer'].sort().reverse()
console.log(market)
let a = [1,'трава','картошка','цирк',35]
a = a.slice(0,3)

let b = a.map(a=>{
    return(a + '!');
})
console.log(b)
console.log(new Date())
// const counter = document.getElementById('counter');
// const value = document.getElementById('value')


// function increment(){
//     let result = Number(value.textContent) + 1;
//     value.textContent = result;
// }
// counter.onclick = increment;

// let hours = new Date().getHours();
// document.getElementById('hours').innerHTML = hours;
// let minutes = new Date().getMinutes();
// document.getElementById('minutes').innerHTML = minutes;
// let seconds = new Date().getSeconds();
// document.getElementById('seconds').innerHTML = seconds;
// console.log(hours,minutes,seconds)
setInterval(function() {
    let seconds = new Date().getSeconds();
    if(seconds < 10) {
        seconds = '0' + seconds;
    }
    document.getElementById("seconds").innerHTML = seconds;

    let minutes = new Date().getMinutes();
    if(minutes < 10) {
        minutes = '0' + minutes;
    }
    document.getElementById("minutes").innerHTML = minutes;

    let hours = new Date().getHours();
    if(hours < 10) {
        hours = '0' + hours;
    }
    document.getElementById("hours").innerHTML = hours;
}, 1000);

let separators = document.querySelectorAll('#separator');

setTimeout(() => {
    for(let i = 0; i < separators.length; i++) {
        separators[i].textContent = ':';
    }
}, 1000)

const uploadButton = document.getElementById('upload');
const form = document.getElementById('form');
const buttons = document.getElementById('buttons');
const picture = document.getElementById('picture');


uploadButton.onclick = function() {
    let checkboxes = document.querySelectorAll('.checkbox');
    let checked = Array.from(checkboxes);
    checked = checked.filter(item => item.checked);
    
    form.style.display = 'none';

    checked.map(animal => {
        return (buttons.innerHTML += `
            <button class='button' id='change' onclick='showImage(${animal.id})'>
                ${animal.getAttribute('data-name')}
            </button>
        `);
    }) 
};

function showImage(name) {
    picture.innerHTML = `<img src='./images/${name.id}.png' class='picture-image' alt='${name.id}'>`;
};