//INTERACTUAR CON HTML
const elemH1 = document.createElement("h1")
elemH1.innerHTML = "<h1>Guía para valuar tus trabajos artísticos</h1>"
elemH1.className = "titulo"
const div1 = document.querySelector(".contenedorTit")
div1.appendChild(elemH1)
const pPrincipal = document.createElement("p")
pPrincipal.innerHTML = "<p>El mundo del arte puede ser un campo muy difícil de entender, con esta pequeña guía pretendemos brindarte algunos conceptos que te ayudarán a valorar tus obras de manera adecuada.</p>"
pPrincipal.className = "parrafGral"
elemH1.appendChild(pPrincipal)
const listaInfo = document.querySelector(".informDeObras")
const listaDescObras = document.querySelector(".informDesc")
const listaInteresObras = document.querySelector(".informInteres") 



//EVENTOS
/* const fuenteSelectTipo = document.querySelector("#tipoElegido")
    fuenteSelectTipo.addEventListener("change", ()=>{
    let tipo = fuenteSelectTipo.value
    console.log(tipo)
})

const fuenteSelectAccion = document.querySelector("#accionElegida")
    fuenteSelectAccion.addEventListener("change", ()=>{
    let opcionCalculo = fuenteSelectAccion.value
    console.log(opcionCalculo)
})

const fuenteSelectConserv = document.querySelector("#conservacion")
fuenteSelectConserv.addEventListener("change", () => {
    let conservacion = fuenteSelectConserv.value
    console.log(conservacion)
})

const fuenteSelectSalon = document.querySelector("#seleccion")
fuenteSelectSalon.addEventListener("change", ()=> {
    let seleccion = fuenteSelectSalon.value
    console.log(seleccion)
}) 

const inputAll = document.querySelectorAll("input")
inputAll.forEach(input => {
    input.addEventListener("focus", ()=> input.className = "focusActivo")
    input.addEventListener("blur", ()=> input.className = "")
})

//creo que acá iría esto y llamaría a la función objObra para crear el objeto pero la pagina se recarga y
//no se siquiera si lo que sigue funciona o no
const formulario = document.querySelector("form")
formulario.addEventListener("submit", objObra)
 */

// FUNCIONES INTERACT CON HTML DOM
function crearListaInfo(infoUsuario){ 
    let lista = ""
    infoUsuario.forEach(elem => {
        lista = `<li>Tipo de obra: ${elem.tipo}</li>
                <li>Titulo de la obra:  ${elem.titulo}</li>
                <li>Año de creación: ${elem.año}</li>
                <li>Técnica: ${elem.tecnica}</li>
                <li>Precio Final: ${elem.precio}</li>
                <br>`
        listaInfo.innerHTML += lista
    })
} 

function crearListaDesc(infoDescuento){ 
    let listaDesc = ""
    infoDescuento.forEach(elem => {
        listaDesc = `<li>Titulo de la obra: ${elem.titulo}</li>
                    <li>Precio Final: ${elem.precio}</li>
                    <li>Precio con 10% de descuento: ${elem.descuento10PorCiento}</li>
                    <li>Precio con 20% de descuento: ${elem.descuento20PorCiento}</li>
                    <br>`
        listaDescObras.innerHTML += listaDesc
    })
}

function crearListaInteres(infoInteres){ 
    let listaInt = ""
    infoInteres.forEach(elem => {
        listaInt = `<li>Titulo de la obra: ${elem.titulo}</li>
                    <li>Precio Final: ${elem.precio}</li>
                    <li>Precio total venta en 3 cuotas: ${elem.precio3Cuotas}</li>
                    <li>Precio total venta en 6 cuotas: ${elem.precio6Cuotas}</li>
                    <li>Precio total venta en 12 cuotas: ${elem.precio12Cuotas}</li>
                <br>`
        listaInteresObras.innerHTML += listaInt
    })
} 




