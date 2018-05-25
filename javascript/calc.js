function move (dir, A){
	console.log("func move (зависит от всех троих)");
	var A1=rotate(dir, A);
	var A2=calc_new_pos(A1);
	var A3=rotate_back(A2);
	draw(A3);
	var flag=check(A3);
	if(flag==false){
		gameover();
	}
}

function rotate(dir, A){
	console.log("func rotate (ответственн Миша)");
	//необходимо вывести матрицу, повёрнутую по часовой стрелке
	//повернуть dir раз
	return A;	
}
function rotate_back(dir, A){
	console.log("func rotate_back (ответственн Миша)");
	//необходимо вывести матрицу, повёрнутую против часовой стрелки
	//повернуть dir раз
	return A;
}
function check(A){
	console.log("func check (ответственн Миша)");
	var T=null;
	var flag=false;
	for (var i=0; i<4; i++){
		T=calc_new_pos(A);
		for (var j=0; j<4; j++){
			for (var k=0; k<4; k++){
				if(T[j][k]!=A[j][k]){
					flag=true;
					return flag;
				}
			}
		}
		A=rotate(1,A); //повернуть один раз
	}
	return flag; //false=>gameover
}

function calc_new_pos(A){
	console.log("func calc_new_pos (ответственн Глеб)")	
	//необходимо вывести состояние после хода направо
	return A;
}