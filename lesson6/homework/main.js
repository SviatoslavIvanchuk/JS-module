// - Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let taskOneArrayOne = 'hello world';
let taskOneArrayTwo = 'lorem ipsum';
let taskOneArrayThree = 'javascript is cool';
console.log(taskOneArrayOne.length, taskOneArrayTwo.length, taskOneArrayThree.length)


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let taskOneUpperCaseOne = taskOneArrayOne.toUpperCase()
let taskOneUpperCaseTwo = taskOneArrayTwo.toLocaleUpperCase()
let taskOneUpperCaseThree = taskOneArrayThree.toLocaleUpperCase()
console.log(taskOneUpperCaseOne, taskOneUpperCaseTwo, taskOneUpperCaseThree)


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let taskOneLowerCaseOne = taskOneUpperCaseOne.toLowerCase()
let taskOneLowerCaseTwo = taskOneUpperCaseTwo.toLowerCase()
let taskOneLowerCaseThree = taskOneUpperCaseThree.toLowerCase()
console.log(taskOneLowerCaseOne, taskOneLowerCaseTwo, taskOneLowerCaseThree)


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string    '
let strClear = str.trim()
console.log(str)
console.log(strClear)



// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Чи Омелько жити зможе без своїх фантазій';
// let arr = stringToArray(str);
// document.writeln(arr); // ['Чи', 'Омелько', 'жити', 'зможе', 'без', 'своїх', 'фантазій']

let taskTwoStr = 'Чи Омелько жити зможе без своїх фантазій';
let taskTwoStrToArray = (str) => {
    let strToArray = str.split(' ')
    document.write(strToArray.join(' '))
    console.log(strToArray)
}
taskTwoStrToArray(taskTwoStr)

console.log('======================================')
document.write('<hr>')

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
//   що складається із зазначеної кількості символів.
//     let str = 'Чи Омелько Жити зможе без своїх фантазій';
// document.writeln(delete_characters(str, 7)); // Омелько

let taskTwoStrReturnArrElement = (str, length) => {
    let strToArray = str.split(' ')
    for (const strToArrayElement of strToArray) {
        if (strToArrayElement.length === length) {
            return strToArrayElement
        }
    }
}
console.log(taskTwoStrReturnArrElement(taskTwoStr, 7))
document.write(taskTwoStrReturnArrElement(taskTwoStr, 7))

console.log('======================================')
document.write('<hr>')

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//   При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let taskThreeStr = "HTML JavaScript PHP";
let insert_dash = (str) => {
    let arrDash = str.replaceAll(' ', '-')
    return arrDash.toUpperCase()

}
document.write(insert_dash(taskThreeStr))
console.log(insert_dash(taskThreeStr))

console.log('======================================')
document.write('<hr>')

// - Напишіть функцію, яка приймає рядок як аргумент і
//   перетворює регістр першого символу рядка з нижнього регістру у верхній.

let taskFourStr = 'lorem ipsum dolor sit amet.'
let upperCaseFirstElement = (str) => {
    return str.replace(str[0], str[0].toUpperCase())
}
document.write(upperCaseFirstElement(taskFourStr))
console.log(upperCaseFirstElement(taskFourStr))

console.log('======================================')
document.write('<hr>')

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
    return str.split(' ').map(strWord=>strWord.charAt(0).toUpperCase()+strWord.slice(1)).join(' ');
}
document.write(capitalize(taskFourStr))
console.log(capitalize(taskFourStr))