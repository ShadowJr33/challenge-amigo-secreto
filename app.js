// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();

    if (nombreAmigo) {
        if (amigos.includes(nombreAmigo)) {
            alert('El nombre ya está en la lista');
        } else {
            amigos.push(nombreAmigo);
            actualizarListaAmigos();
            input.value = '';
        }
    } else {
        alert('Por favor, ingrese un nombre');
    }
}

function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Por favor, ingrese al menos 2 amigos');
        return;
    } else {
        const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        const amigoSorteadoIndex = amigos.indexOf(amigoSorteado);
        const amigoSecreto = amigos[(amigoSorteadoIndex + 1) % amigos.length];

        const amigoSecretoElement = document.getElementById('resultado');
        amigoSecretoElement.innerHTML = `Tu amigo secreto es: ${amigoSecreto}`;

        // Limpiar la lista de amigos
        amigos = [];
        actualizarListaAmigos();
    }
}