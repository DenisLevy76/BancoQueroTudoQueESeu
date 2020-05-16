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

const popup = document.querySelector('#modalText')
const botao = document.querySelector('.avaliar')
const form = document.querySelector('#form1')

let polp = 'inadequada'
let rend = 'inadequada'
let invest = 'Poupança'

form.addEventListener("submit", function (event) {
   event.preventDefault()

   var dados = {
      nome: forms1.nome.value,
      valorEmPolpanca: Number(forms1.valorEmPolpanca.value),
      rendaie: forms1.rendaie.value,
      rendaMensal: Number(forms1.rendaMensal.value),
      numeroDeDependentes: Number(forms1.numeroDeDependentes.value),
   }
   console.log(dados);

   function validar() {

      if (dados.numeroDeDependentes !== '' || dados.nome !== '' && dados.valorEmPolpanca === Number && dados.rendaMensal === Number && dados.numeroDeDependentes === Number) {

         if (dados.valorEmPolpanca > 5000 * dados.numeroDeDependentes) {
            polp = 'adequada'
         }
         if (dados.rendaMensal > 15000 + (4000 * dados.numeroDeDependentes) && dados.rendaie === 'estavel') {
            rend = 'adequada'
         }

         if (polp === 'adequada' && rend === 'adequada') {
            invest = 'Ações'
         } else if (polp === 'adequada' && rend === 'inadequada') {
            invest = 'Combinado'
         }

      }
   }




   botao.addEventListener('click', () => {
      validar()
      popup.innerHTML = `<h1>Olá ${dados.nome}, belezinha?!</h1>
      <p>Analisando seus dados recomendamos fortemente nosso plano "<b>${invest}</b>".</p>`
      console.log(invest);
      iniciarModal('#ModalContainer')
      form.values = ''
   })


})