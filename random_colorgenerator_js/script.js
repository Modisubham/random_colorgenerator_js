 function getColor(){
    const randomNumber =Math.floor(Math.random()*16772155);
    const randomCode="#" +randomNumber.toString(16);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("colorCode").innerText=randomCode;
 }
 getColor();
