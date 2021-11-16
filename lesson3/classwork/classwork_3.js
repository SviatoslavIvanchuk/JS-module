
//               зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

//          1. перебрати його циклом while

//     let firstArray = [2,17,13,6,22,31,45,66,100,-18];
//     let i = 0;
//     while (i < firstArray.length) {
//         console.log(firstArray[i])
//         i++
// }


//          2. перебрати його циклом for

    // let firstArray = [2,17,13,6,22,31,45,66,100,-18];
    // for (let i = 0; i < firstArray.length; i++) {
    //     console.log(firstArray[i])
    // }


//          3. перебрати циклом while та вивести  числа тільки з непарним індексом

    // let firstArray = [2,17,13,6,22,31,45,66,100,-18];
    // let i = 0;
    // while (i < firstArray.length) {
    //     if (i % 2 === 1) {
    //         console.log(firstArray[i])
    //     }
    //     i++
    // }


//          4. перебрати циклом for та вивести  числа тільки з непарним індексом

    // let firstArray = [2,17,13,6,22,31,45,66,100,-18];
    // for (let i = 0; i < firstArray.length; i++) {
    //     if (i % 2 === 1) {
    //         console.log(firstArray[i])
    //     }
    // }


//          5. перебрати циклом while та вивести  числа тільки парні  значення

    // let firstArray = [2,17,13,6,22,31,45,66,100,-18];
    // let i = 1;
    // while (i < firstArray.length) {
    //     if (i % 2 === 0) {
    //         console.log(firstArray[i])
    //     }
    //     i++
    // }


//          6. перебрати циклом for та вивести  числа тільки парні  значення

    // let firstArray = [2,17,13,6,22,31,45,66,100,-18];
    // for (let i = 1; i < firstArray.length; i++) {
    //     if (i % 2 === 0) {
    //         console.log(firstArray[i])
    //     }
    // }


//          7. замінити кожне число кратне 3 на слово "okten"

    // let firstArray = [2,17,13,6,22,31,45,66,100,-18];
    // let i = 0;
    // while (i < firstArray.length) {
    //     if (firstArray[i] % 3 === 0) {
    //         firstArray[i] = 'okten';
    //     }
    //     console.log(firstArray[i])
    //     i++
    // }


//          8. вивести масив в зворотньому порядку.

    // let firstArray = [2,17,13,6,22,31,45,66,100,-18];
    // let i = firstArray.length-1;
    // while (i > -1) {
    //     console.log(firstArray[i])
    //     i--
    // }


//          9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

console.log('=================масив y зворотньому порядку.========================')
    let secondArray = [2,17,13,6,22,31,45,66,100,-18];
    for (let i = secondArray.length-1; i > -1; i--) {
        console.log(secondArray[i])
    }
console.log('=================числа тільки з непарним індексом========================')

    for (let i = secondArray.length-1; i > -1; i--) {               //  числа тільки з непарним індексом
        if (i % 2 === 1) {
            console.log(secondArray[i])
        }
    }
console.log('===================числа тільки з парним індексом======================')

    for (let i = secondArray.length-1; i > -1; i--) {               //  числа тільки з парним індексом
        if (i % 2 === 0) {
            console.log(secondArray[i])
        }
    }
console.log('===================Числа тільки з парним значнням======================')

    for (let i = secondArray.length-1; i > -1; i--) {               //  Числа тільки з парним значнням
        if (secondArray[i] % 2 === 0) {
            console.log(secondArray[i])
        }
    }
console.log('==================Числа тільки з непарним значенням=======================')

    for (let i = secondArray.length-1; i > -1; i--) {               //  Числа тільки з непарним значенням
        if (secondArray[i] % 2 === 1) {
            console.log(secondArray[i])
        }
    }
console.log('=================Заміна числа кратного "3" на "okten"========================')

    let i = secondArray.length - 1;                                 //  Заміна числа кратного "3" на "okten"
    while (i > -1) {
        if (secondArray[i] % 3 === 0) {
            secondArray[i] = 'okten';
        }   console.log(secondArray[i])
        i--
    }