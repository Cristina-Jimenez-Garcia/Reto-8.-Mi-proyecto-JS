function $(selector){
    return document.querySelector(selector);
}

/* login */

// var json=(
//     {"clientes":[
//       {"usuario":"cliente1", "contraseña":"cliente1"},
//       {"usuario":"cliente2", "contraseña":"cliente2"},
//       {"usuario":"cliente3", "contraseña":"cliente3"},
//       {"usuario":"cliente4", "contraseña":"cliente4"}    
//     ]
//     },
//     {"admin":[
//         {"usuario":"admin1", "contraseña":"admin1"},
//         {"usuario":"admin2", "contraseña":"admin2"},
//         {"usuario":"admin3", "contraseña":"admin3"},
//         {"usuario":"admin4", "contraseña":"admin4"}    
//       ]
//       }
// );

var jsonClientes={
    "clientes":[
      {"usuario":"cliente1", "contraseña":"cliente1"},
      {"usuario":"cliente2", "contraseña":"cliente2"},
      {"usuario":"cliente3", "contraseña":"cliente3"},
      {"usuario":"cliente4", "contraseña":"cliente4"},    
    ]
};

var jsonAdmin={
    "admin":[
        {"usuario":"admin1", "contraseña":"admin1"},
        {"usuario":"admin2", "contraseña":"admin2"},
        {"usuario":"admin3", "contraseña":"admin3"},
        {"usuario":"admin4", "contraseña":"admin4"} ,   
    ]
};

window.onload = function(){
    var elemento = document.getElementById("cliente");
    var elemento2 = document.getElementById("admin");
    elemento.style.display = "none";
    elemento2.style.display = "none";
    var correctoC = $(".usuarioIncorrecto");
    correctoC.style.display = "none";
    var correctoA = $(".adminIncorrecto");
    correctoA.style.display = "none";
}

function validacionUsuarios(){
    var i = 0;
    while (i < jsonClientes.clientes.length){
        if (document.formCliente.usuario.value == jsonClientes.clientes[i].usuario && document.formCliente.contraseña.value == jsonClientes.clientes[i].contraseña){
            entrarCliente();
        }else{
            alertCliente();
        }
        i++;
    }
}

function validacionAdmin(){
    var i = 0;
    while (i < jsonAdmin.admin.length){
        if (document.formAdmin.usuario.value == jsonAdmin.admin[i].usuario && document.formAdmin.contraseña.value == jsonAdmin.admin[i].contraseña){
            entrarAdmin();
        }else{
            alertAdmin();
        }
        i++;
    }
}

function alertCliente(){
    var incorrecto = $(".usuarioIncorrecto");
    incorrecto.style.display = "block";
}

function alertAdmin(){
    var incorrecto = $(".adminIncorrecto");
    incorrecto.style.display = "block";
}

function volver(){
    var cliente = document.getElementById("cliente");
    var admin = document.getElementById("admin");
    var login = document.getElementById("registro");
    login.style.display = "block";
    cliente.style.display = "none";
    admin.style.display = "none";
    var correctoC = $(".usuarioIncorrecto");
    correctoC.style.display = "none";
    var correctoA = $(".adminIncorrecto");
    correctoA.style.display = "none";
}

function entrarCliente(){
    var horario = document.getElementById("cliente");
    var login = document.getElementById("registro");
    login.style.display = "none";
    horario.style.display = "block";
    //Al entrar en cliente las clases del horario no se vean
    document.getElementById("cardio").style.display = "none";
    document.getElementById("bodyFit").style.display = "none";
    document.getElementById("boxeo").style.display = "none";
    document.getElementById("tonoFit").style.display = "none";
    document.getElementById("spining").style.display = "none";
    document.getElementById("kickBoxing").style.display = "none";
    document.getElementById("pilates").style.display = "none";
    document.getElementById("yoga").style.display = "none";
    document.getElementById("zumba").style.display = "none";
    
    //Las opciones de eliminar de las clases que no esten, estarán bloqueadas
    // elimCardio.submitbutton.disabled = true;
    // eliminarBodyFit.submitbutton.disabled = true;
    // eliminarBoxeo.submitbutton.disabled = true;
    // eliminarTonoFit.submitbutton.disabled = true;
    // eliminarSpinning.submitbutton.disabled = true;
    // eliminarKickBoxing.submitbutton.disabled = true;
    // eliminarPilates.submitbutton.disabled = true;
    // eliminarYoga.submitbutton.disabled = true;
    // eliminarZumba.submitbutton.disabled = true;
}

function entrarAdmin(){
    var horario = document.getElementById("admin");
    var login = document.getElementById("registro");
    login.style.display = "none";
    horario.style.display = "block";
    //Mostrar Sala 1
    document.getElementById("sala1").style.display = "block";
    //Ocultar Sala 2
    document.getElementById("sala2").style.display = "none";
}

function añadirSala(){

}

var jsonClases=
    [
        {"clase" : "Cardio"},
        {"clase" : "BodyFit"},
        {"clase" : "Boxeo"},
        {"clase" : "Tono-Fit"},
        {"clase" : "Spinning"}, 
        {"clase" : "Kick boxing"},
        {"clase" : "Pilates"},
        {"clase" : "Yoga"}, 
        {"clase" : "Zumba"}
    ]
;

function bloquearEliminarClase(){
    var cardio = document.getElementByClass("cardio");
    var elimCardio = document.getElementByClass("elimCardio");
    if (cardio.style.display == "none") {
        elimCardio.style.display = "disabled";
    }
    var bodyFit = document.getElementByClass("bodyFit");
    var elimBodyFit = document.getElementByClass("elimBodyFit");
    if (bodyFit.style.display == "none") {
        elimBodyFit.style.display = "disabled";
    }
    var boxeo = document.getElementByClass("boxeo");
    var elimBoxeo = document.getElementByClass("elimBoxeo");
    if (boxeo.style.display == "none") {
        elimBoxeo.style.display = "disabled";
    }
    var tonoFit = document.getElementByClass("tonoFit");
    var elimTonoFit = document.getElementByClass("elimTonoFit");
    if (tonoFit.style.display == "none") {
        elimTonoFit.style.display = "disabled";
    }
}

function sala1() {
    //Mostrar Sala 1
    document.getElementById("sala1").style.display = "block";
    //Ocultar Sala 2
    document.getElementById("sala2").style.display = "none";
}

function sala2() {
    //Ocultar Sala 1
    document.getElementById("sala1").style.display = "none";    
    //Mostrar Sala 2
    document.getElementById("sala2").style.display = "block";
}

function bloquearAñadirClase(){

}