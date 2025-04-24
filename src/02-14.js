var obj = {result : 0};
obj.add = function(x, y){
    function inner(){
        this.result = x+y;
    }
    inner = inner.bind(this); // bind() 메서드를 이용해 바깥쪽 함수의 this를 inner함수의 this로 직접 연결 
    inner();
}
obj.add(3, 4);

console.log(obj); //{result : 0}
//console.log(result); //7