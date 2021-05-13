// const resolveRoutes = (route) => {
//     if(route.length <= 3) {//si route = /, si no es igual a un id
//         let validRoute = route === "/" ? route : "/:id"
//         return validRoute
//     }
//     return `/${route}`//retorna about, algo que no va a cumplir con las características anteriores
// }

// export default resolveRoutes

const resolveRoutes = (route) => {
    if(route!= "about") {
        if(route === "/") {
            return route
        } else if(route.length <= 3) {
            return "/:id"
        } else if(route.includes("page")) {
            //return "/:pages"
            return `/:pages`
        }
    }
    console.log(`La ruta actual es: ${route}`)
    return `/${route}`
}

export default resolveRoutes