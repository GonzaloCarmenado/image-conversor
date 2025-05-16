# 🖼️ Conversor de Imágenes a AVIF con Sharp

## 📦 Descripción del proyecto

    Permite transformar de manera rápida las imágenes de la carpeta "images" en formato .AVIF. Este formato ocupa bastante menos manteniendo una resolución
    correcta. Usar AVIF ayuda a la velocidad de carga de las páginas web. Las imagenes que hay son de ejemplo, para que una vez ejecutes el comando, puedas ver
    cuanto espacio estás ganando.

## 🛠️ Requisitos

    - Node.js (versión XX o superior)
    - NPM o Yarn
    - Gulp (instalado global o localmente)
    - Dependencias del proyecto:
    - `sharp`
    - `gulp`
    - `fs` (nativo)
    - `path` (nativo)

## 📁 Estructura de carpetas esperada

    ├── images/ # Carpeta de entrada con imágenes originales
    ├── reduced-images/ # Carpeta de salida para imágenes AVIF generadas
    ├── gulpfile.js # Script principal con la tarea de Gulp
    └── README.md

## 🚀 Instalación

    Para instalar solo es necesario ejecutar npm i para instalar las dependencias.

## 🧾 Comandos útiles & ejecución

    Para lanzar la aplicación basta con ejecutar npm run build o gulp generateImg.