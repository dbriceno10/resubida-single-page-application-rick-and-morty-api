import getHash from "../utils/getHash"
import getData from "../utils/getData"
const Character = async () => {
  const id = getHash()
  const character = await getData(id)
    const view = `
      <div class="characters-inner">
        <article class="characters-card">
          <img src="${character.image}" alt="${character.name}" tittle="${character.name}">
          <h2>${character.name}</h2>
        </article>
        <article class="characters-card">
          <h3><span class="Bold">Episodes:</span> <span>${character.episode.length}</span></h3>
          <h3><span class="Bold">Status:</span> <span>${character.status}</span></h3>
          <h3><span class="Bold">Species:</span> <span>${character.species}</span></h3>
          <h3><span class="Bold">Gender:</span> <span>${character.gender}</span></h3>
          <h3><span class="Bold">Origin:</span> <span>${character.origin.name}</span></h3>
          <h3><span class="Bold">Last Location:</span> ${character.location.name}</h3>
        </article>
      </div>
      `
    return view
}

export default Character