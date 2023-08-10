# todo_list-Aplicación TODO List con Angular, Node.js y Express
Esta es una aplicación simple de lista de tareas (TODO List) desarrollada utilizando las tecnologías Angular, Node.js y Express. La aplicación permite a los usuarios crear, leer, actualizar y eliminar tareas en una lista.

## Características
Crear Tareas: Los usuarios pueden agregar nuevas tareas a la lista especificando un título y una descripción.
Lista de Tareas: Se muestra una lista de todas las tareas existentes con sus títulos y descripciones.
Actualizar Estado: Los usuarios pueden marcar las tareas como completadas o pendientes.
Eliminar Tareas: Las tareas completadas o no deseadas se pueden eliminar de la lista.

## Tecnologías Utilizadas
Angular: Se utiliza para crear la interfaz de usuario interactiva de la aplicación.
Node.js: Proporciona el entorno de ejecución del lado del servidor para gestionar las solicitudes y respuestas.
Express: Un marco de aplicación web de Node.js que simplifica la creación de API y el manejo de rutas.

## Estructura del Proyecto
El proyecto se organiza en dos directorios principales: frontend, con Angular y backend, con node.js y express.

## Frontend
src: Contiene los archivos de código fuente de la aplicación Angular.
app: Contiene componentes, servicios y otros elementos de la aplicación.
assets: Contiene archivos estáticos como imágenes y estilos.

### Características
Interfaz de Usuario Intuitiva: El frontend está diseñado con una interfaz de usuario amigable y moderna que facilita la gestión de tus tareas.
Creación de Tareas: Agrega fácilmente nuevas tareas con sus detalles correspondientes, como título, descripción y fecha de vencimiento.
Lista de Tareas: Visualiza todas tus tareas pendientes de un vistazo, mostrando información clave para mantener el control.
Marcar como Completada: Marca las tareas completadas para mantener un registro claro de lo que has logrado.
Filtrado y Búsqueda: Filtra las tareas según su estado (pendiente/completado) o busca tareas específicas por título o descripción.
Actualización en Tiempo Real: La aplicación actualiza la lista de tareas en tiempo real, lo que garantiza que siempre estés viendo la información más reciente.

### Requisitos Previos
Antes de comenzar a utilizar el frontend de la aplicación, asegúrate de tener lo siguiente instalado:

Node.js y npm: Necesarios para ejecutar y gestionar las dependencias de la aplicación.
Angular CLI: Herramienta de línea de comandos para crear, construir y desplegar proyectos Angular.
Inicio Rápido
Clonar el Repositorio: Clona este repositorio en tu máquina local utilizando el comando:

bash
Copy code
git clone <URL-del-repositorio>
Instalar Dependencias: Navega hasta el directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias:

bash
Copy code
cd todo-list-frontend
npm install
Iniciar el Servidor de Desarrollo: Utiliza el siguiente comando para iniciar el servidor de desarrollo:

Copy code
ng serve
Esto iniciará la aplicación y estará disponible en http://localhost:4200.

Explora y Utiliza: Abre tu navegador web y navega a http://localhost:4200 para acceder a la aplicación Todo List. ¡Comienza a agregar, gestionar y completar tus tareas!

### Personalización
Si deseas personalizar la apariencia, el comportamiento o agregar nuevas funcionalidades a la aplicación, puedes explorar y editar los archivos en el directorio src/app. Asegúrate de tener un buen conocimiento de Angular y sus componentes antes de realizar cambios significativos.

Contribución
Si deseas contribuir a este proyecto, ¡serás bienvenido! Puedes enviar pull requests con tus mejoras, correcciones de errores o nuevas características. Asegúrate de seguir las mejores prácticas de desarrollo y documentación de Angular.

Soporte
Si encuentras algún problema, tienes preguntas o necesitas ayuda, no dudes en crear un issue en el repositorio o contactar a nuestro equipo de soporte en support@example.com.

¡Esperamos que disfrutes utilizando nuestra aplicación Todo List desarrollada con Angular! ¡Mantén tus tareas bajo control y sé más productivo que nunca!

## Backend
src: Contiene los archivos de código fuente del servidor Node.js y Express.
routes: Define las rutas y controladores de la API.
models: Define los modelos de datos utilizados en la aplicación.
app.js: Punto de entrada de la aplicación Express.

### Requisitos Previos
Asegúrate de tener instalados los siguientes elementos antes de ejecutar el backend:
Node.js: Descargar e Instalar Node.js
npm (Node Package Manager): Esto viene incluido con la instalación de Node.js.

### Instalación
Clona este repositorio en tu máquina local o descárgalo como archivo ZIP.
Abre una terminal y navega hasta la carpeta del proyecto.
Ejecuta el siguiente comando para instalar las dependencias:
bash (suele no funcionar en la bash asi que ejecuta tu terminal como administrador)
Copy code
npm install

### Configuración
Antes de ejecutar el backend, debes configurar algunas variables de entorno en un archivo .env. Copia el archivo .env.example proporcionado en el proyecto y renómbralo como .env. Luego, ajusta los valores según tus necesidades:
dotenv
Copy code
PORT=3000  # El puerto en el que se ejecutará el servidor
DB_URI=mongodb://localhost/todo-list  # URI de la base de datos MongoDB

### Uso
Una vez que las dependencias estén instaladas y la configuración esté completa, puedes iniciar el servidor backend con el siguiente comando:
bash (suele no funcionar en la bash asi que ejecuta tu terminal como administrador)
Copy code
npm start
El servidor se ejecutará en el puerto especificado en el archivo .env.

### API Endpoints
El backend expone los siguientes endpoints para administrar la lista de tareas:

GET /tasks: Obtener todas las tareas.
POST /tasks: Crear una nueva tarea.
GET /tasks/:taskId: Obtener detalles de una tarea específica.
PUT /tasks/:taskId: Actualizar una tarea existente.
DELETE /tasks/:taskId: Eliminar una tarea.
Las respuestas del servidor estarán en formato JSON y contendrán información sobre el éxito de la operación o los errores que puedan ocurrir.

contactame aqui: valenciamafe651@gmail.com
