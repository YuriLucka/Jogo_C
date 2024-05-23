let formulario = document.querySelector(".formulario");
let inicioInput = document.querySelector("#inicio");
let fimInput = document.querySelector("#fim");
let tentativasInput = document.querySelector("#tentativas");
let notificacao = document.querySelector(".notificacao");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let inicio = parseInt(inicioInput.value);
    let fim = parseInt(fimInput.value);
    let tentativas = parseInt(tentativasInput.value);
    let palpite

    if (inicio === fim) {
        notificacao.innerHTML = "O valor de Inicio e Fim devem ser diferentes.";
        notificacao.style.display = "inline";
        return;
    } else if (inicio > fim) {
        notificacao.innerHTML = "O valor de Inicio deve ser menor que o de Fim.";
        notificacao.style.display = "inline";
        return;
    }

    let numero_aleatorio = Math.floor(Math.random() * (fim - inicio + 1)) + inicio;

    for(i=1; i<= tentativas; i++){
        palpite = prompt(`Tentativa ${i} de ${tentativas}`)
        
        if(palpite < numero_aleatorio){
            alert("O número secreto é maior.");
        } else if(palpite > numero_aleatorio){
            alert("O número secreto é menor.");
        } else{
            alert(`Acertou Miseravi!\nO número secreto era ${numero_aleatorio}😎`)
            break
        }

        if(i == tentativas){
            alert(`Errou Tudo!\nO número secreto era ${numero_aleatorio} 💀`)
        }
    }

});

inicioInput.addEventListener("input", limpar_mensagem);
inicioInput.addEventListener("click", limpar_mensagem);
fimInput.addEventListener("click", limpar_mensagem);
fimInput.addEventListener("input", limpar_mensagem);
tentativasInput.addEventListener("click", limpar_mensagem);
tentativasInput.addEventListener("input", limpar_mensagem);

function limpar_mensagem() {
    notificacao.style.display = "none";
}
