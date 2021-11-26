// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

let fixName = (name, symbol) => {
    let withoutSymbols = [];
    if (name.includes(symbol)) {
        let newArr = name.split(symbol);
        newArr.forEach((item) => {if (item) withoutSymbols.push(item)})
        return withoutSymbols
    }
}
console.log(fixName(n1, '.'))
console.log(fixName(n2, '-'))
console.log(fixName(n3, '_'))
document.write(fixName(n2, '-').join(' '))

console.log('======================================')
document.write('<hr>')


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let generateNumbers = ( numbers, from, to) => {
    let genNum = [];
    for (let i = 0; i < numbers; i++) {
        genNum.push(Math.round(Math.random()*to) + from)
    }
    return genNum
}
console.log(generateNumbers( 10,0,100))
document.write(generateNumbers( 10,0,100).join(', '))

console.log('======================================')
document.write('<hr>')


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//   Відсортувати його за допомоги sort

let randNum = generateNumbers(10,0,20)
let arrSort = randNum.sort((a,b) => a-b)
console.log(arrSort)
document.write(arrSort.join(', '))

console.log('======================================')
document.write('<hr>')


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//      відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let evenNumbers = randNum.filter((item) => item % 2 === 0)
console.log(evenNumbers)
document.write(evenNumbers.join(', '))

console.log('======================================')
document.write('<hr>')


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
//   за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let stringNumbers = randNum.map((item) => item.toString())
console.log(stringNumbers)
document.write(stringNumbers.join(', '))

console.log('======================================')
document.write('<hr>')


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//   або навпаки в залежності від значення аргументу direction.
//      let nums = [11,21,3];
//      sortNums('ascending') // [3,11,21]
//      sortNums('descending') // [21,11,3]

let nums = [11, 21, 3];
let sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        return arr.sort((a,b) => a-b)
    }
    if (direction ==='descending') {
        return arr.sort((a,b) => b-a)
    }
}
console.log(sortNums(nums, 'ascending'))
document.write(sortNums(nums, 'ascending').join(', '))

console.log('======================================')
document.write('<hr>')


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let sortCourses = coursesAndDurationArray.sort((a, b) => {
    return a.monthDuration - b.monthDuration;
})
console.log(sortCourses)
let filterCourses = coursesAndDurationArray.filter((item) => item.monthDuration > 5)
console.log(filterCourses)

console.log('======================================')


// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (string, n) => {
    let newArr = [];
    while (string.length) {
        newArr.push(string.substr(0,n))
        string = string.slice(n)
    }
    return newArr
}
document.writeln(cutString('Інтерпретація', 3))