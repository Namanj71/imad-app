console.log('Loaded!');
//to change the content of main
var element=document.getElementById("main-text");
//to call that element 
element
//to change value as
element.innerHTML="Hello to my first demo";
//to call image 
var elementimg=document.getElementById("img");
var marginleft=0;
function moveRight(){
    marginleft=marginleft+10;
    elementimg.style.marginleft=marginleft+'px';
}
elementimg.onclick=function(){
  var interval=setInterval(moveRight,100);  
};