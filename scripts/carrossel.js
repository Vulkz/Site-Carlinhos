const imagens = document.getElementById('img');
const imagem = document.getElementsByClassName('item');

let idx = 0;

function carrossel() {
    idx++;

    if(idx > imagem.length - 1){
        idx = 0;
    }

    imagens.style.transform = `translateX(${-idx * 100}%)`;
}

setInterval(carrossel, 5000);