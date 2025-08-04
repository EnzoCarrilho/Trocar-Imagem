'use strict'

const botaoTrocarImagem = document.getElementById('trocar-imagem')

function trocarImagem(){
    const imagem = document.getElementById('imagem').value
    document.documentElement.style.setProperty('--imagem','url(./img/'+imagem+'.jpg)')
}

botaoTrocarImagem.addEventListener('click',trocarImagem)