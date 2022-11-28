let input_entrada = document.getElementById("entrada")
let input_saida = document.getElementById("saida")

let url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'

function retornarValores() {
  fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
    .then(response => {
      response.json()
              .then(data => mostrarDados(data))
    })
  const mostrarDados = (result) => {
    document.getElementById("saida").value = result[1][1]
    console.log(result)
  }
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
