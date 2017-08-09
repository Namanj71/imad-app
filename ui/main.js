console.log('Loaded!');
//to change the content of main
var element=document.getElementById("main-text");
//to call that element 
element
//to change value as
element.innerHTML="Hello to my first demo";
//to call image 
var eleimg=document.getElementById("img");
var marginleft=0;
function moveRight(){
    marginleft=marginleft+10;
    eleimg.style.marginleft=marginleft+'px';
}
eleimg.onclick=function(){
  var interval=setInterval(moveRight,50);  
};