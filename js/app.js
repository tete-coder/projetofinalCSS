const  nome = document.getElementById("name")
const  email = document.getElementById("email")
const  telefone = document.getElementById("telefone")
const  form = document.getElementById("form")
const  parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nome.value.length <2){
      warnings += `Debe escribir su nombre <br>`
      entrar = true
    }
   
    if(!regexEmail.test(email.value)){
       warnings += `El email no es valido <br>`
       entrar = true
    }
    if(telefone.value.length <11){
        warnings += `El telefono no es valido <br>`
       entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else[
        parrafo.innerHTML = "Enviado"
    ]
})

