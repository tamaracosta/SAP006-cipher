//const cipher = {

//};

//export default cipher;

// (codigoDaLetra + deslocamento) % tamanhoDoAlfabeto
// ex: (codigoDaLetra + 7) % 26












function criptografar() {

  const mensagem = document.getElementById("denuncia").value;
  const offset = Number(document.getElementById("seleciona-chave").value);
  let saida = ""
  let codigoASCDaLetra;
  let novoCodigo;
  let letraCriptografada;
  let letraAtual;

  for (var i = 0; i < mensagem.length; i++) {
    letraAtual = mensagem[i]
    if (letraAtual !== " ") {
      codigoASCDaLetra = letraAtual.charCodeAt()
      novoCodigo = codigoASCDaLetra + offset
      letraCriptografada = String.fromCharCode(novoCodigo)
      saida += letraCriptografada
    } else {
      saida += " "
    }

  }
  document.getElementById("mensagem-criptografada").innerHTML = saida

}

// console.log(((codigoASCDaLetra - 65 + offset) % 26) + 65);


function descriptografar() {
    
  const mensagem = document.getElementById("mensagem-criptografada").value;
  const offset = Number(document.getElementById("seleciona-chave").value);
  let saida = ""
  let codigoASCDaLetra;
  let novoCodigo;
  let letraCriptografada;
  let letraAtual;

  for (var i = 0; i < mensagem.length; i++) {
    letraAtual = mensagem[i]
    if (letraAtual !== " ") {
      codigoASCDaLetra = letraAtual.charCodeAt()
      novoCodigo = codigoASCDaLetra - offset
      letraCriptografada = String.fromCharCode(novoCodigo)
      saida += letraCriptografada
    } else {
      saida += " "
    }


  }
  document.getElementById("mensagem-descriptografada").innerHTML = saida
}


