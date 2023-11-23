//variaveis
let tentativas = 0
let adivinha = prompt("Escolha um numero de 1 a 10")

//randomizador
let numero = Math.floor(Math.random() * (10 - 0 + 1) + 0)


//funcao de tentativa e acerto
while(tentativas < 2){
  if (adivinha == numero){
    alert("aoba tu acerto o numero")
    tentativas += 2
  }
  else{
      adivinha = prompt("tu errou, tenta denovo ae")
      tentativas += 1
      if (tentativas >= 2){
      alert(`O numero desconhecido é ${numero}`)
        }
    }
}
