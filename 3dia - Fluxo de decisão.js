//pergunta 1
let pergunta = prompt("Voce gosta de Front-End(1) ou Back-End(2)?")

//respostas
if (pergunta == "1"){
  alert("recomendo você aprender React ou Vue")
}
else if (pergunta == "2"){
  alert("recomendo você aprender C# ou Java")
}
else{
  alert("Você nao respondeu corretamente")
}

//pergunta 2
let skill = prompt("Você irá se especializar na área(1) ou vai seguir se desenvolvendo para se tornar Fullstack(2)?")

//respostas 2
if(skill == "1"){
  alert("Que bom! Mas é bom aprender um pouco da outra área")
}
else if (skill == "2"){
  alert("Perfeito! É sempre bom aprender de tudo")
}

//Programas de interesse
let programas = 0

while (programas < 10){
  prompt("Tem mais alguma tecnologia que você gostaria de aprender?")
  programas += 1
}
