// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//
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
// //
//     console.log('4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив')
// // // 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// //
//     let secondArray = [];
//     for (let i = 0; i < firstArray.length; i+= 3) {
//         if (firstArray[i] % 2 === 0) {
//             // console.log(firstArray[i])
//             secondArray[i] = firstArray[i];
//         console.log(secondArray[i])
//         }
//     }   console.log(secondArray)




// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

    // let example = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
    // for (let i = 0; i < example.length; i++) {
    //     if (example[i+1] % 2 === 0) {
    //         console.log(example[i])
    //     }
    // }




// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

    // let price = [100,250,50,168,120,345,188];
    // price.sort(function(a, b) {
    //     return a - b;
    // }); console.log(price);



// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

    // let thirdArray = [];
    // let thirdArrayX5 = [];
    // for (let i = 0; i < 10; i++) {
    //     thirdArray.push(Math.floor(Math.random() * 30))
    //     thirdArrayX5[i] = thirdArray[i]*5;
    // }   console.log(thirdArray)
    //    console.log(thirdArrayX5)

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

    // let fourthArray = ['one', 'three', 1, false, 2, 'five', true, 10, 15, 'burger', 'air'];
    // let fourthArrayNumbers = [];
    // for (let i = 0; i < fourthArray.length; i++) {
    //     if (typeof fourthArray[i] === 'number') {
    //         // console.log(fourthArray[i])
    //         fourthArrayNumbers[i] = fourthArray[i];
    //         console.log(fourthArrayNumbers[i]);
    //     }
    // }



// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];







// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

    // let arrNumber = [];
    // for (let i = 0; i < 10; i++) {
    //     arrNumber.push(Math.floor(Math.random()*50) + 5)
    //     if (arrNumber[i] % 2 === 0) {
    //         console.log(arrNumber[i])
    //     }
    // }   console.log(arrNumber)



// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

    // let arrNumberTwo = [];
    // let arrNumberTwoEmpty = [];
    // for (let i = 0; i < 10; i++) {
    //     arrNumberTwo.push(Math.floor(Math.random()*50)+50)
    //     arrNumberTwoEmpty[i] = arrNumberTwo[i]
    // }   console.log(arrNumberTwoEmpty)



