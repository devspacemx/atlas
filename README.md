<p align="center">
<img src="https://github.com/devspacemx/atlas/blob/main/logo.png" width="200" title="Logo Atlas">
</p>

[![license](https://img.shields.io/badge/license-MIT-red)](LICENSE.md)
[![website](https://img.shields.io/badge/website-comunidades.lat-blue)](https://comunidades.lat/)
[![twitter](https://img.shields.io/twitter/follow/devspacemx?label=Twitter&style=flat&logo=twitter)](https://twitter.com/devspacemx)
[![Discord](https://img.shields.io/discord/635852899066314753?label=Discord&style=flat&logo=discord)](https://discordapp.com/invite/sJ7b9Mr)

# Atlas de comunidades tecnológicas 🌎

¡Bienvenido internauta! Este es el repositorio oficial de la plataforma Atlas de comunidades

Te damos la más cordial bienvenida, aquí puedes conocer todos los detalles detrás del proyecto Atlas y cómo colaborar para hacer más grande la plataforma.

## 📖 Índice

- [Atlas de comunidades tecnológicas 🌎](#atlas-de-comunidades-tecnológicas-)
  - [📖 Índice](#-índice)
  - [Acerca del proyecto](#acerca-del-proyecto)
  - [Requisitos](#requisitos)
  - [Comienza](#comienza)
    - [Descarga](#descarga)
    - [Ejecución](#ejecución)
  - [Contribuye](#contribuye)
  - [Créditos](#créditos)
    - [Core-Team](#core-team)
    - [Otros contribuidores](#otros-contribuidores)
  - [Licencia](#licencia)

## Acerca del proyecto

Atlas nace con la intención de ser una plataforma que reuna a todas las comunidades tecnológicas que trabajan en la región latinoaméricana, queremos darle mayor visibilidad a aquellas comunidades que van empezando y también ayudar a que las personas puedan encontrar un grupo dónde se reunan intereses en común.

Atlas ha sido construido con Gridsome, un framework para construcción de sitios web estáticos hechos con Vue, esto nos permite generar sitios extremadamente eficientes y rápidos para el usuario, además de no requerir de un backend para alojar la información del sitio.

El sitio está alojado en GitHub pages de forma gratuita.

## Requisitos

Para poder levantar el proyecto en tu equipo local de desarrollo, es necesario que tengas instalado lo siguiente:

- Editor de código (vim, VS Code, Webstorm, Atom, etc...)
- Node.js
- npm o yarn
- Git
- Un navegador web para probar los cambios

## Comienza

### Descarga

1. **Clona el repositorio**

   Para poder realizar cambios y conservar el historial de git, es necesario que clones el repositorio en tu equipo de desarrollo local.

   ```bash
   git clone https://github.com/devspacemx/atlas.git
   cd atlas
   ```

   Este comando habrá descargado una copia local, ahora estarás listo para realizar cambios

2. **Instala las dependencias**

   Atlas requiere de un par de dependencias para poder funcionar, ¡No te preocupes! Todas estas dependencias son manejadas por el gestor de paquetes de node (npm), por lo cuál solo necesitaras ejecutar un comando

   ```bash
   # si utilizas npm:
   npm install
   # si utilizas yarn:
   yarn install
   ```

   Una vez ejecutado el comando ya estarás listo para ejecutar el proyecto de forma local

   > **Nota**: Es posible que equipos que utilizan una arquitectura ARM tengan problemas al momento de instalar las dependencias, esto se debe a que el pre-procesador de estilos sass aún no está porteado completamente para ese tipo de arquitecturas.

### Ejecución

1. **Ejecuta el proyecto**

   Gridsome provee de un comando para levantar un servidor y reiniciar el sitio en cuanto realices cualquier cambio en el código fuente del proyecto, podrás acceder al sitio desde tu navegador visitando la url http://localhost:8080 (por default).

   ```bash
   # si utilizas npm:
   npm run dev
   # si utilizas yarn:
   yarn run dev
   ```

   > **Observaciones**: Si realizas un cambio en un archivo markdown es necesario que pares la ejecución del comando y vuelvas a correrlo para ver los cambios.

## Contribuye

Incluye aquí las formas de contribuir a tu proyecto.

Ejemplo:

Revisa por favor si puedes contribuir primero con los issues solicitados en el apartado de issues del [Repositorio](https://github.com/devspacemx/atlas)

Considera contribuir al proyecto de cualquier forma. Un buen inicio es la documentación o agregando tu username de twitter o github en este documento. Las modificaciones son aceptadas por pull request en el siguiente repositorio. [Repositorio](https://github.com/).

## Créditos

### Core-Team

- [mxarc](http://twitter.com/mxarc)

### Otros contribuidores


`{}` con ❤️ por la comunidad de [DevSpace](https://www.devspace.mx).

## Licencia

[MIT](LICENSE)
