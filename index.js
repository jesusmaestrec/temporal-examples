import { Temporal } from '@js-temporal/polyfill';

// Ejemplo 1: Crear una fecha y hora específica
const specificDateTime = Temporal.PlainDateTime.from('2023-10-15T10:30:00');
console.log(`Fecha y hora específica: ${specificDateTime.toString()}`);

// Ejemplo 2: Sumar y restar tiempo
const addedTime = specificDateTime.add({ hours: 2, minutes: 30 });
console.log(`Tiempo añadido: ${addedTime.toString()}`);

const subtractedTime = specificDateTime.subtract({ days: 1 });
console.log(`Tiempo restado: ${subtractedTime.toString()}`);

// Ejemplo 3: Comparar dos fechas y horas
const dateTime1 = Temporal.PlainDateTime.from('2023-10-15T10:30:00');
const dateTime2 = Temporal.PlainDateTime.from('2023-10-16T12:45:00');

const comparison = Temporal.PlainDateTime.compare(dateTime1, dateTime2);
console.log(`Comparación de fechas y horas: ${comparison}`); // -1 si dateTime1 es antes de dateTime2, 1 si es después, 0 si son iguales

// Ejemplo 4: Duración entre dos fechas y horas
const duration = dateTime1.until(dateTime2, { largestUnit: 'hours' });
console.log(`Duración entre dos fechas y horas: ${duration.toString()}`);

// Ejemplo 5: Convertir a diferentes zonas horarias
const instant = Temporal.Instant.from('2023-10-15T09:30:00Z'); // Convert to UTC
const zonedDateTime = instant.toZonedDateTimeISO('Europe/Madrid');
const convertedZonedDateTime = zonedDateTime.withTimeZone('America/New_York');
console.log(`Fecha y hora convertida a otra zona horaria: ${convertedZonedDateTime.toString()}`);

// Ejemplo 6: Obtener la fecha y hora actual en una zona horaria específica
const nowInNY = Temporal.Now.zonedDateTimeISO('America/New_York');
console.log(`Fecha y hora actual en Nueva York: ${nowInNY.toString()}`);
