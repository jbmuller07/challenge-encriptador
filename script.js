const textArea = document.querySelector(".texto__usuario");
const mensaje = document.querySelector(".texto__mensaje");
const dibujo= document.querySelector(".seccion2")

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    dibujo.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    // Restringir caracteres especiales
    const sanitizedText = restrictSpecialCharacters(stringEncriptada);
    return sanitizedText;
}

function restrictSpecialCharacters(input) {
    // Define la expresión regular para restringir caracteres especiales
    const specialCharsRegex = /[^a-z\s]/gi;
    // Reemplaza los caracteres especiales por una cadena vacía
    return input.replace(specialCharsRegex, '');
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    dibujo.style.backgroundImage = "none";

}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    const sanitizedText = restrictSpecialCharacters(stringDesencriptada);
    return sanitizedText;
}

function copiarTexto(){
    mensaje.select(mensaje.value);
    document.execCommand("copy");
    alert("texto copiado con éxito");
    mensaje.value="";
    dibujo.style.backgroundImage = ""
}

// Agregar validación de caracteres especiales al textarea
textArea.addEventListener('input', function() {
    let text = this.value;
    let sanitizedText = restrictSpecialCharacters(text);
    if (sanitizedText !== text) {
        this.value = sanitizedText;
    }
});