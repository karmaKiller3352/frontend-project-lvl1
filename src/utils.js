// генератор случайных чисел, по умолчанию максимальное число равно 100, для упрощений подсчетов
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// экспортнул по дефолту потому что ругался линтер, на одну функцию и экспорт
// чисто семантически тут должно быть много функций
export default randomNumber;
