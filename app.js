'use strict'

const botaoTrocarImagem = document.getElementById('trocar-imagem')

function trocarImagem(){
    const imagem = document.getElementById('imagem').value
    document.documentElement.style.setProperty('--imagem', imagem)
}

botaoTrocarImagem.addEventListener('click',trocarImagem)