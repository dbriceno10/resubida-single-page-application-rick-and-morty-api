import getData from "../utils/getData"

const footer = async () => {
    const data = await getData()
    let pg = []
    for(let i = 1; i<= data.info.pages; i++) {
        pg.push(i)
    }
    let count = 0
    const view = `
        <footer class"Footer-pages">
            <h4 class="page-target">Pages</h4>
            <div>
                ${pg.map(() => 
                    `<a class="ancla" href="#/?page=${++count}">${count}${" "}</a>`
                ).join("")}
            </div>
        </footer>
    `
    return view
}

export default footer