import header from "../templates/header"
import home from "../pages/home"
import Character from "../pages/character"
import error404 from "../pages/error404"
import getHash from "../utils/getHash"
import resolveRoutes from "../utils/resolveRoutes"
import footer from "../templates/footer"
const routes = {
    "/": home,
    "/:id": Character,
    "/contact": "Contact",
    "/:pages": home,
}

const router = async () => {
    const Header = null || document.getElementById("header")
    const Content = null || document.getElementById("content")
    const Footer = null || document.getElementById("footer")

    Header.innerHTML = await header()
    Footer.innerHTML = await footer()
    let hash = getHash()
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route] : error404 //si obtenemos routes[route], es decir existe una ruta, la mostramos, si no, mostramos el Error404
    Content.innerHTML = await render()
}

export default router