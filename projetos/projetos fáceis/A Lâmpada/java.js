const lampada = document.getElementById('imagem');
const turnOnOff = document.getElementById('ligarDesligar');
const body = document.getElementById('body');

function on(){
    if(!lampquebrada()){
        lampada.src = './imagens/ligada.jpeg'
        body.style.backgroundColor = 'white';
        lampada.style.opacity = '1';
        lampada.style.width ='158px';
        lampada.style.height ='215px';
        turnOnOff.textContent = 'Desligar';
    }
    turnOnOff.style.backgroundColor = 'rgb(255, 0, 0)';
}

function off(){
    if(!lampquebrada()){
        lampada.src = './imagens/desligada.jpg'
        body.style.backgroundColor = 'black';
        lampada.style.opacity = '0.0274';
        lampada.style.width ='158px';
        lampada.style.height ='215px';
        turnOnOff.textContent = 'Ligar';
    }
    turnOnOff.style.backgroundColor = 'rgb(30, 124, 0)';
    
}

function onOff(){
    if(turnOnOff.textContent === 'Ligar'){
        on();
    }else{
        off();
    }
}


function lampquebrada(){
    return lampada.src.indexOf('quebrada') > -1;
}

function quebra(){
    lampada.src = './imagens/quebrada.jpg'
    body.style.backgroundColor = 'black';
    lampada.style.opacity = '0.11';
    lampada.style.width ='158px';
    lampada.style.height ='215px';
    turnOnOff.textContent = 'Ligar';
}

turnOnOff.addEventListener('click', onOff);
lampada.addEventListener('mouseenter', on);
lampada.addEventListener('mouseleave', off);
lampada.addEventListener('dblclick', quebra);