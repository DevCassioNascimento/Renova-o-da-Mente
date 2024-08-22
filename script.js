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

