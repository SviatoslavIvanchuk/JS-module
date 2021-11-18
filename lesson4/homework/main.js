// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log('Площа прямокутника')

function multiplication(a, b) {
    result = a * b;
    return result;
}

let areaRectangle = multiplication(10, 20)
console.log(areaRectangle)


// - створити функцію яка обчислює та повертає площу кола з радіусом r
console.log('Площа кола')

function areaRound(r) {
    result = 3.14 * r**2;
    return result
}

console.log(areaRound(2))


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
console.log('Площа циліндра')

function areaCylinder(r, h) {
    result = 2 * 3.14 * r * h + 2 * 3.14 * r**2;
    return result;
}
console.log(areaCylinder(2,5));


// - створити функцію яка приймає масив та виводить кожен його елемент
console.log('Вивід масиву через функцію')

function arrayWrite(a) {
    for (let i = 0; i < a.length; i++ ){
        // result = a[i]
        console.log(a[i])
    }
    return result
}

let arrayFirst = [];
for (let i = 0; i < 10; i++){
    arrayFirst[i] = Math.floor(Math.random()*10)
}   console.log(arrayFirst)

arrayWrite(arrayFirst)



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
console.log('Вивід параграфу через функцію')
document.write('---------Вивід параграфу через функцію-----------')

function paragraphWrite(text) {
    document.write(`<p>${text}</p>`)
    return result
}
paragraphWrite('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, quasi?')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write('-------Створення ul-------')

function createUl(li) {
    document.write('<ul>')
        document.write(`<li>${li}</li>`)
        document.write(`<li>${li}</li>`)
        document.write(`<li>${li}</li>`)
    document.write('</ul>')
}
createUl('Hi to all')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function UlCreateWithLi(num, li) {
    document.write('<ul>')
    for (let i = 0; i < num; i++) {
        document.write(`<li>${li}</li>`)
    }
    document.write('</ul>')
}
UlCreateWithLi(3, 'Good day')


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrayRandom = [1, 'twelve', false, 2, 6, 'twenty', 9, 'burger', true, 'apple']

function arrayWriteDifferent(arr) {
    document.write('<ul>')
        for (let i = 0; i < arr.length; i++) {
             console.log(arr[i])
             document.write(`<li>${arr[i]}</li>`)
        }
    document.write('</ul>')
}

arrayWriteDifferent(arrayRandom)


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

function userListArray(arr) {
    for (const arrElement of arr) {
        document.write('<div>')
            document.write(`<h4>${arrElement['id']}. ${arrElement['name']} - age: ${arrElement['age']}</h4>`)
        document.write('</div>')
    }
}
userListArray(usersList)

