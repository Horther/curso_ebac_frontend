$(document).ready(function (){

    $('form').on('submit',function(e){
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val();
        const novaTarefa = $(`<li></li>`);

        //$(`${nomeTarefa}`).appendTo(novaTarefa);
        $(`<p>${nomeTarefa}</p>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#nova-tarefa').val('');

    })

    $('p').click(function(){
        $(`<>`)
    })


})