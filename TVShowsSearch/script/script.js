"use strict";
async function getTvShow() {
}
async function tvShowData() {
    let data = await getTvShow();
    let result = document.getElementById('resultSearch');
    result.innerHTML = '';
    result.innerHTML = `
    <img width="200px" src="${data}" alt="${data}">
    <p><b>Nome:</b> ${data}</p>
    `;
}
