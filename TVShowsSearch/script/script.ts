async function getTvShow() {
    
}

async function tvShowData() {
    let data: any = await getTvShow();
    let result: HTMLElement = document.getElementById('resultSearch') as HTMLDivElement;

    result.innerHTML = '';
    result.innerHTML = `
    <img width="200px" src="${data}" alt="${data}">
    <p><b>Nome:</b> ${data}</p>
    `;
}