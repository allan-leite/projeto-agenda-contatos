const form = document.getElementById('form-agenda')
const nomes = []
const numerosTelefone = []
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('name');
    const inputNumeroContato = document.getElementById('phone')

    if (nomes.includes(inputNomeContato.value)){
        alert(`O nome ${inputNomeContato.value} já foi inserido`);
    } else if(numerosTelefone.includes(inputNumeroContato.value)){
        alert(`O numero ${inputNumeroContato.value} já foi inserido`)
    }else {
        nomes.push(inputNomeContato.value);
        numerosTelefone.push(inputNumeroContato.value);

        let linha = '<tr>'
        linha += `<td>${inputNomeContato.value}</td>`
        linha += `<td>${inputNumeroContato.value}</td>`
        linha += '</tr>'

        linhas += linha
    }

    inputNomeContato.value = ''
    inputNumeroContato.value = ''
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}