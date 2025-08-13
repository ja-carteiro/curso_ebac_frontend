document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-sorteador').addEventListener('submit', (event) => {
        event.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo + 1);
        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})