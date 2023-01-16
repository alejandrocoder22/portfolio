import proyectOneImage from '../images/proyect-1.jpg'
import proyectTwoImage from '../images/proyect-2.jpg'
import proyectThreeImage from '../images/proyect-3.jpg'
import proyectFourImage from '../images/proyect-4.jpg'

const proyects = [
  {
    id: 1,
    title: 'Stock App',
    imgUrl: proyectOneImage,
    imgUrlLarge: proyectOneImage,
    githubUrl: 'https://github.com/alejandrocoder22/stock-app',
    webUrl: 'https://centralserverapi.com',
    objetive: 'Crear una aplicación versátil para facilitar el control y valoración de empresas',
    techs: ['React', 'PostgreSQL', 'Express', 'Puppeteer'],
    functions: ['CRUD con todos los datos de las empresas', 'Scrapeo de datos que no proporcionan las APIS', 'Sistema de login con token', 'Automatización con CRON del precio a las 22:00 de lunes a viernes', 'Información extra individual de cada valor con datos visuales']
  },
  {
    id: 2,
    title: 'Clothes e-commerce',
    imgUrl: proyectTwoImage,
    imgUrlLarge: proyectTwoImage,
    githubUrl: 'https://github.com/alejandrocoder22/ecommerce-react',
    webUrl: 'https://ecommerce.alejandrocoder.com/',
    objetive: 'Aprender el funcionamiento de una tenda de ropa implementando la pasarela de pagos, lógica del negocio y utilizando herramientas de terceros (firebase) para hostear las imágenes.',
    techs: ['React', 'PostgreSQL', 'Express', 'Stripe', 'Firebase'],
    functions: ['Pasarela de pagos', 'Carrito de la compra', 'Panel de administrador con funciones CRUD']
  },
  {
    id: 3,
    title: 'Book Review App',
    imgUrl: proyectThreeImage,
    imgUrlLarge: proyectThreeImage,
    githubUrl: 'https://github.com/alejandrocoder22/books-reviews',
    webUrl: 'https://books.alejandrocoder.com/',
    objetive: 'Aprender a utilizar Redux',
    techs: ['React', 'PostgreSQL', 'Express', 'Redux'],
    functions: ['Funciones CRUD de usuarios y reviews de libros']
  },
  {
    id: 4,
    title: 'Images Share App',
    imgUrl: proyectFourImage,
    imgUrlLarge: proyectFourImage,
    githubUrl: 'https://github.com/alejandrocoder22/images-share-app',
    webUrl: 'https://images.alejandrocoder.com/',
    objetive: 'Aprender a gestionar archivos con multer e implementar typescript en un proyecto.',
    techs: ['React', 'PostgreSQL', 'Express', 'Multer'],
    functions: ['Alojar imágenes y compartir su enlace', 'Modo oscuro', 'Autenticacion', 'Panel de usuario con las fotos alojadas', 'Validación de tamaño y formato']
  }
]

export default proyects
