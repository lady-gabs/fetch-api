"use strict";
function validatePokemon(pokemon) {
    return Number(pokemon) === 0 ? false : true;
}
async function getPokemon() {
    let pokemon = document.getElementById('pokedexInput').value;
    try {
        if (!validatePokemon(pokemon)) {
            throw new Error("Insira um pokémon!");
        }
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (response.status !== 200) {
            throw new Error("Request failed.");
        }
        const result = await response.json();
        return result;
    }
    catch (error) {
        alert(error);
    }
}
async function pokedexData() {
    let data = await getPokemon();
    let result = document.getElementById('resultSearch');
    result.innerHTML = '';
    result.innerHTML = `
    <p><b>Nome:</b> ${capitalizeFirstLetter(data.species.name)}</p>
    <p><b>Número Pokedex:</b> ${data.id}</p>
    <img width="200px" src="${data.sprites.other["official-artwork"].front_default}" alt="${data.species.name}">
    `;
}
function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.substring(1);
}
