'use strict';

let btnTaxi = document.getElementById('taxi');
let btnTel = document.getElementById('telephone');

btnTaxi.onclick = function (evt) {
	evt.preventDefault();

	console.log('Вы успешно заказали такси');
	alert('Вы успешно заказали такси');
};

btnTel.onclick = function (evt) {
	evt.preventDefault();

	console.log('Вы успешно заказали звонок');
	alert('Вы успешно заказали звонок');
};