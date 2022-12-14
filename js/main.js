//HTML

var textoArea = document.querySelector("#input-texto");
var resultado = document.querySelector("#resultado");



var botaoCriptografar = document.querySelector("#botaoCriptografar");
var botaoDesincriptografar = document.querySelector("#botaoDescriptografar");
var botaoCopia = document.querySelector("#copyButton");

//Rejeitar certos caracteres

textoArea.addEventListener("keypress",function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.key);
    if ((keyCode > 47 && keyCode < 58)){
        e.preventDefault();
        alert("Digite somente letras");
       
    }
    if (!verificaCaracter(e)){
        e.preventDefault();
        alert("Digite apenas letras");
       
    }
});

function verificaCaracter(e){
    const caracter = String.fromCharCode(e.keyCode);
    
    const padrao = '[a-zA-z0-9 ]';
    
    if(caracter.match(padrao)){
        return true;

    }

}//funções dos botões
function criptografar(){
    var texto = textoArea.value;
    var resultado1 = texto.replaceAll("e", "enter");
    var resultado2 = resultado1.replaceAll("i", "imes");
    var resultado3 = resultado2.replaceAll("a", "ai");
    var resultado4 = resultado3.replaceAll("u", "ufat");
    var resultado5 = resultado4.replaceAll("o", "ober");

    resultado.value = resultado5.toLowerCase();
    
}

function desincriptografar(){
    var texto = textoArea.value;
    var resultado1 = texto.replaceAll("enter", "e");
    var resultado2 = resultado1.replaceAll("imes", "i");
    var resultado3 = resultado2.replaceAll("ai", "a");
    var resultado4 = resultado3.replaceAll("ufat", "u");
    var resultado5 = resultado4.replaceAll("ober", "o");

    resultado.value = resultado5.toLowerCase();

}
function limpaTela(){
    textoArea.value = '';
    resultado.value = '';
}
function copyText(){
    
    var textoCopiado = resultado.value;
    navigator.clipboard.writeText(textoCopiado);
    limpaTela();
    input.focus();
}
botaoCriptografar.onclick = criptografar;
botaoDesincriptografar.onclick = desincriptografar;
botaoCopia.onclick = copyText;
