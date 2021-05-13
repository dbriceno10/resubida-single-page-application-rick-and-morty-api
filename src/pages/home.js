import getData from "../utils/getData"
import getHash from "../utils/getHash"
const home = async () => {
    const page = await getHash()
    //localStorage.setItem("page", page)
    console.log("página actual " + page)
    //const item = localStorage.getItem("page")
    const characters = await getData(page)
    console.log(characters)
    const view = `
        <div class="characters">
            ${characters.results.map(character => `
                <article class="character-item">
                    <a href="#/${character.id}/">
                        <img class="perfil-image" src="${character.image}" alt="${character.name}" tittle="name:${character.name} id:${character.id}">
                        <h2 class="perfil-name" >${character.name}</h2>
                    </a>
                </article>
            `).join("")}
        </div>
    `
    return view
}

export default home