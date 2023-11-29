let operação
let num1 
let num2 

while(operação != 'sair'){
  operação = prompt("Qual operação você ira usar no calculo?Soma, subtração, multiplicação, divisão ou gostaria de sair?")
  if(operação != 'sair'){
  if (operação != 'soma' && operação != 'subtração' && operação != 'multiplicação' && operação != 'divisão'){
    alert("Você não escreveu uma operação corretamente")
  }
  else{
  num1 = prompt("Insira um numero:")
  num2 = prompt("Insira o outro numero:")
  
  if (isNaN(num1) || isNaN(num2)){alert("Voce não inseriu um numero")}
  else
  {
  if (operação === 'soma'){
    alert(`A soma é ${Number(num1) + Number(num2)}`)
    }
  else if (operação === 'subtração'){
    alert(`A subtração é ${Number(num1) - Number(num2)}`)
    }
   else if (operação === 'multiplicação'){
    alert(`A multiplicação é ${Number(num1) * Number(num2)}`)
    }
   else if (operação === 'divisão'){
    alert(`A divisão é ${Number(num1) / Number(num2)}`)
    }
  }
  }
}
}
