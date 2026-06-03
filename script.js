function mostrarMensagem() {
    alert(
        "A conservação da água garante alimentos hoje e no futuro!"
    );
}

function calcularEconomia() {

    let hectares =
        document.getElementById("hectares").value;

    let economia = hectares * 5000;

    document.getElementById("resultado").innerHTML =
        "Com irrigação eficiente, é possível economizar aproximadamente " +
        economia.toLocaleString('pt-BR') +
        " litros de água.";
}

function resposta(correta){

    if(correta){
        document.getElementById("quizResultado").innerHTML =
        "✅ Correto! A irrigação por gotejamento reduz muito o desperdício.";
    }
    else{
        document.getElementById("quizResultado").innerHTML =
        "❌ Não é a melhor opção. O gotejamento é mais eficiente.";
    }
}