$(document).ready(function () {
    let contador = 0;


    $('form').on('submit', function (e) {
        e.preventDefault();
        contador += 1;
        const inputNovo = $('#tarefaInput').val();
        const novaTarefa = $('<li></li>');
        $(`<h2 class="item" id="item${contador}">${inputNovo}</h2>`)
            .appendTo(novaTarefa)
            .on('click', function () {
                $(this).addClass('done')
            })
        $(novaTarefa).appendTo('ul');
        $('#tarefaInput').val('');

    })
})