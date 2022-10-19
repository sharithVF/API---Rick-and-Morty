const URL = "https://rickandmortyapi.com/api/character/?name="
const search = document.getElementById("search");
const container = document.getElementById("container");

window.addEventListener('DOMContentLoaded', () => {
    let URL = 'https://rickandmortyapi.com/api/character';
    dataRequest(URL)
})

search.addEventListener("keyup", () => {
    let URLCharacter = `https://rickandmortyapi.com/api/character/?name=${search.value}`
    dataRequest(URLCharacter);
});

function dataRequest(URL){
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        container.textContent = (null);
        data.results.map(character => createCharacter(character));
    });
}

function createCharacter(character) {
    const img = document.createElement("img");
    img.src = character.image;
    img.setAttribute('alt', character.name);
    img.classList = "img";
    
    const h2 = document.createElement("h2");
    h2.textContent = character.name;
    h2.classList = "characterName";

    const p = document.createElement("p");
    p.textContent = character.status;
    p.classList = "status";

    const divTexts = document.createElement("divTexts");
    divTexts.classList = "divTexts";

    const div = document.createElement("div");
    div.classList = "divCards";
    
    div.appendChild(img);
    divTexts.appendChild(h2);
    divTexts.appendChild(p);
    div.appendChild(divTexts);
    container.appendChild(div);
}