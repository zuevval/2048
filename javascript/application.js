function init () {
	console.log("func init (ответственн Валера)")
	var A=[];
	//вставить заполнение двойками в случайных позициях
	var temp = [0, 1, 2, 3];
	for (var i=0; i<4; i++){
		A[i]=temp;
	}
	console.log('A is ' + A);
	console.log(A);
	td11.innerHTML=0;
}

window.addEventListener("load",main,false);
function main(){
	//добавить вызов onrightpress и проч по нажатиям клавиш
}

function onrightpress () {
	//вставить получение A из таблицы
	var A=[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
	/*var A=[];
	for (var i=0; i < 4; i++){
		for (var j=0; j<4; j++){
			var current_td =null;
			switch (10*i+j){
				case
			}
		}
	}*/
	move (0,A); //ход направо
}
function onleftpress() {}
function ondownress() {}
function onuppress() {}