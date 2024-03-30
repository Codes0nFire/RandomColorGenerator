const body =document.querySelector("body");
const button=document.querySelector(".button-49");

function getRandomColors(){


  var randomcode=`#${(Math.floor(Math.random()*16545619)).toString(16)}`
  
  body.style.backgroundColor=randomcode;
  

  console.log(`colorCode:${randomcode}`);
  

}

getRandomColors();


button.addEventListener("click",getRandomColors);

