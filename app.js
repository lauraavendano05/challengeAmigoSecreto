let listaPersonas = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo === '') {
        alert("Por favor, inserte un nombre.");
        limpiarCaja();
        return;
    } else {
        if (listaPersonas.includes(nombreAmigo)) {
            alert("Este amigo ya está en la lista.");
            limpiarCaja();
            return;
        } else {
            listaPersonas.push(nombreAmigo);
            console.log(listaPersonas);
        }
    }
    limpiarLista();
    for (let i = 0; i < listaPersonas.length; i++) {
        let imprimirLista = document.createElement('li');
        imprimirLista.textContent = listaPersonas[i];
        document.getElementById('listaAmigos').appendChild(imprimirLista);
        //console.log(imprimirLista);
    }

    limpiarCaja();
}

function sortearAmigo() {
    if (listaPersonas.length === 0) {
        alert("No hay amigos para sortear, por favor agrega algunos.");
        return;
    } else {
        const seleccion = Math.floor(Math.random() * listaPersonas.length);
        const amigoSorteado = listaPersonas[seleccion];

        document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
        limpiarLista();

        document.getElementById('amigo').disabled = true;
        document.querySelector('.button-add').disabled = true;
        setTimeout(() => {
            location.reload();
        }, 10000);
    }
}

function limpiarLista() {
    document.getElementById('listaAmigos').innerHTML = '';
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    document.querySelector('#amigo').focus();
}
