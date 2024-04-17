$(document).ready(function () {
    $('#campo-telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    })

    $('#campo-cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    })

    $('#campo-cep').mask('00000-000', {
        placeholder: '_____-___'
    })
})