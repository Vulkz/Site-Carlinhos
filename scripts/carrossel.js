const imagens = document.getElementById('img');
const imagem = document.getElementsByClassName('item');

let idx = 0;
let direcao = true;

function carrossel() {
    if(idx >= imagem.length - 1) {
        direcao = false;
    } else if(idx <= 0) {
        direcao = true;
    }

    if(!direcao) {
        idx--;        
    } else {
        idx++;
    }

    imagens.style.transform = `translateX(${idx * -100}%)`;
}

setInterval(carrossel, 5000);
