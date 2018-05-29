function move (dir, A) {
    console.log("func move (зависит от всех троих)");
    var A1 = rotate(dir,A);
    var A2=calc_new_pos(A1);
    var A3=rotateBack(dir,A2);
    addPoints(Sum);
    draw(A3);
    var flag = check(A3);
    if (flag == false) {
        gameover();
    }
}


function rotate(dir, A) {
    console.log("func rotate (ответственн Миша)");
    var T=[];
    for (var i=0; i<4; i++) {
        T[i] = [];
        for (var j=0; j<4; j++){
            T[i][j]=0; //заполняем матрицу T пустыми значениями
        }
    }
    for (var k=0; k<dir; k++){
        for (var i=0; i<4; i++) {
            for (var j=0; j<4; j++) {
                var j1=3-i;
                var i1=j;
                T[i1][j1] = A[i][j];
            }
        }
        for (var i=0; i<4; i++) {
            for (var j=0; j<4; j++){
                A[i][j]=T[i][j]; //A=T (честное присваивание)
            }
        }
    }
    //необходимо вывести матрицу, повёрнутую по часовой стрелке
    //повернуть dir раз
    return A;
}

function rotateBack (dir, A){
    return rotate(4-dir,A);
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
    //var Sum=0;
	var check_var = 0
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
		if (check_var != 1){
			shiftAndClap(B)
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
	if (placeOfNullI.length<1){return B;}
        var randPlace=Math.floor(Math.random()*(placeOfNullI.length));//рандомный выбор места из списка всех нулей
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

                }
            }
        }
		check_var = 1
        B=shift(B);//после этого сдвигает вправо
        addRandNum(B);//добавление в рандомное место 2 или 4
		check_var = 0
        return B;
    }
    var A1=[];
    for (var i=0; i<4; i++){
        A1[i]=[];
        for (var j=0; j<4; j++){
            A1[i][j]=A[i][j]; //защита от изменнения A
        }
    }
    //console.log(A1);
    var A2=shift(A);
    return A2;
