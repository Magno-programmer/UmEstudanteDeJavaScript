const calcular = document.getElementById('calculo');

function valor(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !==''){
        const imc = (peso/(altura * altura)).toFixed(1); // calculo do imc

        let texto = ''

        if(18.5 > imc){
             texto = 'você está abaixo do peso';
        }else if(24.9 > imc){
            texto = 'você está no peso ideal Parabéns !!!';        
        }else if(29.9 > imc){
            texto = 'você está com sobrepeso';        
        }else if(34.9 > imc){
            texto = 'você está com obesidade (1º grau)';        
        }else if(39.9 > imc){
            texto = 'você está com obesidade Severa (2º grau)';        
        }else{
            texto = 'você está com obesidade Mórbida (3º grau), CUIDADO !!!';        
        }

        //resultado que vai ser mostrado após o calculo
        resultado.textContent = `${nome} seu IMC é ${imc}, ${texto}`
    }

}

calcular.addEventListener('click', valor)
//evento onde vamos clicar no botão, e vai ocorrer o calculo