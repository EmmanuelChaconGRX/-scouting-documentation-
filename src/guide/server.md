# 03 Scouting-serve
El lado del servidor del proyecto Scouting fué desarrollado con [Node.js](https://nodejs.org/en/)
A continuación se detallaran los pasos necesarios para configurar la aplicación Scouting del lado del servidor.


## Configuración
1. Dentro del directorio `scouting-serve` ejecutamos el comando `npm install` para la instalacion de dependencias necesarias.
```
npm install
```
2. Dentro del directorio `src/database` se encuentra el archivo `db.sql` que es un script de base de datos [postgresql](https://www.postgresql.org/) el cual debe ejecutarse en un administrador de base de datos, de esta manera se creará una base de datos local de nombre `scoutingdblocal` con unas tablas iniciales.

```sql
CREATE DATABASE scoutingdblocal;

CREATE TABLE club (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    phone VARCHAR,
    email_address VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    files VARCHAR,
    created_on TIMESTAMPTZ
);

CREATE TABLE scout (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    phone VARCHAR,
    email_address VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    files VARCHAR,
    status VARCHAR,
    associated_club_id INTEGER REFERENCES club(id),
    created_on TIMESTAMPTZ
);

CREATE TABLE team (
    id SERIAL PRIMARY KEY,
    team_name VARCHAR NOT NULL,
    league_name VARCHAR,
    files VARCHAR,
    club_id INTEGER REFERENCES club(id),
    created_on TIMESTAMPTZ
);

CREATE TABLE athlete (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    phone VARCHAR,
    email_address VARCHAR UNIQUE,
    password VARCHAR,
    height INTEGER DEFAULT 0,
    weight INTEGER DEFAULT 0,
    files VARCHAR,
    status VARCHAR,
    associated_club_id INTEGER REFERENCES club(id),
    associated_scout_id INTEGER REFERENCES scout(id),
    team_id INTEGER REFERENCES team(id),
    created_on TIMESTAMPTZ
);

CREATE TABLE invitation (
    id SERIAL PRIMARY KEY,
    message TEXT,
    club_id INTEGER REFERENCES club(id),
    scout_id INTEGER REFERENCES scout(id),
    athlete_id INTEGER REFERENCES athlete(id),
    status VARCHAR DEFAULT 'pending',
    created_on TIMESTAMPTZ,
    updated_on TIMESTAMPTZ
);

CREATE TABLE videos(
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    description VARCHAR,
    files VARCHAR NOT NULL,
    created_on TIMESTAMPTZ,
    club_id INTEGER REFERENCES club(id),
    scout_id INTEGER REFERENCES scout(id)
);

CREATE TABLE assignments(
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    last_name VARCHAR,
    description VARCHAR
);

CREATE TABLE play(
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    last_name VARCHAR,
    description VARCHAR
);

INSERT INTO assignments (name, last_name, description) VALUES ('Assignment 1', 'title assignments 1', 'This is an assignment 1'),
('Assignment 2', 'title assignments 2', 'This is an assignment 2'),
('Assignment 3', 'title assignments 3', 'This is an assignment 3'),
('Assignment 4', 'title assignments 4', 'This is an assignment 4'),
('Assignment 5', 'title assignments 5', 'This is an assignment 5');

INSERT INTO play (name, last_name, description) VALUES ('PLAY 1', 'title PLAYs 1', 'This is an PLAY 1'),
('PLAY 2', 'title PLAYs 2', 'This is an PLAY 2'),
('PLAY 3', 'title PLAYs 3', 'This is an PLAY 3'),
('PLAY 4', 'title PLAYs 4', 'This is an PLAY 4'),
('PLAY 5', 'title PLAYs 5', 'This is an PLAY 5');

```

3. Dentro del directorio `src/database/scripts/changes` encontramos varios directorios ordenados, tambien scripts dentro de cada uno de ellos, los cuales deben ejecutarse de forma secuencial.

<img :src="$withBase('/img/server/01.png')">

4. A continuación Configuramos las variables de entorno necesarias, para esto creamos el archivo `.env` en la raiz del proyecto con las configuraciones para el puerto en el cual correra el servidor, el acceso a la base de datos local o prod y los accesos al bucket de AWS que se creó para el almacenamiento de imagenes.
```
PORT=4000

###########################################################################
#DATABASE LOCAL
DEV_DB_HOST=localhost
DEV_DB_PORT=5433
DEV_DB_USERNAME=postgres
DEV_DB_PASSWORD=1234
DEV_DB_NAME=scoutingdblocal

#AWS bucket access credentials LOCAL
BUCKET=filestorage-s3
ACCESS_KEY_ID=AKIA3RTS7TFDHMS7JD4M
SECRET_ACCESS_KEY=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

############################################################################



######################################################################################

#DATABASE PROD
#DEV_DB_HOST=bsa-scout-test-db.c0mps70m1hko.ap-southeast-2.rds.amazonaws.com
#DEV_DB_PORT=4200
#DEV_DB_USERNAME=bmst
#DEV_DB_PASSWORD=843sdfDFfuhgf,fgs
#DEV_DB_NAME=scoutingdb

#AWS bucket access credentials PROD
#BUCKET=scouting-vid-img-dev-s3-sydney
#ACCESS_KEY_ID=AKIASRVFJXGK3JMG5WC7
#SECRET_ACCESS_KEY=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

######################################################################################
```

5. Ejecutamos el comando `npm run devbabel` para correr el servidor.
```
npm run devbabel
```