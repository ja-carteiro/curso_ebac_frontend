const formulario = document.getElementById("formulario");

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    let input1 = document.getElementById("input-num1");
    let input2 = document.getElementById("input-num2");
    const mensagemFalha = `INVÁLIDO`;
    const mensagemSucesso = `${input2.value} > ${input1.value} // INPUT VÁLIDO`;
    const mensagem = document.querySelector("#mensagem");

    if (Number(input2.value) > Number(input1.value)) {
        mensagem.innerHTML = mensagemSucesso;
        document.getElementById("mensagem").style.background = "#00a86b";
    } 
    else {
        mensagem.innerHTML = mensagemFalha;
        document.getElementById("mensagem").style.background = "#eb6e6e";
    }
    mensagem.style.display = "block";
})