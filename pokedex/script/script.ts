async function getPokemon() {
    let pokemon: string = (document.getElementById('pokedexInput') as HTMLInputElement).value;
    try {
        if (pokemon === '') {
            throw new Error ('Insira um pokémon!');
        }

        let response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        
        if (response.status !== 200) {
            throw new Error('Request failed.');
        }
        
        let result: JSON = await response.json();
        return result;
    } catch (error) {
        alert(error);
    }
    finally {
        (document.getElementById('pokedexInput') as HTMLInputElement).value = '';
        document.getElementById('pokedexInput')?.focus();
    }
}

async function pokedexData() {
    let data: any = await getPokemon();
    let result: HTMLElement = document.getElementById('resultSearch') as HTMLDivElement;

    result.innerHTML = '';
    result.innerHTML = `
    <p id="pokemonName"><b>Nome:</b> ${data.species.name}</p>
    <p><b>Número Pokedex:</b> ${data.id}</p>
    <img width="200px" src="${data.sprites.other["official-artwork"].front_default}" alt="${data.species.name}">
    `;
}