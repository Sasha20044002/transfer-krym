'use strict';

let btn = document.getElementById('taxi');

btn.onclick = function (evt) {
 evt.preventDefault();
 
 console.log('Вы успешно заказали такси');
 alert('Вы успешно заказали такси');
};