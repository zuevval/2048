function move (dir, A){
	console.log(A);
	//пока считается, что это завершённая функция
	console.log("func move (зависит от всех троих)");
	var A1=rotate(dir, A);
	var A2=calc_new_pos(A1);
	//console.log(A2);
	var A3=rotate_back(dir, A2);
	//console.log(A3);
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
	//console.log(A);
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