
// pidiendo al usuario la información
let nota1HTML = +prompt("Ingresa nota 1 para el ramo HTML", 7)
// 7 5 6 
let nota2HTML = +prompt("Ingresa nota 2 para el ramo HTML", 7)
// 4 5 6

let promedioHTML = (nota1HTML + nota2HTML) / 2.0


// buscar el elemento html
let tdnota1Html = document.getElementById("nota1HTML")
//<td id="nota1HTML">...</td>

let tdnota2Html = document.getElementById("nota2HTML")
let tdpromedioHTML = document.getElementById("promedioHTML")

// escribimos en el HTML
tdnota1Html.innerHTML = nota1HTML
tdnota2Html.innerHTML = nota2HTML
tdpromedioHTML.innerHTML = promedioHTML 



