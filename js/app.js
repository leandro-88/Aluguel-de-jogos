function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");
    let numero = 0;

    if(imagem.classList.contains("dashboard__item__img--rented")){
        resposta = prompt("Realmente deseja DEVOLVER? Responda S ou N").toLowerCase();
            if(resposta == "s" || resposta == "sim") {
            imagem.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.textContent = "Alugar";
            } else {
                alert("Não DEVOLVIDO");
            }

    } else {
        resposta = prompt("Realmente deseja ALUGAR? Responda S ou N").toLowerCase();
            if(resposta == "s" || resposta == "sim"){
            imagem.classList.add("dashboard__item__img--rented");
            botao.classList.add("dashboard__item__button--return");
            botao.textContent = "Devolver";
            numero = numero + 1;
            console.log("Foram alugados: " + numero);
            } else {
                alert("Não ALUGADO");
            }
    }
}
function palindromo(){
    let palavra = prompt("Digite uma palavra e verificarei se é um palíndromo: ");
    let numeroPalavra = parseFloat(palavra.length);
    let arredondando = parseInt(numeroPalavra) + 1;
    console.log(arredondando)
}
