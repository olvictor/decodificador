const texto = document.getElementById('texto');
const btnCriptografar = document.getElementsByClassName('btn-criptografar');
const btndDescriptografar = document.getElementsByClassName('btn-descriptografar');
const btnCopiar = document.getElementsByClassName('btn-copiar');
const textArea =  document.getElementById('text-area');

let textoCriptografado = ""
let textoSemCriptografar = texto.value.toLowerCase()

const encriptar = (texto) =>{
    for(let i = 0 ; i<texto.length ;i++){
        if(texto[i] === 'a') textoCriptografado += 'ai'
        else if(texto[i] === 'e') textoCriptografado += 'enter'
        else if(texto[i] === 'i') textoCriptografado += 'imes'
        else if(texto[i] === 'o') textoCriptografado += 'ober'
        else if(texto[i] === 'u') textoCriptografado += 'ufat'
        else textoCriptografado += texto[i]
        
    }
}

const descriptografar = (texto) =>{
    if(texto.includes('ai')) textoCriptografado = textoCriptografado.replaceAll('ai','a')
    if(texto.includes('enter')) textoCriptografado = textoCriptografado.replaceAll('enter','e')
    if(texto.includes('imes')) textoCriptografado = textoCriptografado.replaceAll('imes','i')
    if(texto.includes('ober')) textoCriptografado = textoCriptografado.replaceAll('ober','o')
    if(texto.includes('ufat')) textoCriptografado = textoCriptografado.replaceAll('ufat','u')
   
}

const criptografarTexto = (e) =>{
   encriptar(texto.value)
   document.getElementById('containerSecundario').style.display = 'none';
   document.getElementById('containerSecundarioComTexto').style.display = 'block';
   textArea.innerHTML = `
   <p>${textoCriptografado}</p>
   `
} 

const descriptografarTexto = (e) =>{
    descriptografar(textoCriptografado)
    textArea.innerHTML = `
    <p>${textoCriptografado}</p>
    `
 } 


const copiarTexto = () =>{
    navigator.clipboard.writeText(textoCriptografado);
    alert(textoCriptografado + ' copiado para a área de transferência');
}

