// DOM
const form = document.querySelector('form')
const inputNome = document.getElementById('nome')
const inputSenha = document.getElementById('senha')
const mnserro = document.querySelector('.mnserro')
const botao = document.querySelector('button')
const dados = document.querySelector('.dados')
const verSenha = document.getElementById('btn-senha')
const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu');




// Função para mostrar/esconder a senha com FontAwesome
function mostrarSenha() {
    if (!verSenha) return;
    
    verSenha.addEventListener('click', () => {
        // Alterna o tipo do input entre 'password' e 'text'
        if (inputSenha.type === 'password') {
            inputSenha.type = 'text';
            // Muda para o olho cortado (fechado)
            verSenha.classList.remove('fa-eye');
            verSenha.classList.add('fa-eye-slash');
        } else {
            inputSenha.type = 'password';
            // Retorna para o olho normal (aberto)
            verSenha.classList.remove('fa-eye-slash');
            verSenha.classList.add('fa-eye');
        }
    });
}
// Inicializa a escuta de clique do macaquinho


// Evento do input de senha (validação em tempo real)
inputSenha.addEventListener('input', () => {
    const senha = inputSenha.value.trim()

    // Se senha for menor que 8 caracteres
    if (senha.length < 8) {
        mnserro.textContent = `mínimo de 8 caracteres (atual: ${senha.length})`
        botao.disabled = true
        botao.style.backgroundColor = 'gray'
        return
    }

    // Libera o botão se a senha tiver 8 ou mais caracteres
    botao.disabled = false
    botao.style.backgroundColor = ''
    mnserro.textContent = ''
})

// Evento de envio do formulário
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = inputNome.value.trim()
    const senha = inputSenha.value.trim()

    // Validação de campos vazios
    if (!nome || !senha) {
        mnserro.textContent = 'preencha os campos'
        return
    }

    // Chamada da função para exibir os dados


    // Reset dos campos
    inputNome.value = ''
    inputSenha.value = ''
    inputNome.focus()
})