function MudaDesenho(){
var num1 = parseInt(prompt("Digite o primeiro número:"));
var num2 = parseInt(prompt("Digite o segundo número:"));
var num3 = parseInt(prompt("Digite o terceiro número:"));
const texto = document.querySelector("h2");
alert(`${num1},${num2},${num3}`)

   if((num1 > num2 && num1 < num3) || (num1 > num3 && num1 < num2)){
        texto.innerHTML = num1
    }
    else if(num2 > num1 && num2 < num3 || num2 > num3 && num2 < num1){
      texto.innerHTML = num2
   }
    else if(num3 > num1 && num3 < num2 || num3 > num2 && num3 < num1){
       texto.innerHTML = num3
   }
}
   


