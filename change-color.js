var colorButton = document.getElementById('button1');
var colorArray = ['green','red','orange','lime','velvet'];
colorButton.addEventListener('click' , function(){
   var outside = document.getElementById('outside');
   const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
   outside.style.backgroundColor = randomColor;
console.log(outside);
});
var shapeButton = document.getElementById('button2');
var shapeArray = ['circle' , 'square','Rectangle','triangle-up'];
var current = 'inside'
document.getElementById('button2').onclick=function(){
    var randomShape = shapeArray[Math.floor(Math.random() * shapeArray.length)];
    document.getElementById(current).setAttribute('id',randomShape);
    current = randomShape;

};





// shapeArray.addEventListener('click' , function(){
//     var a = (Math.random());
//     var b = (Math.random());
//     var c = (Math.random());
//     var d = (Math.random());
//    var curve = shapeButton.getContext('2d');
//     curve.beginPath();
//     curve.rect(a,b,c,d);
//     curve.stroke();
// });


