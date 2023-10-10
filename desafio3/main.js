function zerinho(){
const texto = document.querySelector("h1");
const A = document.querySelector ("#A").value;
const B = document.querySelector ("#B").value;
const C = document.querySelector ("#C").value;


if (A == 1 && B == 0 && C== 0||A == 0 && B == 1 && C== 1) {texto.innerHTML = "A";}
if (A == 0 && B == 1 && C== 0||A == 1 && B == 0 && C== 1) {texto.innerHTML = "B";}
if (A == 1 && B == 0 && C== 1||A == 1 && B == 1 && C== 0) {texto.innerHTML = "C";}
if (A == 1 && B == 1 && C== 1||A == 0 && B == 0 && C== 0) {texto.innerHTML = "*";}
}