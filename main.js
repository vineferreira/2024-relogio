const botoes = document.querySelectorA11(".botao");

for(let i=0;i<botoes.length;i++){
    botoes[i].onclick = function(){
        for(let j=0;botoes.lenght;j++){
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
    }
}




