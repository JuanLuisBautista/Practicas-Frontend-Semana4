const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("pikachu-llorando.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            let name = data.forms[0].name;
            let tipo = data.types[0].type.name;
            document.getElementById('Name').innerHTML = name.toUpperCase();
            document.getElementById('tipo').innerHTML = tipo.toUpperCase();
            let stats = [];
            for(let i = 0;i < 6; i++){
                stats[i] = data.stats[i].base_stat;
            }
            let moves = [];
            for(let i = 0;i < 10; i++){
                moves[i] = data.moves[i].move.name;
            }
            for(let i = 0;i < 10; i++){
                let movimiento = 'move'+i;
                document.getElementById(movimiento).innerHTML=moves[i];
            }
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}


