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
    afterScoreText.innerHTML='Game over!';
    GameoverFlag=true;
}

function addPoints(points){
    console.log("func addPoints (ответственн Валера)");
    var score = scoreNum.innerHTML;
    score=Number(score);
    score+=points;
    scoreNum.innerHTML=score;
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