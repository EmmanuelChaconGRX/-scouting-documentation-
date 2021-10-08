# 04 Estructura del proyecto

## Arbol de directorios (Front-end)

```
.
├── babel.config.js
├── node_modules
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   └── index.html
├── README.md
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   │   └── style.css
│   │   ├── grass.png
│   │   ├── img
│   │   │   ├── analytics.png
│   │   │   ├── athlete_avatar.png
│   │   │   ├── bsa_logo.png
│   │   │   ├── fitbit.png
│   │   │   ├── graphic1.png
│   │   │   ├── graphic2.png
│   │   │   ├── graphic3.png
│   │   │   ├── graphic4.png
│   │   │   ├── graphic5.png
│   │   │   ├── match.png
│   │   │   ├── profile_avatar.png
│   │   │   ├── table_compare.png
│   │   │   └── team_avatar.png
│   │   ├── logo.png
│   │   └── logo.svg
│   ├── components
│   │   ├── Athlete
│   │   │   └── Dashboard_athlete.vue
│   │   ├── Club
│   │   │   └── Dashboard_club.vue
│   │   ├── HelloWorld.vue
│   │   ├── index.js
│   │   ├── Login.vue
│   │   ├── Register.vue
│   │   ├── Scout
│   │   │   └── Dashboard_scout.vue
│   │   ├── vue-soccer-field.scss
│   │   └── vue-soccer-field.vue
│   ├── enums
│   │   ├── orientation.js
│   │   └── system.js
│   ├── main.js
│   ├── plugins
│   │   └── vuetify.js
│   ├── router
│   │   └── index.js
│   ├── store
│   │   └── index.js
│   └── views
│       ├── About.vue
│       ├── Athletes-club-list.vue
│       ├── Athletes-list.vue
│       ├── Athletes-scout-list.vue
│       ├── Club-athlete-dashboard.vue
│       ├── Home.vue
│       ├── Match.vue
│       ├── Scout-athlete-dashboard.vue
│       ├── Team-club-list.vue
│       └── Team-club.vue
└── vue.config.js

15 directories, 50 files
```

## Detalles

| File / Dir      | Meaning |
| ----------- | ----------- |
| `babel.config.js`    | Fichero de configuración de Babel, transpilador de Javascript. |
| `.gitignore`    | Fichero que indica los archivos que Git debe ignorar al hacer el versionado. |
| `.env`    | Variables de entorno del proyecto. |
| `package.json`    | El fichero package.json son los que utiliza NPM para crear y gestionar una aplicación o proyecto y sus dependencias |
| `node_modules`    | En esta carpeta se almacenan todos los paquetes que necesita el proyecto para funcionar. |
| `/src`    | En esta carpeta se almacena el código fuente del proyecto |
| `/src/assets `  | Estilos, Imagenes del proyecto. |
| `/src/components`   | Componentes del proyecto |
| `/src/components/Register.vue`   | Componente que contiene el código fuente referente al registro de ususario del proyecto  |
| `/src/components/Login.vue`   | Componente que contiene el código fuente referente al login de usuario del proyecto  |
| `/src/components/vue-soccer-field.vue`   | Componente que contiene el código fuente referente al tablero (Campo de juego) de la sección match |
| `/src/components/vue-soccer-field.scss`   | Archivo de estilos referente al tablero (Campo de juego) de la sección match |
| `/src/components/enums`   | Carpeta que contiene archivos sobre la orientación del tablero de campo de juego y el sistema de alineaciones |
| `/src/components/Athlete`   | Carpeta que contiene todos los componenentes referentes a un usuario tipo Athlete. |
| `/src/components/Athlete/Dashboard_athlete.vue`   | Componente que contiene el código fuente referente al Dashboard inicial de un usuario tipo Atleta |
| `/src/components/Athlete/Dashboard_club.vue`   | Componente que contiene el código fuente referente al Dashboard inicial de un usuario tipo Club |
| `/src/components/Athlete/Dashboard_scout.vue`   | Componente que contiene el código fuente referente al Dashboard inicial de un usuario tipo Scout |
| `/src/plugins/vuetify.js`   | Fichero de configuración de la libreria [vuetify](https://vuetifyjs.com/en/) donde se define la paleta de colores y otros aspectos. |
| `/src/router/index.js`   | Fichero donde se definen las rutas globales del proyecto |
| `/src/store/index.js`   | Fichero donde se encuentra el gestor o almacen de estados [Vuex](https://vuex.vuejs.org/). Las aplicaciones web de tipo SPA suelen utilizar un store o almacén donde se guarda información centralizada para que cualquier componente o parte de la aplicación pueda acceder a ella, almacenar o recuperar información y gestionarla de forma segura. |
| `/src/App.vue`   | El fichero App.vue es un fichero especial, el componente general e inicial de la aplicación, desde donde se irán cargando los demás componentes. |
| `/src/main.js`   | Se trata del fichero principal que arranca el proyecto Vue y que se insertará en la plantilla index.html que se incluye en la carpeta public/. |
| `/src/views/Athletes-club-list.vue`   | Componente que contiene el código fuente referente a la lista de atletas que puede acceder un usuario de tipo `Club` (todos los atletas, atletas independientes, atletas del club) |
| `/src/views/Athletes-scout-list.vue`   | Componente que contiene el código fuente referente a la lista de atletas que puede acceder un usuario de tipo `Scout` (todos los atletas, atletas independientes, atletas del club) |
| `/src/views/Club-athlete-dashboard.vue`   | Componente que contiene el código fuente referente al perfil de un atleta perteneciente a un club |
| `/src/views/Scout-athlete-dashboard.vue`   | Componente que contiene el código fuente referente al perfil de un atleta perteneciente a un club |
| `/src/views/Match.vue`   | Componente que contiene el código fuente referente al reporte de un partido (Match) |
| `/src/views/Team-club-list.vue` | Componente que contiene el código fuente referente a la creación y lista de equipos creados por un club |
| `/src/views/Team-club.vue` | Componente que contiene el código fuente referente al perfil de  información de un club creado por un club  |


