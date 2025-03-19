# Proyecto React con TailwindCSS y Axios

Este es un proyecto de ejemplo utilizando React, TailwindCSS y Axios. Este proyecto se ha creado por la solicitud de una empresa como una prueba técnica para un proceso de selección.
Es un formulario que registra clientes y los elimina guardados en el LocalStorage.    

Es responsive y se ajustan los componetes dependiendo de la pantalla, el listado puede estar el tabla si son pantallas medias o grandes y en formato tarjeta si es tamaño movíl.

## Tecnologías Utilizadas

- **React**: Una biblioteca de JavaScript para construir interfaces de usuario.
- **TailwindCSS**: Un framework de CSS para un diseño rápido y personalizado.
- **Axios**: Una biblioteca de cliente HTTP basada en promesas para realizar solicitudes a APIs.
- **TypeScript**: Tipado estático opcional y funciones avanzadas a JavaScript.
- **Toast**: Librería que muestra un elemento emergente en la interfaz del usuario

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado Node.js y npm en tu máquina.

## Instalación

1. Clona este repositorio en tu máquina local.

   ```bash
   git clone https://github.com/jmtomeX/prueba-tecnica-mta.git
   ```

2. Navega al directorio del proyecto.

   ```bash
   cd prueba-tecnica-mta
   ```

3. Instala las dependencias del proyecto.

   ```bash
   npm install
   ```

## Uso

1. Inicia el servidor de desarrollo.

   ```bash
   npm run dev
   ```

2. Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación en funcionamiento.

## Estructura del Proyecto

```plaintext
nombre-del-repositorio/
├── public/
├── src/
│   ├── apis/
│   ├── assets/
│   ├── components/
│   ├── helpers/
│   ├── hooks/
│   ├── lib/
│   ├── App.tsx
│   ├── index.css
│   ├── index.ts
├── .gitignore
├── package.json
├── README.md
```

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

- `npm run start`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción en la carpeta `build`.
- `npm test`: Ejecuta las pruebas.




## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.
