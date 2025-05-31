// sessão
function validarSessao(pagina) {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var id = sessionStorage.ID_USUARIO;

    if (
        email == undefined ||
        nome == undefined ||
        id ==  undefined
    ) {
        if (pagina == 'forum') {
            corpo_forum.style.display = 'none'
        } 
        if (pagina == 'dashboard') {
            dashboard.style.display = 'none'
        }
        
        cardErroLogin.style.display = 'flex'
        mensagem_erro_login.innerHTML += 
            "É preciso logar! Redirecionando para o login..."
        setInterval(function(){window.location = "login.html"}, 3000)
    }

    // var b_usuario = document.getElementById("b_usuario");

    // if (email != null && nome != null) {
    //     b_usuario.innerHTML = nome;
    // } else {
    //     window.location = "../login.html";
    // }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    // var divErrosLogin = document.getElementById("div_erros_login");
    // if (texto) {
    //     divErrosLogin.style.display = "flex";
    //     divErrosLogin.innerHTML = texto;
    // }
}

function sumirMensagem() {
    cardErro.style.display = "none";
}