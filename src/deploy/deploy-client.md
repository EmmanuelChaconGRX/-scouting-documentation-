# 01 Cliente

A continuación se detallaran los pasos necesarios para el despliegue de la aplicación Scouting del lado del cliente.

## Configuración

1. Dentro del directorio `scouting-client` ejecutamos el comando `npm run build`.

```
npm run build
```
Esto creará una carpeta `dist` en el directorio de su proyecto.

 <img :src="$withBase('/img/client/03.png')">

2. Ingresamos al directorio `dist` creado anteriormente y ejecutamos.
```
aws s3 sync . s3://example-scoutingapp
```

Ese comando sincroniza directorios y prefijos S3. Copia de forma recursiva archivos nuevos y actualizados del directorio de origen al destino. Solo crea carpetas en el destino si contienen uno o más archivos.

Más información:

[https://docs.aws.amazon.com/cli/latest/reference/s3/sync.html](https://docs.aws.amazon.com/cli/latest/reference/s3/sync.html)


