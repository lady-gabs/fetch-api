"use strict";
function validateCep(cepUser) {
    let regex = /^[0-9]{8}$/;
    if (isNaN(Number(cepUser)) || Number(cepUser) === 0 || !regex.test(cepUser)) {
        return false;
    }
    else {
        return true;
    }
}
function getCep() {
    let cepUser = document.getElementById('cep').value;
    let url = 'https://api.postmon.com.br/v1/cep/' + cepUser;
    let request = new XMLHttpRequest();
    try {
        if (!validateCep(cepUser)) {
            throw new Error("CEP inválido.");
        }
        request.open("GET", url, false);
        request.send();
        if (request.status !== 200) {
            throw new Error("Request failed.");
        }
        return request.responseText;
    }
    catch (error) {
        alert(error);
    }
}
function cepData() {
    let data = getCep();
    let result = document.getElementById('resultSearch');
    result.innerHTML = '';
    data = JSON.parse(data);
    result.innerHTML = `
    <p>Cidade: ${data.cidade}</p>
    <p>Estado: ${data.estado_info.nome}</p>
    <p>Logradouro: ${data.logradouro}</p>
    <p>Bairro: ${data.bairro}</p>
    <p>Complemento: ${data.complemento}</p>
    `;
}
