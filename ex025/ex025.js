var cadastro = []
cadastro = JSON.parse(localStorage.getItem('bdcadastro'))
if (cadastro == null) {
    cadastro = []
}
console.log(cadastro);
MostrarUsuarios()

function login() {
    var inp = document.getElementById('nome').value
    var inp2 = document.getElementById('usuario').value
    var inp3 = document.getElementById('senha').value
    var inp4 = document.getElementById('confsenha').value

    var cadastrar = {
        Nome: inp,
        usuario: inp2,
        senha: inp3,
        confsenha: inp4
    }

    if (inp == '', inp2 == '', inp3 == '', inp4 == '') {
        return
    }


    if (inp3 != inp4) {
        alert('Senhas não coencidem')
        return
    }

    cadastro.push(cadastrar)
    localStorage.setItem('bdcadastro', JSON.stringify(cadastro))

    MostrarUsuarios()

    alert('Cadastro efetuado')
    //window.location.href = 'ex024/ex024.html'

}

function MostrarUsuarios() {
    document.getElementById("resultado").innerHTML = ''
    cadastro.forEach((item, pos) => {      

        document.getElementById("resultado").innerHTML +=
            `<div>
                <p>Nome: ${item.Nome} - Usuário: ${item.usuario} 
                <img src='excluir.svg' onclick= 'excluirUsuario(${pos})' ></p>
         </div>`
    })


}

function excluirUsuario(pos) {
    if (confirm('Deseja realmente excluir este usuário?')) {
        cadastro.splice(pos, 1)
        localStorage.setItem('bdcadastro', JSON.stringify(cadastro))
        MostrarUsuarios()
    }
}
