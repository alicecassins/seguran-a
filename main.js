const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 5; // Valor inicial
numeroSenha.textContent = tamanhoSenha;

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';

const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkboxes = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].onclick = geraSenha;
}

geraSenha(); 

function geraSenha() {
    const opcoesSelecionadas = document.querySelectorAll('.checkbox:checked');
    let alfabeto = '';

    opcoesSelecionadas.forEach(checkbox => {
        if (checkbox.name === 'maiusculo') alfabeto += letrasMaiusculas;
        if (checkbox.name === 'minusculo') alfabeto += letrasMinusculas;
        if (checkbox.name === 'numero') alfabeto += numeros;
        if (checkbox.name === 'simbolo') alfabeto += simbolos;
    });

    if (alfabeto.length === 0) {
        campoSenha.value = 'Selecione uma opção!';
        forcaSenha.classList.remove('fraca', 'media', 'forte');
        return;
    }

    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        const numeroAleatorio = Math.floor(Math.random() * alfabeto.length);
        senha += alfabeto[numeroAleatorio];
    }

    campoSenha.value = senha;
    classificaSenha();
}

function classificaSenha() {
    forcaSenha.classList.remove('fraca', 'media', 'forte');
    if (tamanhoSenha > 11) {
        forcaSenha.classList.add('forte');
    } else if (tamanhoSenha > 5 && tamanhoSenha <= 11) { 
        forcaSenha.classList.add('media');
    } else if (tamanhoSenha <= 5) {
        forcaSenha.classList.add('fraca');
    }
}


