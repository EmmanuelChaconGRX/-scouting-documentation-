# 03 Estructura del proyecto

## Arbol de directorios (Backend)


```
.
├── .babelrc
├── .env
├── .gitignore
├── node_modules
├── package.json
├── package-lock.json
└── src
    ├── app.js
    ├── controllers
    │   ├── allDataController.js
    │   ├── athleteController.js
    │   ├── generalController.js
    │   ├── noteController.js
    │   ├── scoutController.js
    │   ├── teamSheetController.js
    │   └── userController.js
    ├── database
    │   ├── database_conection.js
    │   ├── db.sql
    │   ├── resetDB.sh
    │   └── scripts
    │       └── changes
    │           ├── 02-03-2021
    │           │   └── 1_create_table_match-request.sql
    │           ├── 02-08-2021
    │           │   ├── 1_create_table_note.sql
    │           │   ├── 2_alter_table_match-request.sql
    │           │   └── 3_create_table_team-sheet.sql
    │           ├── 02-15-2021
    │           │   ├── 1_create_table_observation-team.sql
    │           │   ├── 2_create_table_observation-athlete.sql
    │           │   └── 3_create_table_player-match-details.sql
    │           ├── 02-22-2021
    │           │   ├── 1_alter_table_athlete.sql
    │           │   ├── 2_create_table_sport.sql
    │           │   └── 3_create_table_athlete-sport.sql
    │           ├── 03-12-2021
    │           │   └── 1_create_table_scout-lineaup.sql
    │           ├── 03-31-2021
    │           │   ├── 1_create_table_sport-label.sql
    │           │   ├── 2_create_table_athlete-sport-label.sql
    │           │   └── 3_create_table_athlete-label-range.sql
    │           ├── 04-07-2021
    │           │   ├── 1_create_table_custom-label.sql
    │           │   ├── 2_create_table_athlete-custom-label.sql
    │           │   ├── 3_alter_table_athlete-sport-label.sql
    │           │   ├── 4_rename_table_athlete-label-range.sql
    │           │   └── 5_create_table_range-athlete-custom-label.sql
    │           ├── 04-13-2021
    │           │   ├── 10_rename_table_custom_label.sql
    │           │   ├── 1_create_table_scout-sport.sql
    │           │   ├── 2_create_table_scout-selected -sport-label.sql
    │           │   ├── 3_create_table_range-scout-sport-label.sql
    │           │   ├── 5_create_table_scout-created-custom-label.sql
    │           │   ├── 6_create_table_scout-selected-custom-label.sql
    │           │   ├── 7_create_table_range-scout-custom-label.sql
    │           │   ├── 8_rename_table_athlete-sport-label.sql
    │           │   └── 9_rename_table_athlete_custom_label.sql
    │           ├── 04-20-2021
    │           │   ├── 1_create_table_club-sport.sql
    │           │   ├── 2_create_table_club-selected-sport-label.sql
    │           │   ├── 3_create_table_range-club-sport-label.sql
    │           │   ├── 5_create_table_club-created-custom-label.sql
    │           │   ├── 6_create_table_club-selected-custom-label.sql
    │           │   └── 7_create_table_range-club-custom-label.sql
    │           ├── 04-28-2021
    │           │   ├── 1_create_table_user-created-custom-label.sql
    │           │   ├── 2_create_table_user-selected-custom-label.sql
    │           │   └── 3_created_table_range_user_custom_label.sql
    │           ├── 05-05-2021
    │           │   └── alter_table_user-created-custom-label.sql
    │           ├── 05-13-2021
    │           │   └── alter_table_athlete.sql
    │           └── 05-19-2021
    │               └── 1_create_table_scout_match_report.sql
    ├── lib
    │   ├── aws.js
    │   └── cloudinary.js
    ├── middlewares
    │   └── autentication.js
    ├── models
    ├── public
    │   ├── avatar
    │   ├── index.html
    │   └── uploads
    ├── routes
    │   ├── allData.routes.js
    │   ├── athlete.routes.js
    │   ├── general.routes.js
    │   ├── note.routes.js
    │   ├── scout.routes.js
    │   ├── teamSheet.routes.js
    │   └── user.routes.js
    └── services

27 directories, 67 files
```

## Detalles


| File / Dir      | Meaning |
| ----------- | ----------- |
| `.babelrc`    | Fichero de configuración de Babel, transpilador de Javascript. |
| `.gitignore`    | Fichero que indica los archivos que Git debe ignorar al hacer el versionado. |
| `.env`    | Variables de entorno del proyecto. |
| `package.json`    | El fichero package.json son los que utiliza NPM para crear y gestionar una aplicación o proyecto y sus dependencias |
| `node_modules`    | En esta carpeta se almacenan todos los paquetes que necesita el proyecto para funcionar. |
| `/src`    | En esta carpeta se almacena el código fuente del proyecto |
| `/src/app.js `  | Es el archivo para crear el servidor web con NodeJS, contiene la configuración de express entre otros. En el también se importan y cargan las rutas después de crearlas. |
| `/src/controllers`   |  Carpeta que contiene todos los controladores del proyecto que sirve para crear las acciones y operaciones sobre la base de datos, |
| `/src/controllers/athleteController.js`   | Fichero que contiene los servicios necesarios para un usuario de tipo atleta  |
| `/src/controllers/scoutController.js`   | Fichero que contiene los servicios necesarios para un usuario de tipo scout  |
| `/src/controllers/userController.js`   | Fichero que contiene los servicios necesarios para un usuario de tipo club, ademas de los servicios de login y registro de usuario  |
| `/src/controllers/generalController.js`   | Fichero que contiene algunos servicios generales usados tanto por usuarios de tipo atleta, scout y club  |
| `/src/controllers/allDataController.js`   | Fichero que contiene los servicios referentes a la funcion `all data` de la sección `match` |
| `/src/controllers/noteController.js`   | Fichero que contiene los servicios referentes a la funcion `quick notes` de la sección `match` |
| `/src/controllers/teamSheetController.js`   | Fichero que contiene los servicios referentes a la funcion `team sheet` de la sección `match` |
| `/src/database`   | Carpeta que contiene ficheros relacionados con la configuración de la base de datos postgresql.  |
| `/src/database/db.sql`   | Script inicial que contiene la creación de la base de datos y las tablas iniciales del poryecto (es el primer script a ejecutar)  |
| `/src/database/database_conection.js`   | Fichero donde se setean las credenciales necesarias para la conexión con la base de datos postgresql ya sea local o de producción, dichas credenciales deben ser definidas en el archivo `.env` en la raiz del proyecto.    |
| `/src/database/scripts/changes`   | Carpeta que contiene todos los scripts del proyecto los cuales deben ejecutarse de forma secuencial.  |
| `/src/lib/aws`   | Fichero donde se setean las credenciales necesarias para la conexión con el bucket de AWS que es donde se almacenan las imagenes, videos del proyecto, dichas credenciales deben ser definidas en el archivo `.env` en la raiz del proyecto.  |
| `/src/middlewares/autentication.js`   |  |






