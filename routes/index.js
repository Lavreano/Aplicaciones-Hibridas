// Importamos los Routers 
import usuariosRoute from './usuariosRoute.js'
import empresasRoute from './empresasRoute.js'
import colaboracionesRoute from './colaboracionesRoute.js'
import categoriasRoute from './categoriasRoute.js'

// Está funcion recibe la app como parámetro de entrada

export function routerAPI(router){
	// Definimos los endPoints
    router.use('/usuarios', usuariosRoute);
    router.use('/empresas', empresasRoute);
    router.use('/colaboraciones', colaboracionesRoute);
    router.use('/categorias', categoriasRoute);
}