function Tenis(){
    const texto = document.querySelector("h1");
    const texto2 = document.querySelector("h2");
    const imagem = document.querySelector("img");
    const x = document.querySelector("#x").value;
    const y = document.querySelector("#y").value;

    
    if((x <= 432) && (x > 0) && (y <= 468) && (y > 0)){
        texto.innerHTML = "Dentro";
        imagem.setAttribute("src","img/aries.png");
        imagem.setAttribute("width","500px");
        texto2.innerHTML = "Meus parabéns você conseguiu acertar a bolinha dentro da quadra meu nobre!!"
    }

    else {
        texto.innerHTML = "Fora";
        imagem.setAttribute("src","img/touro.png");
        imagem.setAttribute("width","500px");
        texto2.innerHTML = "MAN VOCÊ É MUITO INCOMPETENTE MESMO!!"
    }
}