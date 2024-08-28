function toggleInfo(element) {
    const serviceInfo = element.nextElementSibling;
    const isVisible = serviceInfo.style.display === "block";

    // Alterna a visibilidade da descrição
    serviceInfo.style.display = isVisible ? "none" : "block";

    // Alterna a rotação da seta
    element.style.transform = isVisible ? "rotate(0deg)" : "rotate(180deg)";
}


// galeria start

document.querySelectorAll('.expandable').forEach(item => {
    item.addEventListener('click', function() {
        const overlay = document.getElementById('overlay');
        const expandedImg = document.getElementById('expandedImg');
        overlay.style.display = 'flex';
        expandedImg.src = this.src;
    });
});

document.getElementById('closeBtn').addEventListener('click', function() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});


// especialidades 

document.querySelectorAll('.col-md-6').forEach(function(item) {
    item.addEventListener('click', function() {
        // Seleciona o elemento dentro da classe .line-dec e <p> do item clicado
        let lineDec = this.querySelector('.line-dec');
        let paragraph = this.querySelector('p');

        // Alterna a visibilidade
        if (lineDec.style.display === "none") {
            lineDec.style.display = "block";
            paragraph.style.display = "block";
        } else {
            lineDec.style.display = "none";
            paragraph.style.display = "none";
        }
    });
});


// responsividade nav 

function toggleMenu() {
    var menu = document.querySelector('.nav-pills');
    menu.classList.toggle('show');
}

// efeito surgir galeria 

document.addEventListener('scroll', function() {
    var elementos = document.querySelectorAll('.hexagon');

    elementos.forEach(function(elemento) {
        var posicao = elemento.getBoundingClientRect().top;
        var alturaTela = window.innerHeight;

        if (posicao < alturaTela - 100) { 
            elemento.classList.add('visible');
        }
    });
});


// efeito surgir especialidades 

document.addEventListener('scroll', function() {
    var elementos = document.querySelectorAll('.service-item');

    elementos.forEach(function(elemento) {
        var posicao = elemento.getBoundingClientRect().top;
        var alturaTela = window.innerHeight;

        if (posicao < alturaTela - 100) { 
            elemento.classList.add('visible');
        }
    });
});

// efeito surgir texto especialidades 

document.addEventListener('scroll', function() {
    var elementos = document.querySelectorAll('.textEspe');

    elementos.forEach(function(elemento) {
        var posicao = elemento.getBoundingClientRect().top;
        var alturaTela = window.innerHeight;

        if (posicao < alturaTela - 100) {
            elemento.classList.add('visible');
        }
    });
});

// responsividade carrousel inicio 

document.addEventListener('DOMContentLoaded', function() {
    const carou = document.querySelector('#carouselExampleFade');
    const carouselItems = carou.querySelectorAll('.carousel-item');
    let startX;

    carou.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });

    carou.addEventListener('touchend', function(e) {
        const endX = e.changedTouches[0].clientX;
        const threshold = 50; // Mínima distância para considerar um swipe

        if (startX - endX > threshold) {
            // Swipe para a esquerda (próxima imagem)
            $('#carouselExampleFade').carousel('next');
        } else if (endX - startX > threshold) {
            // Swipe para a direita (imagem anterior)
            $('#carouselExampleFade').carousel('prev');
        }
    });
});
