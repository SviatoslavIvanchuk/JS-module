// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let minNumber = (a, b, c) => {
    if (a < b && a < c) {
        console.log('Мінімальне число: ' + a)
    } else if (b < a && b < c) {
        console.log('Мінімальне число: ' + b)
    } else if (c < a && c < b) {
        console.log('Мінімальне число: ' + c)
    } else {
        console.log('Помилкове значення')
    }
}
minNumber(8,4, 5)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxNumber = (a, b, c) => {
    if (a > b ** a > c) {
        console.log('Найбільше число: ' + a)
    } else if (b > a && b > c) {
        console.log('Найбільше число: ' + b)
    } else if (c > a && c > b) {
        console.log('Найбільше число: ' + c)
    } else { console.log('Помилкове значення')}
}
maxNumber(2, 10,6)


// - створити функцію яка повертає найбільше число з масиву

let arrayFirst = [10, -3, 6, 24, 7, 31, -6]
let maxNumberArr = (array) => {
    let maxNumber = array[0];
    for (let arrayElement of array) {
       if (arrayElement > maxNumber) {
           maxNumber = arrayElement;
       }
    }
    return maxNumber
}
console.log(maxNumberArr(arrayFirst))


// - створити функцію яка повертає найменьше число з масиву

let minNumberArr = (array) => {
    let minNumber = array[0];
    for (const arrayElement of array) {
        if (arrayElement < minNumber) {
            minNumber = arrayElement;
        }
    }
    return minNumber;
}
console.log(minNumberArr(arrayFirst))


// - створити функцію яка приймає масив чисел,
//   сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arraySecond = [2,5,7,8,10]
let sumArrayNumbers = (array) => {
    let sumArray = 0;
    for (const arrayElement of array) {
        sumArray += arrayElement
    }
    return sumArray
}
console.log(sumArrayNumbers(arraySecond))


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let arrayArithmeticMean = (array) => {
    let sumArray = 0;
    for (const arrayElement of array) {
        sumArray += arrayElement
    }
    return sumArray/array.length;
}
console.log(arrayArithmeticMean(arraySecond))


// - створити функцію яка приймає будь-яку кількість чисел,
//   повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let minMaxNumbers = (...arg) => {
    let min = arg[0];
    let max = arg[0];
    for (const argElement of arg) {
        if (argElement < min) {
            min = argElement;
        }
        if (argElement > max) {
            max = argElement
        }
    }
    document.write(`<h2>Максимальне значення: ${max}</h2>`)
    return min
}
console.log('Мінімальне значення: ' + minMaxNumbers(4, 6, -2, -5, -3, 20, 0, 16))


// - створити функцію яка заповнює масив рандомними числами
//   (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100))
//   та виводить його.

let randomNumbers = (numbers) => {
   let numbersArray = [];
   for (let i = 0; i < numbers; i++) {
       numbersArray.push(Math.round(Math.random()*100))
   }
   console.log(numbersArray)
}
randomNumbers(10)



// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit -
//   аргумент, який характеризує кінцеве значення діапазону.

let randomNumbersWithLimit = (numbers, limit) => {
    let randomNum = [];
    for (let i = 0; i < numbers; i++) {
        randomNum.push(Math.round(Math.random()*limit))
    }
    console.log(randomNum)
}
randomNumbersWithLimit(8,20)


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let arrayThird = [2,5,7,8,10];

let arrayRevers = (arr) => {
    let arrRevers = [];
    for (let i = arr.length-1; i > -1; i--) {
        arrRevers.push(arr[i])
    }
    return arrRevers
}
console.log(arrayThird)
console.log(arrayRevers(arrayThird))


