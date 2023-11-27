let frutas = []
let laticínios  = []
let doces = []
let congelados = []
let comida = ""
let categoria = ""
let RemoCate
let ProdRemo
let pos

let add = "sim"

while(add != "não"){
  add = prompt("Gostaria de adicionar ou remover algum produto a lista?")
  while(add != "adicionar" && add != "não" && add != "remover"){
    alert("Voce não respondeu apropriadamente")
    add = prompt("Gostaria de adicionar ou remover algum produto a lista?")
  }
  if(add === "não"){
    break
  }
  if(add ==="remover" ){
    RemoCate = prompt("De qual categoria seria o produto que quer remover:'frutas', 'laticínios', 'doces' ou 'congelados'?")
    if(RemoCate === 'frutas' && frutas.length > 0){
      ProdRemo = prompt(`Frutas: ${frutas}\n  qual o produto que quer remover?`)
      pos = frutas.indexOf(ProdRemo)
      if (pos != -1){
      frutas.splice(pos,1)
      }else{alert("esse produto não existe")}
    }
    else if(RemoCate === 'laticínios' && laticínios.length > 0){
      ProdRemo = prompt(`Laticínios: ${laticínios}\n  qual o produto que quer remover?`)
      pos = laticínios.indexOf(ProdRemo)
      if (pos != -1){
      laticínios.splice(pos,1)
      }else{alert("esse produto não existe")}
    }
    else if(RemoCate === 'doces' && doces.length > 0){
      ProdRemo = prompt(`Doces: ${doces}\n  qual o produto que quer remover?`)
      pos = doces.indexOf(ProdRemo)
      if (pos != -1){
      doces.splice(pos,1)
      }else{alert("esse produto não existe")}
    }
    else if(RemoCate === 'congelados' && congelados.length > 0){
      ProdRemo = prompt(`Congelados: ${congelados}\n  qual o produto que quer remover?`)
      pos = congelados.indexOf(ProdRemo)
      if (pos != -1){
      congelados.splice(pos,1)
      }else{alert("esse produto não existe")}
    }
    else {
      alert("essa categoria não existe ou não tem produtos")
    }
  }
  if (add === "adicionar"){
    comida = prompt("Qual produto voce quer adicionar?")
  categoria = prompt("E qual categoria ele se encaixa:'frutas', 'laticínios', 'doces' ou 'congelados'?")
  if(categoria === 'frutas'){
    frutas.push(comida)
  }
  else if(categoria === 'laticínios'){
    laticínios.push(comida)
  }
  else if(categoria === 'doces'){
    doces.push(comida)
  }
  else if(categoria === 'congelados'){
    congelados.push(comida)
  }
  else{alert("essa categoria não existe na lista")
  }
}
}
  alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticínios}\n  Doces: ${doces}\n  Congelados: ${congelados}`)
