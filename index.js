function navigate(param, seccion) {
    for (var i = 0; i < document.getElementsByClassName('nav-link').length; i++) {
        document.getElementsByClassName('nav-link')[i].classList.remove('active');
    }
    param.classList.toggle('active');

    activarSeccion(seccion);
}

function activarSeccion(seccion) {
    document.getElementById(seccion).classList.toggle('seccion-activa');
    setTimeout(() => {
        document.getElementById(seccion).classList.toggle('seccion-activa');
    }, 1500);
}

