
async function buscaEndereco(cep){

    const mensagemErro = document.querySelector("#erro");
    mensagemErro.innerHTML = '';

    try{    
    const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const cepConvertido = await consultaCep.json();
        if(cepConvertido.erro){
            mensagemErro.innerHTML = "<p>Esse CEP não existe não cara.</p>";
        }

        const rua = document.querySelector("#endereco");
        const estado = document.querySelector("#estado");
        const cidade = document.querySelector("#cidade");
        const bairro = document.querySelector("#bairro");

        rua.value = cepConvertido.logradouro;
        estado.value = cepConvertido.uf;
        cidade.value = cepConvertido.localidade;
        bairro.value = cepConvertido.bairro;

        console.log(cepConvertido);
        return cepConvertido;
    }catch(erro){
        mensagemErro.innerHTML = "<p>Ops CEP inválido.</p>";
    }
}

const cep = document.querySelector("#cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

