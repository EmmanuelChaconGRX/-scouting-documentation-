# 02 Scouting-client

A continuación se detallaran los pasos necesarios para configurar la aplicación Scouting del lado del cliente.

## Configuración
1. Dentro del directorio `scouting-client` ejecutamos el comando `npm install` para la instalacion de dependencias necesarias.
```
npm install
```

2. Una vez instaladas las dependencias configuramos las variables de entorno necesarias, para esto creamos el archivo `.env` en la raiz del proyecto con lo siguiente.
```
#LOCAL
VUE_APP_API_URL=http://localhost:4000/api

#PROD
#VUE_APP_API_URL=http://54.252.174.218:4000/api
```


3. Ejecutamos el comando `npm run serve` para correr el servidor.
```
npm run serve
```
4. Una vez iniciado el servidor ingresamos a la url `http://localhost:8080/`

 [![](/img/client/01.png)](/img/client/01.png)





