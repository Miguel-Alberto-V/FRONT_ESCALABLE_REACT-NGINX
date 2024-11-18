# Proyecto FrontEnd con React y Balanceo de Carga con Nginx en Docker Swarm y EC2

Este proyecto es un sistema FrontEnd desarrollado en React, que utiliza Nginx para el balanceo de carga, desplegado en un clúster de Docker Swarm y ejecutado en instancias EC2 de AWS.

## Contenido del Proyecto

- **React-App**: Contiene el código fuente del frontend desarrollado en React.
- **ProxyNginx**: Contiene la configuración de Nginx para el balanceo de carga.
- **Plantilla_Principal.yaml**: Archivo de CloudFormation para desplegar el proyecto en AWS.

## Instrucciones para Ejecutar el Código

### 1. Clonar el Repositorio

Primero, clona el repositorio en tu máquina local:

```sh
git clone https://github.com/Miguel-Alberto-V/FRONT_ESCALABLE_REACT-NGINX.git
cd FRONT_ESCALABLE_REACT-NGINX
```

# Despliegue de Proyecto en AWS CloudFormation

## Instrucciones de Despliegue

### 1. Desplegar en AWS CloudFormation
1. Dirígete a tu cuenta de AWS y accede al servicio de **CloudFormation**.
2. Selecciona **"Crear pila"** y luego **"Con recursos nuevos (estándar)"**.
3. En la sección **"Especificar plantilla"**, selecciona **"Cargar un archivo de plantilla"** y sube el archivo `Plantilla_Principal.yaml`.
4. Haz clic en **"Siguiente"**.

### 2. Configurar Parámetros
1. En la sección de parámetros:
   - **KeyName**: Selecciona un par de claves existente o utiliza la clave por defecto `vockey`.
   - **VPC**: Selecciona una VPC creada anteriormente o utiliza la VPC por defecto.
2. Haz clic en **"Siguiente"** dos veces.
3. Finalmente, haz clic en **"Enviar"**.

### 3. Esperar a que se Complete el Despliegue
- Espera entre **4 a 5 minutos** para que CloudFormation complete el despliegue del proyecto.

---

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes scripts:

### `npm start`
- Ejecuta la aplicación en modo de desarrollo.
- Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

### `npm test`
- Lanza el corredor de pruebas en modo interactivo.
- Consulta la sección sobre ejecución de pruebas para más información.

### `npm run build`
- Construye la aplicación para producción en la carpeta `build`.
- Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

### `npm run eject`
**Nota:** esta es una operación unidireccional. Una vez que ejecutes `eject`, **no puedes volver atrás**.

- Si no estás satisfecho con la herramienta de construcción y las opciones de configuración, puedes ejecutar `eject` en cualquier momento. Este comando eliminará la dependencia de construcción única de tu proyecto.

