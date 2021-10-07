# 01 Nodejs
* Para el desarrollo del backend del proyecto Scouting se utilizó el entorno de ejecución [Node.js](https://nodejs.org/en/)

## ¿Qué es Nodejs?
![logo nodejs](https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg)

[https://nodejs.org/es/about/](https://nodejs.org/es/about/)

Es un entorno de ejecución de JavaScript orientado a eventos asíncronos, Node.js está diseñado para crear aplicaciones network escalables. 

## Caracteristicas

* Asíncrono y controlado por eventos: todas las API de la biblioteca Node.js son asíncronas, es decir, sin bloqueo. Esencialmente significa que un servidor basado en Node.js nunca espera que una API devuelva datos. El servidor pasa a la siguiente API después de llamarlo y un mecanismo de notificación de Events of Node.js ayuda al servidor a obtener una respuesta de la llamada API anterior.

* Muy rápido: al estar construido en el motor JavaScript V8 de Google Chrome, la biblioteca Node.js es muy rápida en la ejecución de código.

* Sin almacenamiento en búfer: las aplicaciones Node.js nunca almacenan en búfer ningún dato. Estas aplicaciones simplemente generan los datos en fragmentos.

* Procesos en un solo hilo pero altamente escalable: Node.js utiliza un modelo de una solo hilo con bucle de eventos. El mecanismo de eventos ayuda al servidor a responder sin bloqueos y hace que el servidor sea altamente escalable en comparación con los servidores tradicionales que crean hilos limitados para manejar las solicitudes. Node.js utiliza un solo programa de subprocesos y el mismo programa puede proporcionar servicio a un número mucho mayor de solicitudes que los servidores tradicionales como el Servidor Apache HTTP.

* Licencia basada en código abierto − Node.js se distribuye gracias a una licencia MIT.

[Info](https://ifgeekthen.everis.com/es/que-es-node-js-y-primeros-pasos)
