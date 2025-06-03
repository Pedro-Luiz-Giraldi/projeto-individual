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
}

function sumirMensagem() {
    cardErro.style.display = "none";
}

// header
function headerLinks(btn) {
    if (btn == 'pagInicial') {
        document.getElementById('idx').scrollIntoView();
    }
    if (btn == 'inicio') {
        location.href = "index.html"
    }
    if (btn == 'cadastro') {
        location.href = "cadastro.html"
    }
    if (btn == 'login') {
        location.href = "login.html"
    }
    if (btn == 'forum') {
        location.href = "forum.html"
    }
    if (btn == 'dashboard') {
        location.href = "dashboard.html"
    }
}