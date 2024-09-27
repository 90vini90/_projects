
var bot = window.document.getElementById('bot')

function clicar() {
    var senha = window.prompt('Digite a senha!')
    
    if (senha == 'V1N1C14S') {
        window.location.href = "../pages/arquives.html";
    } else if (senha != 'V1N1C14S') {
        window.alert('Senha Inválida')
    }
}

