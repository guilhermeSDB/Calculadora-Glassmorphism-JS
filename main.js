$('#historicoBtn').click(function () { // Abre e fecha o Histórico
    if ($('#historico').hasClass('hidden')) { // Verifica se Historico ja esta fechado
        $('#historico').removeClass('hidden'); // Caso esteja remove a classe
        $('#historico').addClass('historicoAnimation');

    } else {
        $('#historico').addClass('hidden'); // Caso nao esteja adiciona a classe
    }

})


function insert(num) {
    if (countLine() == 2) {
        var text = $("#resultado").val();
        var lines = text.split(/\r|\r\n|\n/);
        document.getElementById('resultado').innerHTML = '';
    }
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;

}

function clean() { // Apaga tudo no TextArea
    document.getElementById('resultado').innerHTML = "";
}

function back() { // Apaga numero por numero
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function countLine() { // Conta o numero de linhas
    var text = $("#resultado").val();
    var lines = text.split(/\r|\r\n|\n/);
    var count = lines.length;
    return count;
}

function calcular(resultado) { //Calcula o valor 
    let calculo = eval(resultado);
    return calculo
}

function exibirResult() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').textContent = resultado + " = " + '\n' + calcular(resultado);
        var exibir = document.getElementById("resultado").value;// Traz o resultado da Conta
        var historico = []; // Cria o array
        var urls = exibir.split(','); //Separa por virgula
        urls.map(url => historico.unshift(url.replace(/(.*?)produto\//g, '').replace(/\n/g, ''))); //Adiciona para o Array e remove a quebra de linha
        arrayLength = historico.length; // Verifica o tamanho do array
        $(historico).each(function (i, e) { //Foreach com Jquery 
            $("#historico").append(
                '<div> <h1>' + historico[i] + '<hr> </div>' //Criando uma div para cada elemento do array
            )
        })

    }
    else {
        document.getElementById('resultado').innerHTML = "Nada para Calcular" // Calculo de Erro
    }
}