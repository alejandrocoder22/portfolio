import proyectOneImage from '../images/proyect-1.png'

const proyects = [
  {
    id: 1,
    title: 'Stock App',
    imgUrl: proyectOneImage,
    imgUrlLarge: proyectOneImage,
    githubUrl: '',
    webUrl: 'https://centralserverapi.com',
    objetive: 'Crear una aplicación versátil para facilitar el control y valoración de empresas',
    techs: ['React', 'PostgreSQL', 'Express', 'Puppeteer'],
    functions: ['CRUD con todos los datos de las empresas', 'Scrapeo de datos que no proporcionan las APIS', 'Sistema de login con token', 'Automatización con CRON del precio a las 22:00 de lunes a viernes', 'Información extra individual de cada valor con datos visuales']
  }
]

export default proyects
