<h1 align="center">Amigo Secreto 🎁</h1>
<h2>Introducción</h2>
Este es un sencillo proyecto web que permite realizar un sorteo de amigo secreto. Los usuarios pueden ingresar nombres que se irán almacenando en una lista y luego sorteara alratoriamente un amigo secreto.


<h2>📌 Características</h2>

- Permite agregar y visualizar nombres en una lista.
- Valida que no se ingresen nombres dupliados.
- Selecciona aleatoriamente un "Amigo secreto" de la lista.
- Luego del sorteo bloquea los campos para que no se agreguen mas nombres.
- Luego de 20 segundos la página se recarga para volver a realizar el sorteo.

<h2>👨‍💻 Tecnologías utilizadas</h2>

- HTML
- CSS
- JavaScript

<h2>🎥 Evidencia</h2>

https://github.com/user-attachments/assets/7ae41dd7-e3a1-4ef6-b201-6b74e2b10462

<h2>📥 Instalación y uso</h2>

1. Debe clonar este repositorio en tu maquina de trabajo.

   `https://github.com/lauraavendano05/challengeAmigoSecreto.git`
   
2. Debe navegar hasta la carpeta del proyecto.

   `cd challengeAmigoSecreto`

3. Abre el archivo `index.html` en tu navegador.

<h1>🛠️ Funcionamiento</h1>

- Escribe el nombre de un amigo en el campo de entrada y presiona "Añadir".
- Repite el paso anterior hasta completar la lista de participantes.
- Haz clic en "Sortear Amigo" para seleccionar un nombre al azar.
- Después del sorteo, se bloquea la entrada de nuevos nombres.

<h1>📱 Explicación del código</h1>

- `agregarAmigo()` agrega el nombre que ingresas a una lista de amigos si no está vacío y si no se ha agregado previamente.
```javascript
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
```
  
- `sortearAmigo()`: Selecciona un nombre al azar de la lista, muestra el resultado y bloquea la entrada de nuevos nombres.
```javascript
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
        }, 20000);
    }
}
```
- `limpiarLista()`: Borra la lista de nombres que se visualiza en la pantalla.
```javascript
function limpiarLista() {
    document.getElementById('listaAmigos').innerHTML = '';
}
```
- `limpiarCaja`: Borra el campo de entrada despúes de agregar un nombre.
```javascript
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    document.querySelector('#amigo').focus();
}
```

<h1>📄 Licencia</h1>

Este proyecto está bajo la licencia MIT. Puedes usarlo y modificarlo libremente.
