const areaReferencia = 10000
const volumenReferencia = 1000000
let infoObra= []
let confirmar
let descContado
let infoDescuento 
const desc = 0.9
let desc20 = 0.8
const cuotas3 = 1.0406
const cuotas6 = 1.0781
const cuotas12 = 1.1473
let infoObraCompleta
let i = 0

//clase para armar OBJETO
class Obras{ 
    constructor(tipo, opcionCalculo, titulo, anio, tecnica, alto, ancho, profundidad, areaReferencia, volumenReferencia, precioArea, precioVolumen, horaReferencia, horasTrabajadas, conservacion, seleccion){
        this.tipo = tipo
        this.opcionCalculo = opcionCalculo
        this.titulo = titulo
        this.anio = anio
        this.tecnica = tecnica
        this.alto = alto
        this.ancho = ancho
        this.profundidad = profundidad
        this.areaReferencia = areaReferencia
        this.volumenReferencia = volumenReferencia
        this.precioArea = precioArea
        this.precioVolumen = precioVolumen
        this.horaReferencia = horaReferencia
        this.horasTrabajadas = horasTrabajadas
        this.conservacion = conservacion
        this.seleccion = seleccion
    }
    tipoDeObra(){
        if(this.tipo === "a"){
            this.tipo = "2d"
        }else if(this.tipo === "b"){
            this.tipo = "3d"
        }
    }
    conservacionTiempo(){
        if(this.conservacion === true){
            this.conservacion = 1.03
        }
        else{
            this.conservacion = 0.8
        }
    }
    seleccionConcurso(){
        if (this.seleccion === "a"){
            this.seleccion = 1.3
        }else if (this.seleccion === "b"){
            this.seleccion = 1.2
        } else if (this.seleccion === "c"){
            this.seleccion = 1.1
        } else if (this.seleccion === "d"){
            this.seleccion = 1
        }
    }
} 

//CONDICIONALES Y CICLOS PARA QUE ARRANQUE A FUNCIONAR EL SIMULADOR
let empezarProceso = confirm("Bienvenido, quieres comenzar a valuar tus obras?")

if(empezarProceso  == true){
//valuar
    do{
        objObra()
        if(infoObra[i].opcionCalculo === "a" && infoObra[i].tipo === "2d"){
            calcPrecioArea()
        }else if(infoObra[i].opcionCalculo === "a" && infoObra[i].tipo === "3d"){
            calcPrecioVolumen()
        }else if(infoObra[i].opcionCalculo === "b" && (infoObra[i].tipo === "2d" || infoObra[i].tipo === "3d")){
            calcPrecioHoras()
        } 
        i++
        procesarInfoUsuario()
        console.table(infoUsuario)
        confirmar = confirm("Quieres valuar una obra más?")
    } while (confirmar === true)
//medios de pago 
    let mediosPago = confirm("Quieres calcular las formas de pago que pueden tener estas obras?")
    if (mediosPago === true){
        let elegirOpcion = prompt("Qué quieres hacer ahora? -(a)calcular un descuento por venta de contado  o  -(b)calcular intereses por venta en cuotas").toLowerCase()
        //descuento
        if (elegirOpcion === "a"){
            descuento()
            console.table(infoDescuento)
            crearListaDesc(infoDescuento)
        //intereses
        }else if(elegirOpcion === "b"){
            interes()
            console.table(infoInteres)
            crearListaInteres(infoInteres)
        }
    }else if (mediosPago === false)
        alert("Gracias por utilizar nuestro valuador de obras!") 
        crearListaInfo(infoUsuario)
}else if(empezarProceso === false){
    alert("Bueno, la próxima vez será!") 
}

//FUNCION PARA CONSEGUIR LA INFO DEL OBJETO
function objObra(){
    let tipo = prompt("Qué tipo de obra es? -(a)pinturas y dibujos 2d. o -(b)esculturas 3d.").toLowerCase()
    let opcionCalculo = prompt("Cómo quieres valuar tu obra? -(a)por area/volumen ocupado. o -(b)por horas trabajadas.").toLowerCase()
    let titulo = prompt("Cúal es el título de la obra?")
    let anio = prompt("En qué año fue realizada?")
    let tecnica =prompt("Qué técnica se utilizo para realizarla?")
    let alto = parseFloat(prompt(" Cúanto mide en centimetros uno de sus lados? En caso de que hayas elegido valuar por HORA acepta sin llenar el campo."))
    let ancho = parseFloat(prompt(" Cúanto mide en centimetros el otro de sus lados? En caso de que hayas elegido valuar por HORA acepta sin llenar el campo."))
    let profundidad =parseFloat(prompt("Cúanto mide en centimetros el espesor? En caso de que hayas elegido valuar por ÁREA U HORA acepta sin llenar el campo."))
    let precioArea = parseFloat(prompt("Ingresa el precio en pesos del área de una de tus obras de 100 por 100cms (10000cms2). En caso de que hayas elegido valuar por VOLUMEN U HORA acepta sin llenar el campo."))
    let precioVolumen = parseFloat(prompt("Ingresa el precio en pesos del volumen de una de tus obras de 100 por 100 por 100 cms (1000000 cms3).En caso de que hayas elegido valuar por ÁREA U HORA acepta sin llenar el campo."))
    let horaReferencia = parseFloat(prompt("Ingresa cuanto es el valor de tu hora de trabajo. En caso de que hayas elegido valuar por ÁREA O VOLUMEN acepta sin llenar el campo. "))
    let horasTrabajadas = parseFloat(prompt(" Ingresa la cantidad de horas trabajadas para realizar la obra en su totalidad. En caso de que hayas elegido valuar por ÁREA O VOLUMEN acepta sin llenar el campo."))
    let conservacion = confirm("La obra está realizada en materiales que posibilitan una conservación en el tiempo? -(Aceptar)Si  -(Cancelar)No")
    let seleccion = prompt("La obra quedó seleccionada en algún Salón o Concurso? Elige -(a)Salón internacional  -(b)Salón nacional  -(c)Salon provincial  -(d)No fue seleccionada").toLowerCase()
    const plantillaObra = new Obras(tipo, opcionCalculo, titulo, anio, tecnica, alto, ancho, profundidad, areaReferencia, volumenReferencia, precioArea, precioVolumen, horaReferencia, horasTrabajadas, conservacion, seleccion)
    plantillaObra.conservacionTiempo()
    plantillaObra.seleccionConcurso()
    plantillaObra.tipoDeObra()
    infoObra.push(plantillaObra)
}

//FUNCIONES PARA REALIZAR LA VALUACION
function calcPrecioArea() {
    let areaObra =  infoObra[i].alto * infoObra[i].ancho
    let precioSimple2d = (infoObra[0].precioArea * areaObra)/ areaReferencia
    let precioFinal2d = ((precioSimple2d) * (infoObra[i].conservacion * infoObra[i].seleccion)).toFixed(2)
    alert(`El precio final de la obra es de ${precioFinal2d} pesos`)
    infoObra[i].precio = precioFinal2d
}

function calcPrecioVolumen(){
    let volObra = infoObra[i].alto * infoObra[i].ancho * infoObra[i].profundidad
    let precioSimple3d = (volObra * infoObra[i].precioVolumen) / volumenReferencia
    let precioFinal3d = ((precioSimple3d * infoObra[i].conservacion) * infoObra[i].seleccion).toFixed(2)
    alert(`El precio final de la obra es de ${precioFinal3d} pesos`)
    infoObra[i].precio = precioFinal3d
}

function calcPrecioHoras(){
    let precioHoras =  infoObra[i].horaReferencia * infoObra[i].horasTrabajadas
    let precioFinalHoras = ((precioHoras) * (infoObra[i].conservacion * infoObra[i].seleccion)).toFixed(2)
    alert(`El precio final de la obra es de ${precioFinalHoras} pesos`)
    infoObra[i].precio = precioFinalHoras
} 

//TRABAJO SOBRE EL ARRAY CON MAP PARA OBTENER INFO LIMPIA PARA EL USUARIO, CALCULO DE INTERESES Y DESCUENTOS
function procesarInfoUsuario(){
    infoUsuario = infoObra.map((info) =>{
                                        return{
                                            tipo: info.tipo,
                                            titulo: info.titulo,
                                            año: info.anio,
                                            tecnica: info.tecnica,
                                            precio: info.precio
                                        }
    })
    
}

function descuento(){
    infoDescuento = infoUsuario.map((descuento) =>{
                                return{
                                    titulo: descuento.titulo,
                                    precio: descuento.precio,
                                    descuento10PorCiento: (descuento.precio * desc).toFixed(2),
                                    descuento20PorCiento: (descuento.precio * desc20).toFixed(2)
                                }
    }) 
}

function interes(){
    infoInteres = infoUsuario.map ((interes)=>{
                                return{
                                    titulo: interes.titulo,
                                    precio: interes.precio,
                                    precio3Cuotas: (interes.precio * cuotas3).toFixed(2),
                                    precio6cuotas: (interes.precio * cuotas6).toFixed(2),
                                    precio12Cuotas: (interes.precio * cuotas12).toFixed(2)
                                }
    })
} 

