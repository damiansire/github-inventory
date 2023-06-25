# Configuración inicial del proyecto

Este repositorio requiere configuraciones iniciales para su correcto funcionamiento. Sigue los pasos a continuación para configurar el proyecto adecuadamente:

## Paso 1: Agregar el Personal Access Token al archivo .env

1. Obtén un Personal Access Token (PAT) en [este enlace](https://docs.github.com/es/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creación-de-un-personal-access-token-classic).
2. Crea un archivo `.env` en la raíz del proyecto.
3. Agrega tu Personal Access Token en el archivo `.env` de la siguiente manera:

```shell
GITHUBTOKEN=your_personal_access_token
```

Asegúrate de reemplazar `your_personal_access_token` con el token que obtuviste en el paso anterior.

**¡Importante!** No compartas ni hagas público tu Personal Access Token, ya que podría comprometer la seguridad de tu cuenta de GitHub.

## Ejecución del proyecto

Sigue estos pasos para ejecutar el proyecto localmente:

1. Instala las dependencias del proyecto ejecutando el siguiente comando en tu terminal:

```shell
npm install
```

2. Inicia la aplicación con el siguiente comando:

```shell
npm start
```

Esto iniciará la ejecución de la aplicación y podrás acceder a ella a través de tu navegador o según las indicaciones específicas del proyecto.
