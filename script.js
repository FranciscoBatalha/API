// Função para buscar o CEP
function buscarCEP() {
    var cep = document.getElementById("input").value;

    // Verifica se o campo do CEP foi preenchido
    if (cep.trim() === "") {
        alert("Digite um CEP válido.");
        return;
    }

    // URL da requisição ao ViaCEP
    var url = 'https://viacep.com.br/ws/' + cep + '/json/';

    // Realiza a requisição AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var endereco = JSON.parse(xhr.responseText);

            if (endereco.erro) {
                alert("CEP não encontrado.");
                return;
            }

            // Preenche os campos com os dados do endereço
            document.getElementById("logradouro").innerText = endereco.logradouro;
            document.getElementById("bairro").innerText = endereco.bairro;
            document.getElementById("cidade").innerText = endereco.localidade;
            document.getElementById("estado").innerText = endereco.uf;

            // Exibe a div de resultado
            document.getElementById("Resultado").style.display = "block";
        }
    };
    xhr.send();
}

// Adiciona o evento de clique ao botão
document.getElementById("button").addEventListener("click", buscarCEP);

