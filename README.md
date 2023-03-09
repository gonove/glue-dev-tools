# glue-dev-tools 🤖

Esta herramienta fue creada para disminuir la interacción con la interfaz gráfica de la consola de AWS, a modo de ahorrar tiempo en ejecutar pequeñas funcionalidades. Se tiene implementado las siguientes funciones:
- Reset Job Bookmark
- Trigger Glue Job


## Instalación

Se debe clonar o descargar el repositorio y ejecutar el siguiente comando para instalar todos los paquetes de node:

    npm install

## Configuración

El archivo **.env.example** se debe renombrar a **.env**, dentro del mismo se debe colocar nuestro perfil de AWS SSO:
> PROFILE_DEV=BR-DM-DEV-EMP-XA-EMPRESA-X-1234567890

## Ejecución

Para ejecutar la herramienta se debe estar en el directorio root del proyecto dentro de una terminal y ejecutar el siguiente comando:

    npm run dev
## A tener en cuenta:
- Al momento de utilizar la herramienta ya se debería haber iniciado sesión en el AWS SSO, con el comando:

	    aws sso login --profile XXXX-XXX-XXXX-XXXX-1234567890

	Mas info: [Configuracion AWS SSO](https://docs.aws.amazon.com/es_es/cli/latest/userguide/cli-configure-sso.html)
- Si no se encuentran resultados en el **dataset** o el **unitbusiness** se puede agregar a una lista dentro de la carpeta `./data/data.js`
