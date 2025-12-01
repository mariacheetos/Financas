document.getElementById("formcadastro").addEventListener("submit", function (event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var data = document.getElementById("data").value;
    var salario = document.getElementById("salario").value;
    var valor = document.getElementById("valor").value;

    var pessoa = { nome: nome, data: data, salario: salario }

    var lista_pessoas = JSON.parse(localStorage.getItem('relacaopessoas')) || []
    lista_pessoas.push(pessoa)
    localStorage.setItem('relacaopessoas', JSON.stringify(lista_pessoas))
    document.getElementById('formcadastro').reset()
    exibir_pessoas()
})

function exibir_pessoas() {
    var lista_pessoas = JSON.parse(localStorage.getItem('relacaopessoas')) || []
    var output = document.getElementById('output')
    output.innerHTML = ''
    for (let i = 0; i < lista_pessoas.length; i++) {
        let li = document.createElement('li')
        li.textContent = 'Nome: ' + lista_pessoas[i].nome + ' Data: ' + lista_pessoas[i].data + ' Salário: ' + lista_pessoas[i].salario + 
        ' Despesas: ' + lista_pessoas[i].valor;
        output.appendChild(li)
    }

}