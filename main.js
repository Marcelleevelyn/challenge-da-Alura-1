function criptografar(){
    let texto = document.getElementById('texto').value;
    let tituloMensagem = document.getElementById('titulo-mensagem');
    let paragrafo= document.getElementById('paragrafo');
    let menino = document.getElementById('menino');
    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (texto.length !=0) {
    document.getElementById('texto').value = textoCifrado;
   tituloMensagem.textContent = 'Texto criptografado com sucesso';
    paragrafo.textContent = '';
    menino.src= './img/criptografia.jpg';
  }  else {
    menino.src= './img/alura.png';
    tituloMensagem.textContent = 'Nenhuma mensagem foi encontrada';
    paragrafo.textContent = 'Escreva um texto que deseja criptografar ou descriptografar';
    alert('Você deve escrever alguma mensagem!');
  }
}
function descriptografar(){
    let texto = document.getElementById('texto').value;
    let tituloMensagem = document.getElementById('titulo-mensagem');
    let paragrafo= document.getElementById('paragrafo');
    let menino = document.getElementById('menino');
    let textoCifrado = texto
     .replace(/enter/gi, 'e')
     .replace(/imes/gi, 'i')
     .replace(/ai/gi, 'a')
     .replace(/ober/gi, 'o')
     .replace(/ufat/gi, 'u');

     if(texto.length != 0){
        document.getElementById('texto').value = textoCifrado;
         tituloMensagem.textContent = 'Texto descriptografado com sucesso';
         paragrafo.textContent = '';
         menino.src= './img/descriptografia.jpg';
     } else{
        menino.src= './img/alura.png';
        tituloMensagem.textContent = 'Nenhuma mensagem foi encontrada';
        paragrafo.textContent = 'Escreva um texto que deseja criptografar ou descriptografar';
        alert('Você deve escrever alguma mensagem!');
     }
}