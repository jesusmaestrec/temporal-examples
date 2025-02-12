# Temporal API Examples

Este proyecto contiene ejemplos de uso de la API Temporal de JavaScript para manejar fechas y horas de manera más efectiva que con el objeto `Date` tradicional.

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalación

1. Clona este repositorio.
2. Instala las dependencias necesarias ejecutando el siguiente comando:

```bash
npm install @js-temporal/polyfill
```

## Ejemplos

### Ejemplo 1: Crear una fecha y hora específica

```javascript
const specificDateTime = Temporal.PlainDateTime.from('2023-10-15T10:30:00');
console.log(`Fecha y hora específica: ${specificDateTime.toString()}`);
```

Este ejemplo crea un objeto `Temporal.PlainDateTime` con una fecha y hora específica y la imprime en la consola.

### Ejemplo 2: Sumar y restar tiempo

```javascript
const addedTime = specificDateTime.add({ hours: 2, minutes: 30 });
console.log(`Tiempo añadido: ${addedTime.toString()}`);

const subtractedTime = specificDateTime.subtract({ days: 1 });
console.log(`Tiempo restado: ${subtractedTime.toString()}`);
```

Este ejemplo muestra cómo sumar y restar tiempo a un objeto `Temporal.PlainDateTime`.

### Ejemplo 3: Comparar dos fechas y horas

```javascript
const dateTime1 = Temporal.PlainDateTime.from('2023-10-15T10:30:00');
const dateTime2 = Temporal.PlainDateTime.from('2023-10-16T12:45:00');

const comparison = Temporal.PlainDateTime.compare(dateTime1, dateTime2);
console.log(`Comparación de fechas y horas: ${comparison}`);
```

Este ejemplo compara dos objetos `Temporal.PlainDateTime` y muestra el resultado de la comparación.

### Ejemplo 4: Duración entre dos fechas y horas

```javascript
const duration = dateTime1.until(dateTime2, { largestUnit: 'hours' });
console.log(`Duración entre dos fechas y horas: ${duration.toString()}`);
```

Este ejemplo calcula la duración entre dos fechas y horas y la imprime en la consola.

### Ejemplo 5: Convertir a diferentes zonas horarias

```javascript
const instant = Temporal.Instant.from('2023-10-15T09:30:00Z');
const zonedDateTime = instant.toZonedDateTimeISO('Europe/Madrid');
const convertedZonedDateTime = zonedDateTime.withTimeZone('America/New_York');
console.log(`Fecha y hora convertida a otra zona horaria: ${convertedZonedDateTime.toString()}`);
```

Este ejemplo muestra cómo convertir una fecha y hora a diferentes zonas horarias.

### Ejemplo 6: Obtener la fecha y hora actual en una zona horaria específica

```javascript
const nowInNY = Temporal.Now.zonedDateTimeISO('America/New_York');
console.log(`Fecha y hora actual en Nueva York: ${nowInNY.toString()}`);
```

Este ejemplo obtiene la fecha y hora actual en la zona horaria de Nueva York y la imprime en la consola.

## Ejecución

Para ejecutar los ejemplos, utiliza el siguiente comando:

```bash
npm run dev
```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que te gustaría hacer.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
