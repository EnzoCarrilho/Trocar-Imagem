'use strict'

const botaoTrocarImagem = document.getElementById('trocar-imagem')
const botaoAutomatico = document.getElementById('auto')

function trocarImagem(){
    const imagem = document.getElementById('imagem').value
    document.documentElement.style.setProperty('--imagem','url(./img/'+imagem+'.jpg)')
}

const imagemContainer = document.querySelector('.box-imagem');


let animacaoOn = false

function modoAutomatico(){

    //inverte o estado da variavel animacaoOn para começar desligado
    animacaoOn = !animacaoOn

    imagemContainer.classList.toggle('animacao-ativa');

   
        if (imagemContainer.classList.contains('animacao-ativa')) {
        botaoAutomatico.textContent = 'Parar Modo Automático';
        } else {
        botaoAutomatico.textContent = 'Iniciar Modo Automático';
    }
}


botaoAutomatico.addEventListener('click', modoAutomatico);

botaoTrocarImagem.addEventListener('click',trocarImagem)