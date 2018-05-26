function move (dir, A){
	console.log("func move (зависит от всех троих)");
	if(dir == 0){
		var A3 = calc_new_pos(A)	
	}else{
		if(dir == 1 || dir ==3){
			var A1 = angle_rotate(A,dir)
			var A2 = calc_new_pos(A1)
			var A3 = angle_rotate(A,(dir + 2) % 4)
		}else{
			var A1 = line_rotate(A)
			var A2 = calc_new_pos(A1)
			var A3 = line_rotate(A2)
		}
	draw(A3);
	var flag=check(A3);
	if(flag==false){
		gameover();
	}
}

function line_rotate(A){ //нужен для поворота на 180 (разворота)
	var A_rotate=[]
	for(var i = 0; i < 4; i++){
		A_rotate.push([])
		for(var p = 0; p < 4; p++){
			A_rotate[i].push(A[i][3-p])
		}
	}
	return A_rotate
}

function angle_rotate(A,dir){
	var A_rotate=[]
	if (dir == 1){ // первый поворот для "вверх", второй для "вниз"
		for(var i = 0; i < 4; i++){
			A_rotate.push([])
			for(var p = 0; p < 4; p++){
				A_rotate.push(A[3-p][i])
			}
		}
	}
	if (dir == 3){ // первый поворот для "вниз", второй для "вверх"
		for(var i = 0; i < 4; i++){
			A_rotate.push([])
			for(var p = 0; p < 4; p++){
				A_rotate.push(A[p][3-i])
			}
		}
	}
	return A_rotate
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
    var Sum=0;
    function shift(B){ //функция сдвига
        for(var i=0;i<4;i++){
            for(var j=3;j>0;j--)//двигает с конца строки
            {
                if(B[i][j-1]!=0&&B[i][j]==0){ //при нахождении нулевого элемента сдвигает в право и переходит снова в конец строки
                    B[i][j]=B[i][j-1];
                    B[i][j-1]=0;
                    j=3;
                }

            }
        }
        return B;
    }
    function addRandNum(B){//функия добавления в рандомное пустое место 2 или 4 с шансом 75/25
        var placeOfNullI=[];//два массива, запоминающие строку и столбик нулевых элементов
        var placeOfNullJ=[];
        var n=Math.floor(Math.random()*3+2);//генерация 2 или 4
        if (n<4){n=2;}
        for(var i=0;i<4;i++){
            for(var j=0;j<4;j++){
                if(B[i][j]==0){
                    placeOfNullI.push(i);//запоминание мест нулей
                    placeOfNullJ.push(j);
                }
            }
        }
        var randPlace=Math.floor(Math.random()*(placeOfNullI.length+1));//рандомный выбор места из списка всех нулей
        var i=placeOfNullI[randPlace];
        var j=placeOfNullJ[randPlace];
        B[i][j]=n;//присваивание элементу массива с рандомным номером строки и столбца 2 или 4 в зависимости от генерации
    }
    function shiftAndClap(B){//функция сдвига и "схлопывания" чисел так же работает с конца
        for(var i=3;i>-1;i--){
            for(var j=3;j>0;j--){
                if (B[i][j-1]==B[i][j]){//при нахождении одинаковых чисел сливает в сумму на месте правого числа
                    B[i][j]*=2;
                    B[i][j-1]=0;
                    Sum+=B[i][j];//добавление в общий счет суммы "схлопнутых" элементов
                    B=shift(B);//после этого сдвигает вправо

                }
            }
        }
        addRandNum(B);//добавление в рандомное место 2 или 4
        return B;
    }
    A1=shiftAndClap(A);
    return A1;
}
