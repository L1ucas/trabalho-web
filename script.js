let input_entrada = document.getElementById("entrada")
let input_saida = document.getElementById("saida")

let valor_entrada = 0
let valor_saida = 1

// D, R, E



let conversoes = [
  [1, 5, 2], [1/5, 1, 1/2], [1/2, 2, 1]
]

function imprimirValor(e) {
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
  
  input_saida.value = input_entrada.value * conversoes[valor_entrada][valor_saida]
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
