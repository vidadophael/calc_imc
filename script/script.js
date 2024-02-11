const btn_calcular = document.getElementById('calculate')

function imc() {
    const nome = document.getElementById('name').value
    const altura = document.getElementById('height').value
    const peso = document.getElementById('weight').value
    const resultado = document.getElementById('final-result')


    if(nome !== '' && altura !== '' && peso !== '') {
        const calcImc = (peso / (altura*altura))
        if(calcImc < 18.5) {
            resultado.textContent = `${nome}, seu IMC é ${calcImc.toFixed(2)}. A Classificação é ABAIXO DO PESO e o status é AUMENTE SEU PESO.`
        }else if(calcImc >= 18.5 && calcImc <= 24.9){
            resultado.textContent = `${nome}, seu IMC é ${calcImc.toFixed(2)}. A classificação é PESO NORMAL e o status é PESO SAUDÁVEL. Continue assim.`
        }else if(calcImc >=25.0 && calcImc <= 29.9) {
            resultado.textContent = `${nome}, seu IMC é ${calcImc.toFixed(2)}. A classificação é SOBREPESO e o status é de atenção, você está ACIMA DO PESO.`
        }else if(calcImc >= 30.0 && calcImc <= 34.9) {
            resultado.textContent = `${nome}, seu IMC é ${calcImc.toFixed(2)}. A classificação é
            OBESIDADE GRAU I e o status é OBESIDADE LEVE, CUIDADO!`
        }else if(calcImc >= 35.0 && calcImc <= 39.9) {
            resultado.textContent = `${nome}, seu IMC é ${calcImc.toFixed(2)}. A classificação é OBESIDADE GRAU II(severa) e o status é OBESIDADE MODERADA, cuide-se!`
        }else if(calcImc >= 40.0){
            resultado.textContent = `${nome}, seu IMC é ${calcImc.toFixed(2)}. A classificação é OBESIDADE GRAU III e o status é OBESIDADE GRAVE, CONSULTE UM MÉDICO.`
        }  
    }else { 
        resultado.textContent = 'Preencha todos os campos.'
    }
}

btn_calcular.addEventListener('click', imc);
