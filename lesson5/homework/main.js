// - створити функцію яка обчислює та повертає площу прямокутника висотою

let areaRectangle = (a, b) => a*b;
console.log('Площа прямокутника: ' + areaRectangle(4,6))


// - створити функцію яка обчислює та повертає площу кола

let areaCircle = (r) => 3.14 * r**2;
console.log('Площа кола: ' + areaCircle(10))


// - створити функцію яка обчислює та повертає площу циліндру

let areaCylinder = (r, h) => 2*3.14*r*(r+h);
console.log('Площа циліндра: ' + areaCylinder(4,6))


// - створити функцію яка приймає масив та виводить кожен його елемент

let arrayFirst = [10, -3, 6, 0, 7, 5, -4]
let arrayItem = (array) => {
    for (let i=0; i < array.length; i++) {
        console.log(array[i])
    }
}
arrayItem(arrayFirst)


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let paragraph = (text) => {document.write(`<p>${text}</p>`);}
paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, est?')


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createUlConstLi = (text) => {
    document.write('<ul>')
        document.write(`<li>${text}</li>`)
        document.write(`<li>${text}</li>`)
        document.write(`<li>${text}</li>`)
    document.write('</ul>')
}
createUlConstLi('Lorem ipsum dolor sit amet, consectetur adipisicing elit.')


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createUlVarLi = (text, liNumber) => {
    document.write('<ul>')
        for (let i = 0; i < liNumber; i++) {
            document.write(`<li>${text}</li>`)
        }
    document.write('</ul>')
}
createUlVarLi('Lorem ipsum dolor sit.', 6)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrayRandom = [1, 'twelve', false, 2, 6, 'twenty', 9, 'burger', true, 'apple']
let createArrayItem = (array) => {
    document.write('<ul>')
        for (let i = 0; i < array.length; i++) {
            document.write(`<li>${array[i]}</li>`)
        }
    document.write('</ul>')
}
createArrayItem(arrayRandom)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
//   та виводить їх в документ. Для кожного об'єкту окремий блок.

let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        age: 22,
    },
    {
        id: 2,
        name: 'Ervin Howell',
        age: 26,
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        age: 23,
    },
    {
        id: 4,
        name: 'Kurtis Weissnat',
        age: 29,
    },
];
let userDocument = (array) => {
    for (let arrayElement of array) {
        document.write(`<div>${arrayElement.id}. ${arrayElement.name}: ${arrayElement.age}</div>`)
    }
}
userDocument(usersList)