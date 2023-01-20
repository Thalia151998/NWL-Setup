const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  
  if(dayExists) {
    alert("❌ Dia já registrado")
    return
  }

  alert("✅ Dia adicionado com sucesso")

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@Habits", JSON.stringify(nlwSetup.data))
  
}

// const data = {
 // healthyFood: ["02-01", "02-02", "02-03"],
  // dogFood: ["02-02"],
// }

const data = JSON.parse(localStorage.getItem("NLWSetup@Habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()
