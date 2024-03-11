"use strict";
function validateCep(cepUser) {
    if (isNaN(Number(cepUser)) || Number(cepUser) === 0) {
        return false;
    }
    else {
        return true;
    }
}
function getCep() {
    let cepUser = document.getElementById('cep').value;
    let url = 'https://api.postmon.com.br/v1/cep/' + cepUser;
    if (!validateCep(cepUser)) {
        console.log('Erro');
        return 'erro';
    }
    else {
        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.send();
        // fazer verificação de status (404, 500,...)
        return request.responseText;
    }
}
function cepData() {
    let data = getCep();
    console.log(data);
}
