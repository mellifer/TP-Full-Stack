window.onload = iniciar;

function iniciar() {
    document.getElementById('enviar').addEventListener('click', validar, false); // El false indica en que momento se ejecuta la función en este caso dsp que se cargó la pag.
}

function vnombre() {
    var Enombre = document.getElementById('nombre');
    if (Enombre.value == '') {
        alert('El campo nombre no puede estar vacio');
        return false;
    }

    return true;
}

function vapellido() {
    var Eapellido = document.getElementById('apellido');
    if (Eapellido.value == '') {
        alert('El campo apellido no puede estar vacio');
        return false;
    }

    return true;
}

function vdireccion() {
    var Edireccion = document.getElementById('direccion');
    if (Edireccion.value == '') {
        alert('El campo dirección no puede estar vacio');
        return false;
    }
    return true;
}

function vciudad() {
    var Eciudad = document.getElementById('ciudad');
    if (Eciudad.value == '') {
        alert('El campo ciudad no puede estar vacio');
        return false;
    }

    return true;
}

function vcodigo() {
    var Ecodigo = document.getElementById('codigo');
    if (isNaN(Ecodigo.value)) {
        alert('El campo código postal debe ser numérico');
        return false;
    }
    return true;
}

function vemail() {
    var Eemail = document.getElementById('email');
    if (Eemail.value == '') {
        alert('El campo email no puede estar vacio');
        return false;
    }

    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (re.test(Eemail.value)) {
        return true;
    }

    alert('El email ingresado no es válido')
    return false;
}

function vfecha() {
    var Efecha = document.getElementById('fecha');

    if (!Efecha.value) {
        alert('Debe seleccionar su fecha de nacimiento');
        return false;
    }
    var fechaActual = new Date();
    var añoActual = parseInt(fechaActual.getFullYear());
    var mesActual = parseInt(fechaActual.getMonth()) + 1;
    var diaActual = parseInt(fechaActual.getDate());

    var añoNac = parseInt(String(Efecha.value).substring(0, 4));
    var mesNac = parseInt(String(Efecha.value).substring(5, 7));
    var diaNac = parseInt(String(Efecha.value).substring(8, 10));

    let edad = añoActual - añoNac;
    if (mesActual < mesNac) {
        edad--;
    } else if (mesActual == mesNac) {
        if (diaActual < diaNac) {
            edad--;
        }
    }

    if (edad < 18) {
        alert('Debe ser mayor de edad para registrarse');
        return false;
    }
    return true;
}

function vgenero() {
    var Egenero = document.getElementById('form');
    if (Egenero.selectedIndex == 0) {
        alert('Debe seleccionar su género');
        return false;
    }
    return true;
}

function vestuidos() {
    var EPI = document.getElementById('PI');
    var EPC = document.getElementById('PC');
    var ESI = document.getElementById('SI');
    var ESC = document.getElementById('SC');
    var ETI = document.getElementById('TI');
    var ETC = document.getElementById('TC');

    if (EPI.checked || EPC.checked || ESI.checked || ESC.checked || ETI.checked || ETC.checked) {
        return true;
    }
    alert('Debe seleccionar sus estudios');
    return false;
}

function vTyC() {
    var Etyc = document.getElementById('tyc');
    if (!Etyc.checked) {
        alert('Debe aceptar nuestros términso y condiciones');
        return false;
    }
    return true;
}

function validar(e) {
    if (vnombre() && vapellido() && vdireccion() && vciudad() && vcodigo() && vemail() && vcodigo() && vgenero() && vestuidos() && vTyC() && vfecha() && confirm('¿Está seguro que desea enviar el formulario?')) {
        alert("¡Formulario enviado correctamente!");
        document.forms[0].submit();
        return true;
    }
    return false;
}