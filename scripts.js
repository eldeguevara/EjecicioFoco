let foco = document.getElementById("foco")
let botonApagado = document.getElementById("btApagado")
let botonEncendido = document.getElementById("btEncendido")

botonApagado.onclick = () => foco.src = "./img/focoApagado.jpeg"

botonEncendido.onclick = () => foco.src = "./img/focoEncendido.jpeg"
