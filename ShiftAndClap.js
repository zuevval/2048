window.addEventListener("load", main_code, false); 
function main_code(){
	var B=[
	[4,0,4,4],
	[2,8,8,2],
	[0,4,4,8],
	[4,2,0,4]
	];
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
	B=shiftAndClap(B);
	console.log(B);
	
	
}