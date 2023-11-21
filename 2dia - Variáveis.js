//perguntas 1
let nome = prompt("Qual é seu nome?")
let idade = prompt("Quantos anos voce tem?")
let lingua = prompt("Qual linguagem de programação você está estudando?")

//resposta 1
alert (`Olà ${nome}, você tem ${idade} anos e esta aprendendo ${lingua}`)

//pergunta 2
let perg = prompt(`uma pergunta, você gosta de estudar ${lingua}?digite 1 para SIM ou 2 para NÃO`)

//resposta 2
if (perg == "1"){
  alert ("Muito bom! Continue estudando e você terá muito sucesso.")
}
{
  if (perg == "2"){
    alert ("Ahh que pena... Já tentou aprender outras linguagens?")
  }
  else(alert ("Você deu uma resposta inesperada"))
}
