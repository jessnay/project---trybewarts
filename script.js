const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const btnEnviar = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
const botaoform = document.querySelector('#botao-form');

// Função para habilitar o botão de enviar quando o checkbox é marcado
function habilitarBtn(eventoDeOrigem) {
  if (eventoDeOrigem.target.checked) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
}
checkbox.addEventListener('change', habilitarBtn);

// Função para criar o contador de caracteres restantes no textarea
const createCounter = () => {
  const paragraph = document.getElementById('counter');
  const textarea = document.getElementById('textarea');
  textarea.addEventListener('keyup', () => {
    paragraph.innerHTML = 500 - textarea.value.length;
  });
};

createCounter();

// Função para exibir alerta com a validação de email e senha
function alertinha(event) {
  event.preventDefault(); // Previne o envio do formulário
  const emailzinho = email.value;
  const senhazinha = senha.value;

  if (emailzinho === 'tryber@teste.com' && senhazinha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
botaoform.addEventListener('click', alertinha);
