function init () {
	console.log("func init (ответственн Валера)");
	GameoverFlag=false;
	var A=[];
	//вставить заполнение двойками в случайных позициях
	//var temp = [0, 0, 0, 0];
	for (var i=0; i<4; i++){
		A[i]=[];
        for (var j=0; j<4; j++){
        	A[i][j]=0;
		}
	}
	for (var i=0; i<2; i++){
        var ri = Math.floor(Math.random()*4);
        //console.log(ri);
        var rj = Math.floor(Math.random()*4);
        if(A[ri][rj]==2){
            while (A[ri][rj]!=2){
                ri = Math.floor(Math.random()*4);
                rj = Math.floor(Math.random()*4);
            }
		}
		A[ri][rj]=2;
	}
	//console.log(A);
	draw(A);
}

/*window.addEventListener("load",main,false);
function main(){
	//добавить вызов onrightpress и проч по нажатиям клавиш
}*/

function onrightpress () {
    //var A=[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
	var A=getMatrix();
    if (GameoverFlag == false)
	    move (0,A); //ход направо
}
function onleftpress() {
    //var A=[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
    var A=getMatrix();
    if (GameoverFlag == false)
        move (2,A);
}
function ondownress() {
    //var A=[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
    var A=getMatrix();
    if (GameoverFlag == false)
        move (3,A);
}
function onuppress() {
    //var A=[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
    var A=getMatrix();
    if (GameoverFlag == false)
        move (1,A);
}