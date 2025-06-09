document.addEventListener('DOMContentLoaded', function(evento){
    evento.preventDefault();
    document.getElementById('form-sorteador').addEventListener('submit', function(){
        let numeroMax = document.getElementById('num-max').value;
        numeroMax = parseInt (numeroMax);
        
        let numeroAleatorio = Math.random() * numeroMax;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';

    })
}) 