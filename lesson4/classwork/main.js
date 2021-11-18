// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
console.log('------Приймає 3 числа та виводить найменше------')

function minNumberCalc(a, b, c) {
    if (a < b && a < c) {
        console.log('a'+ ': ' + a)
    } else if (b < a && b < c) {
        console.log('b'+ ': ' + b)
    } else if (c < a && c < b) {
        console.log('c'+ ': ' + c)
    }
}
minNumberCalc(25,50,12)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
console.log('------Приймає 3 числа та виводить найбільше------')

function maxNumberCalc(a, b, c) {
    if (a > b && a > c) {
        console.log('a'+ ': ' + a)
    } else if (b > a && b > c) {
        console.log('b'+ ': ' + b)
    } else if (c > a ** c >b) {
        console.log('c'+ ': ' + c)
    }
}
maxNumberCalc(12,25,7)


// - створити функцію яка повертає найбільше число з масиву
console.log('------Повернення найбільшого числа з масиву------')

let numbers = [24, 29, 10, 13, 16, 4];

function returnMaxNumberWithArr(arr) {
    result = Math.max.apply(null, arr);
    return result
}
console.log(returnMaxNumberWithArr(numbers))


// - створити функцію яка повертає найменше число з масиву
console.log('------Повернення найменшого числа з масиву------')

function returnMinNumberWithArr(arr) {
    result = Math.min.apply(null, arr)
    return result
}
console.log(returnMinNumberWithArr(numbers))


// - створити функцію яка приймає масив чисел,
//   сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
console.log('------Сума значень масиву------')

function sumNumbersArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(sumNumbersArray(numbers))


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
console.log('------Середнє арифметичне значень------')

function arifMNumbersArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    result = sum / arr.length;
    return result
}
console.log(arifMNumbersArray(numbers))


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
//   а виводить найбільше (Math використовувати заборонено);
console.log('------Вивід найбільшого------')

function randomNumbersWriteMinAndMax(arg) {
    let min = arguments[0];
    let max = arguments[0];
    for (const element of arguments) {
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
    }
    console.log("Найбільше значення: ", max);
    return min;
}
document.write('Мінімальне число з введених: ' + randomNumbersWriteMinAndMax(11, 6, 14, 27, 21, 17, 20, 8))


// - створити функцію яка заповнює масив рандомними числами
console.log('------Масив із рандомними числами------')

function randomArrayNumbers(num) {
    let arrayNumbers = [];
    for (let i = 0; i < num; i++) {
        arrayNumbers.push(Math.floor(Math.random()*200))
    }
    return arrayNumbers
}
console.log(randomArrayNumbers(10))


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
//   limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
console.log('------Масив із рандомними числами у правильному і зворотному напрямку------')

function randomArrayNumbersLimit(num, limitBefore, limitAfter) {
    let newArray = [];

    for (let i = 0; i < num; i++) {
        newArray.push(Math.floor(Math.random()*(limitAfter-limitBefore)) + limitBefore);
    }
    console.log(newArray)
    let newArrayRevers = newArray.reverse();
    console.log(newArrayRevers)
}
randomArrayNumbersLimit(10,0,20)



