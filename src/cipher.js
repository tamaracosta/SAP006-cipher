const cipher = {
  encode: criptografar,
  decode: descriptografar
};

function criptografar(offset, mensagem) {
  let letraAtual;
  let codigoASCDaLetra;
  let novoCodigo;
  let letraCriptografada;
  let saida = ""

  if (typeof offset !== "number") {
    throw TypeError('Offset precisa ser númerico')
  }

  if (typeof mensagem !== "string") {
    throw TypeError('A Mensagem precisa ser texto')
  }

  if (offset < 0) {
    offset = 26 + offset;
  }

  for (let i = 0; i < mensagem.length; i++) {
    letraAtual = mensagem[i]
    codigoASCDaLetra = letraAtual.charCodeAt()


    //CODIFICAR OFFSET POSITIVO LETRA MAIUSCULA
    if (offset > 0 && codigoASCDaLetra >= 65 && codigoASCDaLetra <= 90) {
      novoCodigo = (((codigoASCDaLetra - 65 + offset) % 26) + 65)
      letraCriptografada = String.fromCharCode(novoCodigo)
      saida += letraCriptografada

      // CODIFICAR OFFSET POSITIVO LETRA MINUSCULA
    } else if (offset > 0 && codigoASCDaLetra >= 97 && codigoASCDaLetra <= 122) {
      novoCodigo = (((codigoASCDaLetra - 97 + offset) % 26) + 97)
      letraCriptografada = String.fromCharCode(novoCodigo)
      saida += letraCriptografada

      // CODIFICAR OFFSET NEGATIVO LETRA MAIUSCULA 
    } else if (offset < 0 && codigoASCDaLetra >= 65 && codigoASCDaLetra <= 90) {
      novoCodigo = (((codigoASCDaLetra - 90 + offset) % 26) + 90)
      letraCriptografada = String.fromCharCode(novoCodigo)
      saida += letraCriptografada

      // CODIFICAR OFFSET NEGATIVO LETRA MINUSCULA 
    } else if (offset < 0 && codigoASCDaLetra >= 97 && codigoASCDaLetra <= 122) {
      novoCodigo = (((codigoASCDaLetra - 122 + offset) % 26) + 122)
      letraCriptografada = String.fromCharCode(novoCodigo)
      saida += letraCriptografada

    } else {
      saida += letraAtual;
    }

  }
  return saida;
}

function descriptografar(offset, mensagem) {
  let letraAtual;
  let codigoASCDaLetra;
  let novoCodigo;
  let letraCriptografada;
  let saida = ""

  if (typeof offset !== "number") {
    throw TypeError('Offset precisa ser númerico')
  }

  if (typeof mensagem !== "string") {
    throw TypeError('A Mensagem precisa ser texto')
  }

  if (offset < 0) {
    offset = 26 + offset;
  }

  for (let i = 0; i < mensagem.length; i++) {
    letraAtual = mensagem[i]
    codigoASCDaLetra = letraAtual.charCodeAt()


    // DECODIFICAR OFFSET POSITIVO LETRA MAIÚSCULA 
    if (offset > 0 && codigoASCDaLetra >= 65 && codigoASCDaLetra <= 90) {
      novoCodigo = (((codigoASCDaLetra + 65 - offset) % 26) + 65)
      letraCriptografada = String.fromCharCode(novoCodigo)
      saida += letraCriptografada

      // DECODIFICAR OFFSET POSITIVO LETRA MINÚSCULA
    } else if (offset > 0 && codigoASCDaLetra >= 97 && codigoASCDaLetra <= 122) {
      novoCodigo = 122 - ((122 - codigoASCDaLetra + offset) % 26);
      letraCriptografada = String.fromCharCode(novoCodigo)
      saida += letraCriptografada

      // DECODIFICAR OFFSET NEGATIVO LETRA MAIUSCULA
    } else if (offset < 0 && codigoASCDaLetra >= 65 && codigoASCDaLetra <= 90) {
      novoCodigo = (((codigoASCDaLetra - 65 - offset) % 26) + 65)
      letraCriptografada = String.fromCharCode(novoCodigo)
      saida += letraCriptografada

      // DECODIFICAR OFFSET NEGATIVO LETRA MINUSCULA 
    } else if (offset < 0 && codigoASCDaLetra >= 97 && codigoASCDaLetra <= 122) {
      novoCodigo = (((codigoASCDaLetra - 97 - offset) % 26) + 97)
      letraCriptografada = String.fromCharCode(novoCodigo)
      saida += letraCriptografada

    } else {
      saida += letraAtual;
    }

  }
  return saida;
}

export default cipher;
