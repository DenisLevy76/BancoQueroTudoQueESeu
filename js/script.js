function iniciarModal(modalID) {
   const modal = document.querySelector(modalID)
   if (modal) {
      modal.classList.add('mostrar')
      modal.addEventListener('click', (e) => {
         if (e.target.id === "ModalContainer" || e.target.id === "fechar") {
            modal.classList.remove('mostrar')
         }
      })
   }
}


const botao = document.querySelector('.avaliar')
const form = document.querySelector('#form1')

let polp = 'inadequada'
let rend = 'inadequada'
let invest = 'Poupança'

function validar() {
   document.getElementById('form1').addEventListener('click', event => {event.preventDefault()}, false)
   
   const nome = document.getElementById("nome").value
   const valorEmPolpanca = Number(document.getElementById("valorEmPolpanca").value)
   const rendaMensal = Number(document.getElementById('rendaMensal').value)
   const numeroDeDependentes = Number(document.getElementById('numeroDeDependentes').value)


   const renei = document.getElementsByName('rendaie')
   const rendaie = renei[0].checked? renei[0].value : renei[1].value

   let polp = 'inadequada'
   let rend = 'inadequada'
   let invest = 'Poupança'


   if (valorEmPolpanca > 5000 * numeroDeDependentes) {
      polp = 'adequada'
   }
   if (rendaMensal > 15000 + (4000 * numeroDeDependentes) && rendaie === 'estavel') {
      rend = 'adequada'
   }

   if (polp === 'adequada' && rend === 'adequada') {
      invest = 'Ações'

   } else if (polp === 'adequada' && rend === 'inadequada') {
      invest = 'Combinado'
   }

   console.log(nome, valorEmPolpanca, rendaMensal, rendaie, numeroDeDependentes)
   const popup = document.querySelector('#modalText')


   popup.innerHTML = `<h1>Olá ${nome}, belezinha?!</h1>
   <p>Analisando seus dados recomendamos fortemente nosso plano "<b>${invest}</b>".</p>`
   
   if (numeroDeDependentes != '') {
      
      iniciarModal('#ModalContainer')
   }
}


function modal(){

   validar()
}
