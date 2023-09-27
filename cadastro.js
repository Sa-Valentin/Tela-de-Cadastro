const btn_proximo = document.querySelector('#img');
const msg = document.querySelector('#titulo');
const a = document.querySelector('#a')
const div_inserir = document.querySelector('#inserir')
let q_click = false
const div_verificar = document.querySelector('#verificar_dados')

function dados_usuario(email, senha, nome){
    this.email = email;
    this.senha = senha;
    this.nome = nome;
}

let input = document.createElement('input');
input.type = 'text'
input.placeholder = 'Insira aqui o seu Email'
input.id = 'input'
div_inserir.insertBefore(input, a)

    let erro_email=(email)=>{
    const regex = /^[^\s@]+@[^\s@]+\.+[^\s@]+$/
    return regex.test(email)
}

    let erro_nome=(nome)=>{
        const regex_nomes = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/u
        return regex_nomes.test(nome)
    }

    let erro_senhas=(senha)=>{
        const regex = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{8,}$/
        return regex.test(senha)
    }

    let tela_Senha=()=>{
        this.nome = input.value
        a.innerHTML = '<br/><input type="text" id="input_2">'
        let input_2 = document.querySelector('#input_2')
        let cx_dados_nomes = input_2.value
        input_2.style.left = '1.7%';

        

        msg.textContent = 'Só falta a sua senha:';
        input.type = 'password'
        input_2.type = 'password'
        input.placeholder = 'Insira aqui sua senha';
        input_2.placeholder = 'confirme aqui a sua senha'
        a.innerHTML += '<div id="aviso_anim"><a id="aviso1">Sua senha deve conter:</a><a id="aviso2">•8+ Caracteres</a><br/><a id="aviso3">•Maiúsculas</a><br/><a id="aviso4">•Números</a></div>'
        a.innerHTML += '<a id="olho_aberto"><img src="icons/oculto.png" id="olho" alt="exibir senha"></a>'
        const olho_aberto = document.querySelector('#olho_aberto')

        
        q_click = 3
        olho_aberto.addEventListener('click', ()=>{
            olho_img()
            
        })
        input.value = ''
    }

    let tela_nome=()=>{
        this.email = input.value
    msg.textContent = 'Como quer ser chamado?';
    input.placeholder = 'Insira aqui seu nome de perfil';
    input.value = ''
    document.querySelector('#possui_conta').textContent = ''
    q_click = true
    }

    let tela_confirm=()=>{
        msg.textContent = 'Você está cadastrado!'
        a.innerHTML = `<p id = 'redr'>Você será redirecionado em breve</p>`
        input.remove()
        btn_proximo.remove()
        document.querySelector('#possui_conta').innerHTML = 'Não foi redirecionado?<a href="http://127.0.0.1:5500/Projetos/Tela%20de%20login/login.html" id="login"> Login</a>'
        setTimeout(()=>{
            window.location.href='http://127.0.0.1:5500/Projetos/Tela%20de%20login/login.html' 
        }, 3000)
    }

    function olho_img(){
        if(q_click == 3 ){
            olho_aberto.innerHTML = '<img src="icons/aparente.png" id="olho" alt="exibir senha">'
            input.type = 'text'
            q_click = true
        } else {
            q_click = 3
            olho_aberto.innerHTML ='<img src="icons/oculto.png" id="olho" alt="exibir senha">'
            input.type = 'password'
        }
        
    }

btn_proximo.addEventListener('click', ()=>{
    if (erro_email(input.value) && q_click == false){
        tela_nome()
    } else if (erro_nome(input.value) && q_click == true){
        tela_Senha()
    } else if (erro_senhas(document.querySelector('#input_2').value) && erro_senhas(input.value) && input.value == document.querySelector('#input_2').value) {
        this.senha = input.value
        tela_confirm()
    }
    
    document.querySelector('#txt_email').addEventListener('click', ()=>{
        a.appendChild(input)
        input.id = 'input'
        input.placeholder = 'Insira aqui o seu Email'
        input.type = 'text'
        input.value = ''
        a.innerHTML = ''
        msg.textContent = 'Nos informe seu Email:'
        q_click = 5
    })
})