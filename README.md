<div align="center">
<img src="https://github.com/devspacemx/atlas/blob/main/logo.png" width="200" title="Logo Atlas">
</div>

# 🌎 Atlas de comunidades

> 💻 Puedes visitar el Atlas en la dirección de <https://comunidades.lat>

¡Bienvenido internauta! Este es el repositorio oficial de la plataforma Atlas de comunidades

Aquí puedes conocer todos los detalles detrás del proyecto Atlas y como colaborar para hacer más grande la plataforma.

¿Quieres agregar una comunidad al Atlas? Mira en la sección de [Agregando una comunidad](#agregando-una-comunidad)

<div align="center">

[![license](https://img.shields.io/badge/license-MIT-red)](LICENSE.md)
[![website](https://img.shields.io/badge/website-comunidades.lat-blue)](https://comunidades.lat/)
[![twitter](https://img.shields.io/twitter/follow/comunidadeslat?label=Twitter&logo=twitter)](https://twitter.com/comunidadeslat)
[![Discord](https://img.shields.io/discord/635852899066314753?label=Discord&logo=discord)](https://discordapp.com/invite/sJ7b9Mr)

</div>

## 📖 Índice

- [🌎 Atlas de comunidades](#-atlas-de-comunidades)
  - [📖 Índice](#-índice)
  - [Acerca del proyecto](#acerca-del-proyecto)
  - [Requisitos](#requisitos)
  - [Desarrollo](#desarrollo)
    - [Descarga](#descarga)
    - [Ejecución](#ejecución)
  - [Agregando una comunidad](#agregando-una-comunidad)
    - [Estructura de un archivo de comunidad](#estructura-de-un-archivo-de-comunidad)
  - [Contribuye](#contribuye)
  - [Créditos](#créditos)
    - [Core-Team](#core-team)
  - [Licencia](#licencia)

## Acerca del proyecto

<p align="center">
<img src="https://github.com/devspacemx/atlas/blob/main/screen.png" width="600" title="El Atlas">
</p>

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

## Desarrollo

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

   > **Nota**: Es posible que equipos que utilizan una arquitectura ARM (e.j: Mac con M1) tengan problemas al momento de instalar las dependencias, esto se debe a que el pre-procesador de estilos sass aún no está porteado completamente para ese tipo de arquitecturas.

### Ejecución

1. **Ejecuta el proyecto**

   Gridsome provee de un comando para levantar un servidor y reiniciar el sitio en cuanto realices cualquier cambio en el código fuente del proyecto, podrás acceder al sitio desde tu navegador visitando la url <http://localhost:8080> (por default).

   ```bash
   # si utilizas npm:
   npm run dev
   # si utilizas yarn:
   yarn run dev
   ```

   > **Observaciones**: Si realizas un cambio en un archivo markdown es necesario que pares la ejecución del comando y vuelvas a correrlo para ver los cambios.

## Agregando una comunidad

<p align="center">
<img src="https://github.com/devspacemx/atlas/blob/main/collab.png" width="250" title="Colabora">
</p>

> 📑 Alternativamente puedes llenar un formulario de **Google Docs** en la siguiente liga: <https://forms.gle/o4CeeMgSaJbXE7896>

Agregar una comunidad es muy sencillo, solo necesitas hacer lo siguiente:

1. Clona el repositorio en tu cuenta de GitHub, encontrarás el botón en la parte superior derecha del repositorio y dice **Fork**
2. Crea un archivo con formato `.md` con el nombre de la comunidad en la carpeta `comunidades`, puedes seguir la plantilla llamada `template-comunidades.md` en la raíz del repositorio.
3. Sube el logotipo en la carpeta de `uploads`
4. Prueba tus cambios ejecutando los comandos del apartado de [Ejecución](#ejecución)
5. Crea un Pull Request
6. Espera a que un mantainer apruebe tus cambios

### Estructura de un archivo de comunidad

```md
---
title: Nombre de comunidad
date: 2021-06-20 <-- SIGUE ESTE FORMATO DE FECHA (YYYY-MM-DD)
description: Te recomendamos colocar una descripción corta
tags: ["Coloca", "Tags", "Para", "Identificar", "Tu", "Comunidad"]
location: Pais
image: /uploads/logo.png
# Tags opcionales, te recomendamos colocar por lo menos uno
twitter: username
facebook: username
youtube: username (o lo que vaya después de youtube.com/)
instagram: username
github: username
web: https://web.com
slack: url completa de slack
discord: url de invitación completa de discord
meetup: url de meetup completa
twitch: username
telegram: username o nombre del grupo
---

Contenido extra, puede ser formato Markdown y HTML
```

## Contribuye

¿Te gustaría colaborar con el desarollo de Atlas? ¡Adelante! La plataforma es de todos y si tienes una idea que te gustaría fuera implementada puedes abrir un Issue describiendo que cambios te gustaría ver, así como también puedes abrir un Pull Request con modificaciones para la plataforma.

Otra forma en la que puedes contribuir es revisar que issues están abiertos en el [Repositorio](https://github.com/devspacemx/atlas/issues)

También puedes agregar comunidades en las cuales participas, solo asegurate de llenar bien los datos de la comunidad :)

## Créditos

### Core-Team

- [mxarc](https://twitter.com/mxarc)

## Licencia

[MIT](LICENSE)
