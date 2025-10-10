//VARIABLES GLOBALES Y INICIALIZACIONES
let usuarioLogeado = null
let idCliente = 1;
let idPaseador = 1;
let idContratacion = 1;


//////////// FUNCIONES PARA EL MANEJO DE SECCIONES /////////

//GUARDAR EN UNA VARIABLE TODOS LOS ELEMENTOS EN EL HTML CON LA CLASE "boton"
let botones = document.querySelectorAll(".boton")

for (let i = 0; i < botones.length; i++) {  //RECORRIENDO LOS BOTONES Y LES AGREGO UN EVENTO DE CLICK AL BOTON ACTUAL PARA QUE AL HACER CLICK SE EJECUTE LA FUNCION mostrarSeccion
    let botonRecorrido = botones[i]
    botonRecorrido.addEventListener("click", mostrarSeccion)

}


function mostrarSeccion() {  //FUNCION PARA MOSTRAR LA SECCION CORRESPONDIENTE AL BOTON QUE SE HIZO CLICK

    let elemento = this //GUARDO EN UNA VARIABLE EL ELEMENTO QUE SE HIZO CLICK (this hace referencia al elemento que disparó el evento)

    let idElemento = elemento.getAttribute("id") //OBTENGO EL ID DEL ELEMENTO QUE SE HIZO CLICK
    //EL ID DEL ELEMENTO TIENE LA FORMA "btnSeccionX" POR LO QUE TENGO QUE QUITAR LOS PRIMEROS 3 CARACTERES PARA OBTENER EL ID DE LA SECCION
    //EL ID DE LA SECCION TIENE LA FORMA "seccionX" POR LO QUE TENGO QUE QUITAR LOS PRIMEROS 3 CARACTERES Y PONER LA PRIMERA LETRA EN MINUSCULA
    //POR EJEMPLO, SI EL ID DEL ELEMENTO ES "btnSeccionInicio", EL ID DE LA SECCION SERA "seccionInicio"

    let idSeccion = idElemento.charAt(3).toLowerCase() + idElemento.substring(4)

    pasarASeccion(idSeccion) //LLAMO A LA FUNCION pasarASeccion CON EL ID DE LA SECCION QUE QUIERO MOSTRAR

}


function ocultarBotonesMenu() { //FUNCION PARA OCULTAR TODOS LOS BOTONES DEL MENU
    //GUARDO EN UNA VARIABLE TODOS LOS ELEMENTOS EN EL HTML CON LA CLASE "boton"
    let botones = document.querySelectorAll(".boton")
    for (let i = 0; i < botones.length; i++) {
        let botonRecorrido = botones[i]
        botonRecorrido.style.display = "none"  //es una propiedad de los elementos HTML en JavaScript que te permite mostrar u ocultar elementos cambiando su forma de visualizarse en la página.
    }
}

function ocultarTodo() {  //FUNCION PARA OCULTAR TODAS LAS SECCIONES
    let secciones = document.querySelectorAll(".seccion") //VARIABLE QUE BUSCA TODOS LOS ELEMENTOS CON LA CLASE .seccion
    for (let i = 0; i < secciones.length; i++) {
        let seccionRecorrida = secciones[i] //RECORRO LAS SECCIONES Y LAS OCULTO UNA POR UNA.
        seccionRecorrida.style.display = "none"
    }
}

function pasarASeccion(idSeccion) { //FUNCION PARA CAMBIAR A OTRA SECCION, DEFINIDA EN EL PARAMETRO
    ocultarTodo() //LLAMO A LA FUNCION ocultarTodo PARA QUE OCULTE TODAS LAS SECCIONES
    let seccionAMostrar = document.querySelector("#" + idSeccion) //
    seccionAMostrar.style.display = "block"
}
//muestra todos los botones que tienen determinada clase (vamos a usar admin o usuario)
function mostrarBotonesMenu(tipo) {
    let botonesMenu = document.querySelectorAll("." + tipo)
    for (let i = 0; i < botonesMenu.length; i++) {
        let botonRecorrido = botonesMenu[i]
        botonRecorrido.style.display = "block"

    }
}


//CLASES PARA CREAR OBJETOS.

class Cliente { // CREANDO LA PLANILLA DEL CLIENTE.
    constructor(unUsuario, unaContrasena, unNombre, unTamano) { //LA INFORMACION QUE TENGO QUE RECIBIR DEL CLIENTE
        //THIS. UNA VARIABLE QUE GUARDA LA INFORMACION DEL CLIENTE
        this.usuario = unUsuario;
        this.contrasena = unaContrasena;
        this.nombre = unNombre; //EL NOMBRE MASCOTA DEL CLIENTE
        this.tamano = unTamano;
        this.id = idCliente
        idCliente++
    }
}

class Paseador { // CREANDO LA PLANILLA DEL PASEADOR.
    constructor(unNombre, unUsuario, unaContrasena, cupoMaximo) {
        this.nombre = unNombre;
        this.usuario = unUsuario;
        this.contrasena = unaContrasena;
        this.cupoMaximo = cupoMaximo; //EL CUPO MÁXIMO DE PASEOS QUE PUEDE REALIZAR EL PASEADOR
        this.id = idPaseador
        idPaseador++
    }
}

class Contrataciones {
    constructor(unPaseador, unCliente) {
        this.paseador = unPaseador;
        this.cliente = unCliente;
        this.estado = "Pendiente";
        this.id = idContratacion
        idContratacion++
    }
}

class Sistema {

    constructor() {
        this.paseadores =
            [new Paseador("Suho", "suho123", "Amopasearperros3", 10), //CREANDO UN NUEVO PASEADOR
            new Paseador("Sieun", "ilovesieun", "Weakheroclass1", 25),
            new Paseador("Juan", "chen", "Hasta2", 12),
            new Paseador("Maria", "maria123", "Paseos1", 6),
            new Paseador("Baku", "baku55", "Bakudesdeayer1", 4)];

        this.clientes =
            [new Cliente("suholuvsieun", "Iluvsieun5", "Suho", "Grande"),  //CREANDO UN NUEVO CLIENTE
            new Cliente("chen123", "IluveJuan2", "Juan", "Mediano"),
            new Cliente("maria5", "Paseoscom1", "Harry", "Pequeño"),
            new Cliente("christian", "Pasasdeuva1", "Christian", "Mediano"),
            new Cliente("Stephen", "contrasena1", "firulais", "Pequeño"),
            new Cliente("Nicolas", "contrasena2", "Amsterdam", "Mediano"),
            new Cliente("Sieun", "contrasena3", "Baku", "Grande"),
            new Cliente("German", "contrasena4", "Luna", "Pequeño"),
            new Cliente("Savanna", "contrasena5", "Rocky", "Mediano"),
            new Cliente("Andaluz", "contrasena6", "Thor", "Grande"),
            new Cliente("Javier", "contrasena7", "Zeus", "Pequeño"),
            new Cliente("Sol", "Contrasena8", "Hera", "Mediano"),
            new Cliente("Ana", "contrasena9", "Athena", "Grande"),
            new Cliente("Guatemala", "contrasena10", "Apolo", "Pequeño"),
            new Cliente("Sieun", "contrasena11", "Artemisa", "Mediano"),
            new Cliente("Antony", "contrasena12", "Ares", "Grande"),
            new Cliente("Sombr", "contrasena13", "Hopkings", "Pequeño"),
            new Cliente("Agustin", "contrasena14", "Selena", "Mediano"),
            new Cliente("Souvenir", "contrasena15", "Sombr", "Grande"),
            new Cliente("Love5", "contrasena16", "Stephen", "Pequeño")
            ];

        this.contrataciones =
            [new Contrataciones(this.buscarPaseador(1), this.buscarCliente(1)),
            new Contrataciones(this.buscarPaseador(1), this.buscarCliente(20)),    //CREANDO NUEVAS CONTRATACIONES
            new Contrataciones(this.buscarPaseador(1), this.buscarCliente(1)),
            new Contrataciones(this.buscarPaseador(4), this.buscarCliente(20)),
            new Contrataciones(this.buscarPaseador(5), this.buscarCliente(13)),
            new Contrataciones(this.buscarPaseador(1), this.buscarCliente(5)),
            new Contrataciones(this.buscarPaseador(2), this.buscarCliente(7)),
            new Contrataciones(this.buscarPaseador(3), this.buscarCliente(5)),
            new Contrataciones(this.buscarPaseador(4), this.buscarCliente(18)),
            new Contrataciones(this.buscarPaseador(1), this.buscarCliente(16))

            ]

        //ASIGNANDO UN ESTADO A LAS CONTRATACIONES
        this.contrataciones[0].estado = "Aprobada"
        this.contrataciones[1].estado = "Pendiente"
        this.contrataciones[2].estado = "Pendiente"
        this.contrataciones[3].estado = "Pendiente"
        this.contrataciones[4].estado = "Aprobada"
        this.contrataciones[5].estado = "Pendiente"
        this.contrataciones[6].estado = "Aprobada"
        this.contrataciones[7].estado = "Pendiente"
        this.contrataciones[8].estado = "Pendiente"
        this.contrataciones[9].estado = "Pendiente"




    }

    //BUSCAMOS QUIEN INGRESO EL LOGIN
    buscarUsuario(unUsuario, unaContrasena) {
        for (let i = 0; i < this.clientes.length; i++) {
            let clienteActual = this.clientes[i]; //RECORRO LA LISTA DE CLIENTES
            if (clienteActual.usuario === unUsuario && clienteActual.contrasena === unaContrasena) { //SI EL USUARIO Y LA CONTRASEÑA COINCIDEN
                usuarioLogeado = clienteActual
                return "clientes"; //RETORNO EL CLIENTE
            }
        }


        for (let j = 0; j < this.paseadores.length; j++) {
            let paseadorActual = this.paseadores[j];
            // RECORREMOS ARRAY DE PASEADORES
            if (paseadorActual.usuario === unUsuario && paseadorActual.contrasena === unaContrasena) { //SI EL USUARIO Y LA CONTRASEÑA COINCIDEN
                usuarioLogeado = paseadorActual
                return "paseadores"; //RETORNO EL PASEADOR
            }
        }
        return "Error";
        ; //SI NO ENCUENTRA EL USUARIO Y LA CONTRASEÑA, RETORNA ERROR
    }

    //DESCONTAMOS CUPOS DEL PASEADOR DE ACUERDO A TAMAÑO DEL ANIMAL
    cuposDisponible(idPaseador) {
        let paseadorBuscado = this.buscarPaseador(idPaseador)
        let cupoDisponible = paseadorBuscado.cupoMaximo
        for (let i = 0; i < this.contrataciones.length; i++) {
            let contratacionActual = this.contrataciones[i]
            if (contratacionActual.estado === "Aprobada" && contratacionActual.cliente.tamano === "Grande" && contratacionActual.paseador.id === idPaseador) {
                cupoDisponible -= 4
            } else if (contratacionActual.estado === "Aprobada" && contratacionActual.cliente.tamano === "Mediano" && contratacionActual.paseador.id === idPaseador) {
                cupoDisponible -= 2;
            } else if (contratacionActual.estado === "Aprobada" && contratacionActual.cliente.tamano === "Pequeño" && contratacionActual.paseador.id === idPaseador) {
                cupoDisponible -= 1
            }

        }
        return cupoDisponible;
    }

    buscarPaseador(id) {
        for (let i = 0; i < this.paseadores.length; i++) {
            let paseadorActual = this.paseadores[i]
            if (paseadorActual.id === id) {
                return paseadorActual;
            }
        }
        return null
    }

    buscarCliente(id) {
        for (let i = 0; i < this.clientes.length; i++) {
            let clienteActual = this.clientes[i]
            if (clienteActual.id === id) {
                return clienteActual;
            }
        }
        return null
    }
    //CALCULAR LOS CUPOS DE ACUERDO AL TAMAÑO DE LA MASCOTA AL CLIENTE, PARA DEVOLVER EL RESULTADO AL PASEADOR.
    obtenerCuposNecesarios(usuarioLogeado) {
        let tamanoMascota = 0
        if (usuarioLogeado.tamano === "Grande") {
            tamanoMascota = 4
        } else if (usuarioLogeado.tamano === "Mediano") {
            tamanoMascota = 2
        } else if (usuarioLogeado.tamano === "Pequeño") {
            tamanoMascota = 1;
        }
        return tamanoMascota;
    }




}


let miSistema = new Sistema(); //CREANDO UNA NUEVA INSTANCIA DEL SISTEMA
ocultarTodo();
ocultarBotonesMenu();
mostrarBotonesMenu("Registro"); //MUESTRO LOS BOTONES DE INICIO SESION Y REGISTRO
mostrarBotonesMenu("Login");
pasarASeccion("seccionLogin");

// Al cargar la página, verificamos si hay clientes guardados
let clientesGuardados = JSON.parse(localStorage.getItem("clientes")) || [];
miSistema.clientes = clientesGuardados; // Restaurar los clientes previos


//REGISTRO CLIENTE
document.querySelector("#btnRegistroUsuario").addEventListener("click", registroCliente);
function registroCliente() {
    let usuarioCliente = document.querySelector("#txtUsuarioCliente").value
    let contraseniaCliente = document.querySelector("#txtContraseniaCliente").value
    let mascotaCliente = document.querySelector("#txtMascotaCliente").value
    let tamanoMascota = document.querySelector("#slcOpciones").value
    document.querySelector("#pErrorRegistro").innerHTML = "";

    //VALIDANDO QUE NINGUN CAMPO ESTE VACIO
    if (usuarioCliente === "" || contraseniaCliente === "" || mascotaCliente === "" || tamanoMascota === "Selecciona") {
        document.querySelector("#pErrorRegistro").innerHTML = "Por favor, complete todos los campos."
        return; // Si hay un campo vacío, no continuar con el registro
    }
    //LLAMANDO A LA FUNCION PARA VALIDAR QUE SEA UNICO EL USUARIO

    if (usuarioUnico(usuarioCliente) !== true) { //SI EL USUARIO NO ES UNICO, NO CONTINUAR CON EL REGISTRO
        //MOSTRANDO UN MENSAJE DE ERROR
        document.querySelector("#pErrorRegistro").innerHTML = "El usuario ya existe. Por favor, elija otro.";
        return; // Si el usuario no es único, no continuar con el registro
    }
    if (validarContrasena(contraseniaCliente) !== true) { //SI LA CONTRASEÑA NO ES VALIDA, NO CONTINUAR CON EL REGISTRO
        //MOSTRANDO UN MENSAJE DE ERROR
        document.querySelector("#pErrorRegistro").innerHTML = "La contraseña debe tener al menos 5 caracteres, una mayúscula, una minúscula y un número.";
        return; // 
    }


    let nuevoCliente = new Cliente(usuarioCliente, contraseniaCliente, mascotaCliente, tamanoMascota); //CREANDO UN CLIENTE NUEVO
    miSistema.clientes.push(nuevoCliente); //AGREGANDO EL CLIENTE AL ARRAY

    document.querySelector("#pRegistroCliente").innerHTML = "Registro exitoso.";

    localStorage.setItem("clientes", JSON.stringify(miSistema.clientes));
    console.log(localStorage.getItem("clientes"));


    document.querySelector("#txtUsuarioCliente").value = "";
    document.querySelector("#txtContraseniaCliente").value = "";
    document.querySelector("#txtMascotaCliente").value = "";
    document.querySelector("#slcOpciones").value = "Selecciona";
    document.querySelector("#pErrorRegistro").innerHTML = "";



}


//FUNCION PARA VALIDAR QUE EL USUARIO SEA UNICO
function usuarioUnico(usuarioCliente) {
    let usuarioMinuscula = usuarioCliente.toLowerCase(); //CASE INSENSITIVE
    for (let i = 0; i < miSistema.clientes.length; i++) {
        let clienteActual = miSistema.clientes[i].usuario; //RECORRO LA LISTA DE CLIENTES Y OBTENGO EL USUARIO ACTUAL
        if (clienteActual === usuarioMinuscula) {
            return false;  // USUARIO EXISTE? RETORNO FALSE
        }
    }
    return true; // 
}

//VALIDANDO QUE LA CONTRASEÑA TENGA AL MENOS 5 CARACTERES, UNA MAYUSCULA, UN NUMERO Y UNA MINUSCULA
function validarContrasena(contrasenaCliente) {
    let tieneMayuscula = false;
    let tieneMinuscula = false;
    let tieneNumero = false;
    if (contrasenaCliente.length < 5) {
        return false; // La contraseña debe tener al menos 5 caracteres    
    }
    for (let i = 0; i < contrasenaCliente.length; i++) {
        let caracterActual = contrasenaCliente[i];

        if (caracterActual >= 'A' && caracterActual <= 'Z') {
            tieneMayuscula = true;
        } else if (caracterActual >= 'a' && caracterActual <= 'z') {
            tieneMinuscula = true;
        } else if (caracterActual >= '0' && caracterActual <= '9') {
            tieneNumero = true;
        }
    }

    // RETORNA TRUE SI CUMPLE CON LAS CONDICIONES
    return tieneMayuscula && tieneMinuscula && tieneNumero;
}

//VALIDAR INICIO DE SESION DEL CLIENTE  Y PASEADOR
document.querySelector("#btnInicioSesion").addEventListener("click", login);

function login() {

    let usuarioLogin = document.querySelector("#txtInicioUsuario").value;
    let contrasenaLogin = document.querySelector("#txtInicioContrasena").value;
    document.querySelector("#pErrorInicio").innerHTML = ""
    let inicio = miSistema.buscarUsuario(usuarioLogin, contrasenaLogin)

    if (inicio === "clientes") {
        alert("BIENVENIDO CLIENTE")
        ocultarBotonesMenu();
        mostrarBotonesMenu("Inicio");
        mostrarBotonesMenu("ContratacionesCliente");
        mostrarBotonesMenu("Informacion");
        mostrarBotonesMenu("CerrarSesion");
        cargarComboPaseadores();
        informacionPaseadores()
        pasarASeccion("seccionInicio");



    } else if (inicio === "paseadores") {

        alert("BIENVENIDO PASEADOR")
        ocultarBotonesMenu();
        mostrarBotonesMenu("Contrataciones");
        mostrarBotonesMenu("Estadisticas");
        mostrarBotonesMenu("CerrarSesion");
        pasarASeccion("seccionMisContratacionesPaseador")
        tablaContratacionesPaseador()
        tablaPaseadorInformativa()
        mostrarEstadisticas()
    } else {
        document.querySelector("#pErrorInicio").innerHTML = "Usuario o contraseña incorrectos.";
        return;

    }
}


function cargarComboPaseadores() {
    let listarPaseadores = `<option value="Selecciona">Selecciona</option>`

    //MOSTRAR EN UN SELECT//SELECT DINAMICO PASEADORES DISPONIBLES
    for (let i = 0; i < miSistema.paseadores.length; i++) {
        let paseadorActual = miSistema.paseadores[i]
        if (miSistema.cuposDisponible(paseadorActual.id) >= miSistema.obtenerCuposNecesarios(usuarioLogeado)) {
            listarPaseadores += `<option value=${paseadorActual.id}>${paseadorActual.nombre}</option>`

        }


    }
    document.querySelector("#slcContratacionCliente").innerHTML += listarPaseadores;
}

function tablaContrataciones() {
    let tblContrataciones = "";
    let botonCancelar = document.querySelector("#btnCancelarContratacion")
    for (let i = 0; i < miSistema.contrataciones.length; i++) {
        let contratacionActual = miSistema.contrataciones[i];
        if (contratacionActual.cliente.id === usuarioLogeado.id) {
            tblContrataciones += `<tr>
                <td>${contratacionActual.paseador.nombre}</td>         
                <td>${contratacionActual.estado}</td>        
            </tr>`;
            botonCancelar.style.display = "block"
        }else {
            botonCancelar.style.display = "none"
        }
    }

    document.querySelector("#tblHistorialContrataciones").innerHTML = tblContrataciones;
}



document.querySelector("#btnContratacionDePaseador").addEventListener("click", contratarPaseador);

function contratarPaseador() {
    let selectPaseador = Number(document.querySelector("#slcContratacionCliente").value)
  
    let paseadorSeleccionado = miSistema.buscarPaseador(selectPaseador);
    document.querySelector("#pContratacionClienteInfo").innerHTML = ""
    document.querySelector("#pErrorContratacion").innerHTML = ""

    if (selectPaseador === "Selecciona") {
        document.querySelector("#pErrorContratacion").innerHTML = 'Porfavor, seleccione un paseador'
    }
    let tieneContratacion = false;
    for (let i = 0; i < miSistema.contrataciones.length; i++) {
        let contratacionActual = miSistema.contrataciones[i];
        if (usuarioLogeado.id === contratacionActual.cliente.id) {
            tieneContratacion = true
        }

    }
    if (tieneContratacion) {
        document.querySelector("#pErrorContratacion").innerHTML = "Usted ya a realizado una contratación";
    } else {
        let miContratacion = new Contrataciones(paseadorSeleccionado, usuarioLogeado);//CREANDO UN NUEVO CLIENTE CON LOS DATOS INGRESADOS
        miSistema.contrataciones.push(miContratacion); //AGREGANDO EL NUEVO CLIENTE A LA LISTA DE CLIENTES DEL SISTEMA
        document.querySelector("#pContratacionClienteInfo").innerHTML = `Contratacion exitosa. Usted a contratado a ${paseadorSeleccionado.nombre}`
    }
    tablaContrataciones()
    document.querySelector("#pMensajeCancelar").innerHTML = "";

}



document.querySelector("#btnCancelarContratacion").addEventListener("click", cancelarContratacion)

function cancelarContratacion() {
  
    for (let i = 0; i < miSistema.contrataciones.length; i++) {
        let contratacionActual = miSistema.contrataciones[i];
        if (contratacionActual.cliente.id === usuarioLogeado.id) {
            miSistema.contrataciones.splice(i, 1);
             document.querySelector("#pMensajeCancelar").innerHTML = "No hay contrataciones pendientes";
        } 

    }
    tablaContrataciones()
}

//TABLA CON INFORMACION DE PASEADORES Y CANTIDAD DE PERROS A SU CUIDADO.
function informacionPaseadores() {
    let tblContrataciones = "";
    for (let i = 0; i < miSistema.paseadores.length; i++) {
        let paseadorActual = miSistema.paseadores[i]
        let cantidadPerros = 0;

        for (let j = 0; j < miSistema.contrataciones.length; j++) {
            let contratacionActual = miSistema.contrataciones[j];
            if (contratacionActual.paseador.id === paseadorActual.id && contratacionActual.estado === "Aprobada") {
                cantidadPerros++
            }
        }
        tblContrataciones += `<tr>
                <td>${paseadorActual.nombre}</td>         
                <td>${cantidadPerros}</td>        
            </tr>`;
    }
    document.querySelector("#tblInformacionPaseadores").innerHTML = tblContrataciones;

}

//TABLA DE CONTRATACIONES PENDIENTES DEL PASEADOR.
function tablaContratacionesPaseador() {
    let tblContrataciones = "";
    for (let i = 0; i < miSistema.contrataciones.length; i++) {
        let contratacionActual = miSistema.contrataciones[i];
        if (contratacionActual.paseador.id === usuarioLogeado.id) {
            let motivo = " "
            if (contratacionActual.estado === "Rechazado") {
                if (miSistema.cuposDisponible(usuarioLogeado.id) < miSistema.obtenerCuposNecesarios(contratacionActual.cliente)) {
                    motivo = "No hay cupos suficientes."
                } else {
                    motivo = "Tamaño incoherente con los ya aprobados."
                }
            }
            tblContrataciones += `<tr>
                <td>${contratacionActual.cliente.nombre}</td>  
                <td>${contratacionActual.cliente.tamano}</td>  
                <td>${contratacionActual.estado}</td>
                 <td>${motivo}</td>`
            if (contratacionActual.estado === "Pendiente") {
                tblContrataciones +=
                    ` <td><input type="button" value="Procesar" class="btnProcesar"></td>    
                 </tr>`;
            }

        }
    }

    document.querySelector("#tblProcesarContrataciones").innerHTML = tblContrataciones;
    let listaBotones = document.querySelectorAll(".btnProcesar")

    for (let i = 0; i < listaBotones.length; i++) {
        let botonRecorrido = listaBotones[i]
        botonRecorrido.addEventListener("click", procesarContrataciones)

    }
}


function procesarContrataciones() {
    // Verifico si ya hay una contratacion Aprobada y su tipo
    let perroGrandeAprobado = false;
    let perroChicoAprobado = false;

    for (let i = 0; i < miSistema.contrataciones.length; i++) {
        let contratacionActual = miSistema.contrataciones[i];
        if (contratacionActual.paseador.id === usuarioLogeado.id && contratacionActual.estado === "Aprobada") {
            if (contratacionActual.cliente.tamano === "Grande") {
                perroGrandeAprobado = true;
            } else if (contratacionActual.cliente.tamano === "Pequeño") {
                perroChicoAprobado = true;
            }
        }
    }

    // Ahora proceso solo las PENDIENTES
    for (let i = 0; i < miSistema.contrataciones.length; i++) {
        let contratacion = miSistema.contrataciones[i];

        if (contratacion.paseador.id === usuarioLogeado.id && contratacion.estado === "Pendiente") {
            let tamano = contratacion.cliente.tamano;
            let cupos = miSistema.obtenerCuposNecesarios(contratacion.cliente);

            // Si hay perro grande aprobado, se rechazan los chicos, y viceversa
            if ((perroGrandeAprobado && tamano === "Pequeño") || (perroChicoAprobado && tamano === "Grande")) {
                contratacion.estado = "Rechazado";
            } else {
                // Verifico si hay cupos suficientes
                let cuposDisponibles = miSistema.cuposDisponible(usuarioLogeado.id);
                if (cuposDisponibles >= cupos) {
                    contratacion.estado = "Aprobada";

                    // Marcar el tipo aprobado para rechazar otros si es necesario
                    if (tamano === "Grande") {
                        perroGrandeAprobado = true;
                    } else if (tamano === "Pequeño") {
                        perroChicoAprobado = true;
                    }

                } else {
                    contratacion.estado = "Rechazado";
                }
            }
        }
    }

    tablaContratacionesPaseador();
    tablaPaseadorInformativa();
    mostrarEstadisticas();
}


//FUNCION PARA VER LAS ESTADISTICAS DEL PASEADOR.
function tablaPaseadorInformativa() {

    let tblMascotasAsignadas = ""
    for (let i = 0; i < miSistema.contrataciones.length; i++) {
        let contratacionActual = miSistema.contrataciones[i]
        if (contratacionActual.paseador.id === usuarioLogeado.id && contratacionActual.estado === "Aprobada") {
            tblMascotasAsignadas += `<tr>
                <td>${contratacionActual.cliente.nombre}</td>  
                <td>${contratacionActual.cliente.tamano}</td> 
                </tr>`
        }
    }


    document.querySelector("#tblMascotasAsignadas").innerHTML = tblMascotasAsignadas;
}


function mostrarEstadisticas() {

    let cupoDisponible = miSistema.cuposDisponible(usuarioLogeado.id)
    let paseadorBuscado = miSistema.buscarPaseador(usuarioLogeado.id)
    let cupoMaximo = paseadorBuscado.cupoMaximo
    let cuposOcupados = paseadorBuscado.cupoMaximo - cupoDisponible;
    let porcentajeCupos = cuposOcupados / cupoMaximo * 100

    if (cuposOcupados <= 0) {
        document.querySelector("#pCuposOcupados").innerHTML = "No hay perros asignados actualmente"
    } else {
        document.querySelector("#pCuposOcupados").innerHTML = `El total de cupos ocupados es:${cuposOcupados}`;
        document.querySelector("#pCuposMaximos").innerHTML = `El cupo maximo es: ${cupoMaximo}`
        document.querySelector("#pPorcentaje").innerHTML = `El porcentaje de cupos asignados es: ${porcentajeCupos} %`;
    }

}




document.querySelector("#btnSeccionCerrarSesion").addEventListener("click", cerrarSesion);

function cerrarSesion() {
    ocultarTodo();
    ocultarBotonesMenu();
    mostrarBotonesMenu("Registro"); //MUESTRO LOS BOTONES DE INICIO SESION Y REGISTRO
    mostrarBotonesMenu("Login");
    pasarASeccion("seccionLogin");
}
