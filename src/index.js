import cipher from './cipher.js';

function criptografar() {
    const mensagem = document.getElementById("denuncia").value;
    const offset = Number(document.getElementById("seleciona-chave").value);
    const saida = cipher.encode(offset, mensagem);

    document.getElementById("mensagem-criptografada").innerHTML = saida
}

document.getElementById("botao-criptografar").addEventListener("click", criptografar);


function descriptografar() {
    const mensagem = document.getElementById("mensagem-criptografada").value;
    const offset = Number(document.getElementById("seleciona-chave").value);
    const saida = cipher.decode(offset, mensagem);


    document.getElementById("mensagem-descriptografada").innerHTML = saida
}

document.getElementById("botao-descriptografar").addEventListener("click", descriptografar);


