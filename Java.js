
let hideText_btn = document.getElementById('hideText_btn');

let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText() {
    hideText.classList.toggle('show');
}

    if(hideText.classList.contains('show')){
        hideText_btn.innerHTML = 'Menos';
    }
    else{
        hideText_btn.innerHTML = 'DATOS PERSONALES';
    }

let animado = document.querySelectorAll(".animado");
function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i < animado.length; i++ ) {
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado -300 < scrollTop); {
        animado[i].style.opacity = 1;
    }
}
}

window.addEventListener('scroll', mostrarScroll);
