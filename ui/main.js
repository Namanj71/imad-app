console.log('Loaded!');
//to change the content of main
var element=document.getElementById("main-text");
//to call that element 
element;
//to change value as
element.innerHTML="Hello to my first demo";
//to call image 
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+ 10;
    img.style.marginLeft=marginLeft +'px';
}
img.onclick=function(){
  var interval=setInterval(moveRight,50);  
};