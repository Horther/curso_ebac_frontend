const form = document.getElementById('formulario');
const campoA = document.getElementById('num_menor');
const campoB = document.getElementById('num_maior');
const message = document.getElementById('message');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campoA.value === '' || campoB.value === '')
    {
        showMessage (`Adicione algo aos campos para comparar`);
        message.classList.add('error');
    } else if (campoA.value == campoB.value)
        {
            showMessage(`Os valores são iguais, por favor siga a instrução do titulo`)
            message.classList.add('error');
        } else if(campoA.value >= campoB.value)
            {
        showMessage(`O Campo A (${campoA.value}) é <span>MAIOR</span> que o Campo B (${campoB.value}), por favor alterar os valores`);
        message.classList.add('error');

        }   else {
        showMessage(`Parabéns! O Campo A (${campoA.value}) é <span>MENOR</span> que o Campo B (${campoB.value})`);
        message.classList.add('success');

    }

    function showMessage(msg) {
        message.innerHTML = msg;
        message.style.display = 'block';
        setTimeout(function () {
            message.style.display = 'none';

            message.classList.remove('error');
            message.classList.remove('success');

        }, 3000);
    }
})




