$(document).ready(function (){

    $('form').on('submit',function(e){
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val().trim();
        if(nomeTarefa !== ''){

            const novaTarefa = $(`<li></li>`);
    
            //$(`${nomeTarefa}`).appendTo(novaTarefa);
            $(`<a href="#" class='none'>${nomeTarefa}</a>`).appendTo(novaTarefa);
            $(novaTarefa).appendTo('ul');
            $('#nova-tarefa').val('');
        } else {
            alert('Adicione algo antes de confirmar');
        }

    })
    $('ul').on('click','.none',function (e){
        e.preventDefault();
        $(this).toggleClass('line-thru');
    })


})