// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
//   якщо два аргументи - складає або конкатенує їх між собою.

function argumentsWrite() {
        if (arguments.length > 1) {
            for (let i = 0; i < arguments.length; i++) {
                arguments[0] += arguments[i];
            }
            console.log(arguments[0])
        } else if (arguments.length === 1) {
            console.log(arguments[0])
        }

}
argumentsWrite('ten')
argumentsWrite('one ', 'two ', 'three ', 'four ', 'five ')
argumentsWrite(100)
argumentsWrite(10, 20, 30, 40, 50, 60, 70, 80, 90)



console.log('======================================')
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими
//   індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//      [1,2,3,4]
//      [2,3,4,5]
//   результат
//      [3,5,7,9]

function sumIndexArray(array1, array2) {
    let sumArrayIndex = [];
        for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
            sumArrayIndex[i] = (array1[i] || 0) + (array2[i] || 0);
    }
    return  sumArrayIndex;
}
let arrayOne = [1,2,3,4,10,12];
let arrayTwo = [2,3,4,5];

console.log(sumIndexArray(arrayOne, arrayTwo))



console.log('======================================')
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function userKeyArray(arr) {
    let arrayKey = [];
    for (const arrElement of arr) {
        for (const arrElementKey in arrElement) {
            arrayKey.push(arrElementKey)
        }
    }
    return arrayKey;
}
let user = [{name: 'Dima', age: 13}, {model: 'Camry'}]

console.log(userKeyArray(user))



console.log('======================================')
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function userObjectArray(object) {
    let userObject = [];

    for (const objectElement of object) {
        for (const objectElementKey in objectElement) {
            userObject.push(objectElement[objectElementKey])
        }
    }
    return userObject
}

console.log(userObjectArray(user))