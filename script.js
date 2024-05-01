const form = document.getElementById('formulario');
const campoA = document.getElementById('num_menor');
const campoB = document.getElementById('num_maior');
const message = document.getElementById('message');
const campo = document.querySelector('') //apagar a div da mensagem quando estiver editando os campos

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campoA.value === '' || campoB.value === '')
    {
        message.style.display = "block";
        message.innerHTML = `Adicione algo aos campos para comparar`
    } else if(campoA.value >= campoB.value)
        {
        console.log(campoA.value.type)
        message.style.display = 'block';
        message.innerHTML = `O Campo A (${campoA.value}) é <span>MAIOR</span> que o Campo B (${campoB.value}), por favor alterar os valores`;
        }   else {
        message.style.display = 'block';
        message.innerHTML = `Parabéns! O Campo A (${campoA.value}) é <span>MENOR</span> que o Campo B (${campoB.value})`;
    }

    
})




