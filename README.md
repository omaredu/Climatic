# Climatic

Somos una empresa que se dedica a crear la plataforma de consulta del clima más minimalista y fácil de usar.

Hoy comenzamos el desarrollo de nuestra plataforma web y, debido a que nuestra app está desarrollada con React Native, el equipo de ingeniería tomó la decisión de utilizar React y NextJS 13 como tecnología principal para desarrollo. Gracias a sus capacidades de ofrecer una velocidad de carga importante por medio de SSR (Server-Side Rendering) y porque nuestro equipo ya esta familiarizado con React.

En Climatic utilizamos el API de OpenWeather para recuperar la información climática, por ello, nos tomamos el tiempo de generar por adelantado, un API Key para nuestra futura plataforma web.

[Сurrent weather and forecast](https://openweathermap.org/)

```bash
API_KEY="44b81114cf9fdb8f0d8bed2f3e7e6f30"
```

Nuestro equipo de diseño, ya se tomó el tiempo de crear un diseño básico para lo que será el prototipo de nuestra plataforma web. En Climatic, solemos utilizar la metodología mobile first. 

Nota: El diseño ya está previamente aprobado por nuestro líder de proyecto y es lo que nuestros stakeholders esperan.

https://www.figma.com/file/MD9i85yBNp8XCBjwdJVr94/Climatic?type=design&node-id=0%3A1&t=jX8VvIYaFwhrdv0j-1

Le solicitamos a nuestro equipo de diseño, exportar los recursos necesarios para que el desarrollo pueda comenzar lo antes posible, por lo que nos facilitaron un link a una carpeta de Google Drive con todos los recursos gráficos necesarios.

[Climatic - Google Drive](https://drive.google.com/drive/folders/1nKLS8adHnMiYMRUcbBRC94YqllOwILE7?usp=sharing)

Comenzaremos nuestro piloto en nuestra ciudad sede: Monterrey, Nuevo León. Por lo que de momento, solo es necesario recuperar la información climática de esta ciudad.

```json
{
	"lat": "25.686613",
	"lng": "-100.316116"
}
```

En Climatic, construimos software altamente escalable y mantenible, por lo que nuestro equipo siempre busca desarrollar bajo los principios SOLID. Además, utilizamos Typescript en toda nuestra base de código existente, ya que nos facilita encontrar errores y el mantenimiento a largo plazo de nuestros proyectos.

### Extra

Nuestro líder de proyecto nos comentó que le gustaría que agregásemos el feature de poder cambiar entre unidades de grados (imperial/métrico). Este requerimiento surgió posterior a la fase de diseño, por lo que se nos dio la confianza de agregar este feature sin necesidad de un diseño de referencia, siempre y cuando, esté alineado con el lenguaje de diseño que se está utilizando. *No hagamos enojar al equipo de diseño.*
