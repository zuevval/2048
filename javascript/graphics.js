function start(){
	console.log("func start (ответственн Валера)");	
}
function draw(A){
	console.log("func draw (ответственн Валера)");
	//console.log(A);
	for (var i=0; i<4; i++){
		for (var j=0; j<4; j++){
			var rownum = i+1;
			var colnum = j+1;
			var s1 = "td"+rownum+colnum;
			var currTd=document.getElementById(s1);
			currTd.innerHTML=A[i][j];
			//writeTdID(i,j, A[i][j]);
		}
	}
}
function gameover(){
	console.log("func gameover (ответственн Валера)");
}

function getMatrix(){
    console.log("func getMatrix (ответственн Валера)");
    var A=[];
    for (var i=0; i<4; i++){
    	A[i]=[];
    	for (var j=0; j<4; j++){
            var rownum = i+1;
            var colnum = j+1;
            var s1 = "td"+rownum+colnum;
            var currTd=document.getElementById(s1);
    		A[i][j]=currTd.innerHTML;
		}
	}
	return A;
	//console.log(A);
}
/*function writeTdID (i,j, data){
    console.log("func writeID (ответственн Валера)");
	switch (10*(i+1)+(j+1)){
		case 11: td11.innerHTML=data;
		break;
        case 12: td12.innerHTML=data;
        break;
        case 13: td13.innerHTML=data;
        break;
        case 14: td14.innerHTML=data;
        break;
        case 21: td21.innerHTML=data;
            break;
        case 22: td22.innerHTML=data;
            break;
        case 23: td23.innerHTML=data;
            break;
        case 24: td24.innerHTML=data;
            break;
        case 31: td31.innerHTML=data;
            break;
        case 32: td32.innerHTML=data;
            break;
        case 33: td33.innerHTML=data;
            break;
        case 34: td34.innerHTML=data;
            break;
        case 41: td41.innerHTML=data;
            break;
        case 42: td42.innerHTML=data;
            break;
        case 43: td43.innerHTML=data;
            break;
        case 44: td44.innerHTML=data;
            break;
		default: console.log("error");
		break;
	}
}*/