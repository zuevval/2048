function test(){
    var A = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
    //console.log(rotate(1,A));
    //console.log(rotate(2,A));
    //console.log(rotate(3,A));
    var dir = 3;
    console.log(rotateBack(dir, rotate(dir, A)));
    //console.log(rotate(1,rotate(1,A)));
    gameover();
    //textWarning.innerHTML='Game over!';
}