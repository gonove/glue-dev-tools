# glue-dev-tools 馃

Esta herramienta fue creada para disminuir la interacci贸n con la interfaz gr谩fica de la consola de AWS, a modo de ahorrar tiempo en ejecutar peque帽as funcionalidades. Se tiene implementado las siguientes funciones:
- Reset Job Bookmark
- Trigger Glue Job


## Instalaci贸n

Se debe clonar o descargar el repositorio y ejecutar el siguiente comando para instalar todos los paquetes de node:

    npm install

## Configuraci贸n

El archivo **.env.example** se debe renombrar a **.env**, dentro del mismo se debe colocar nuestro perfil de AWS SSO:
> PROFILE_DEV=BR-DM-DEV-EMP-XA-EMPRESA-X-1234567890

## Ejecuci贸n

Para ejecutar la herramienta se debe estar en el directorio root del proyecto dentro de una terminal y ejecutar el siguiente comando:

    npm run dev
## A tener en cuenta:
- Al momento de utilizar la herramienta ya se deber铆a haber iniciado sesi贸n en el AWS SSO, con el comando:

	    aws sso login --profile XXXX-XXX-XXXX-XXXX-1234567890

	Mas info: [Configuracion AWS SSO](https://docs.aws.amazon.com/es_es/cli/latest/userguide/cli-configure-sso.html)
- Si no se encuentran resultados en el **dataset** o el **unitbusiness** se puede agregar a una lista dentro de la carpeta `./data/data.js`
