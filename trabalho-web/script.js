let input_entrada = document.getElementById("entrada")
let input_saida = document.getElementById("saida")

let valor_entrada = 0
let valor_saida = 1

const url = 'https://economia.awesomeapi.com.br/last/USD-BRL,USD-EUR,EUR-BRL,EUR-USD,BRL-USD,BRL-EUR'


// D, R, E

let conversoes = [
  //   D          R             E
  [1, 5, 2], [1/5, 1, 1/2], [1/2, 2, 1]
]


async function pegarMoedas(){
  let moedas = await fetch(url)
    .then(function(resp){
      return resp.json()
    })

  conversoes[0][0] = 1
  conversoes[0][1] = Number(moedas.USDBRL.high)
  conversoes[0][2] = Number(moedas.USDEUR.high)
  conversoes[1][0] = Number(moedas.BRLUSD.high)
  conversoes[1][0] = 1
  conversoes[1][2] = Number(moedas.BRLEUR.high)
  conversoes[2][0] = Number(moedas.EURUSD.high)
  conversoes[2][1] = Number(moedas.EURBRL.high)
  conversoes[2][2] = 1
}



function imprimirValor(e) {
  pegarMoedas()
  
  var ele = document.getElementsByName(e)
  let tempvalue = 0
  input_saida.value = ''

  if (e === 'e_1'){
    for(i = 0; i < ele.length; i++) {
      if(ele[i].checked){
        valor_entrada = ele[i].value
      }
    } 
  } else if (e === 'e_2'){
    for(i = 0; i < ele.length; i++) {
      if(ele[i].checked){          
          valor_saida = ele[i].value
      }
    } 
  }

  console.log(`(${valor_entrada}, ${valor_saida})`)
  converterValores()
}

function converterValores(){
  
  input_saida.value = (input_entrada.value * conversoes[valor_entrada][valor_saida]).toFixed(2)
  console.log(conversoes[valor_entrada][valor_saida])
}

// $("#").blur(function(e) {
//     let cep = this.value
//     fetch(`https://viacep.com.br/ws/${cep}/json/`)
//         .then(response => {
//             response.json()
//                 .then(data => mostrarDados(data))
//     })
//     const mostrarDados = (result) => {
//         for(const campo in result){
//             if (document.querySelector("#"+campo)) {
//                 document.querySelector("#"+campo).value = result[campo]
//             }
//         }
//     }
// })
