// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

//     let firstArray = [];
//     for (let i = 0; i < 50; i++) {
//        firstArray.push(i*2+2);
//     }
//     for (let i = 50; i < 150; i++) {
//        if (i % 2 === 1) {
//            firstArray.push(i);
//        }
//     }
//      for (let i = 150; i < 170; i++) {
//         firstArray.push(Math.floor(Math.random() * 50)+150);
//      }
//     for (let i = 170; i < 190; i++) {
//         firstArray.push(Math.floor(Math.random() * 732)+8);
//     }   console.log(firstArray);
//
//     console.log('2. Вивести за допомогою console.log кожен третій елемен')
// // 2. Вивести за допомогою console.log кожен третій елемен
//
//     for (let i = 0; i < firstArray.length; i+= 3) {
//                  console.log(firstArray[i])
//     }
//
//     console.log('3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.')
// // 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//
//     for (let i = 0; i < firstArray.length; i+= 3) {
//         if (firstArray[i] % 2 === 0) {
//             console.log(firstArray[i])
//         }
//     }
//
//     console.log('4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив')
// // 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//
//     let secondArray = [];
//     for (let i = 0; i < firstArray.length; i+= 3) {
//          if (firstArray[i] % 2 === 0) {
//             secondArray.push(firstArray[i])
//          }
//     }




// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

    // let example = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
    // for (let i = 0; i < example.length; i++) {
    //     if (example[i+1] % 2 === 0) {
    //         console.log(example[i])
    //     }
    // }




// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

    let price = [100,250,50,168,120,345,188];
    price.sort(function(a, b) {
        return a - b;
    }); console.log(price);
    for (let i = 0; i < price.length; i++) {

    }



// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.



