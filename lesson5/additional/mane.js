// - Дано натуральное число n. Выведите все числа от 1 до n.

let naturalNumber = (n) => {
    document.write('<div class="d_flex">')
        for (let i = 1; i <= n; i++) {
                document.write(`<h3>${i}, </h3>`)
        }
    document.write('</div>')
}
naturalNumber(10)



// - Даны два целых числа A и В . Выведите все числа от A до B включительно,
//   в порядке возрастания, если A < B, или в порядке убывания в противном случае.

let writeNumbers = (A,B) => {
    document.write('<div class="d_flex">')
        if (A < B) {
            for (let i = A; i <= B; i++ ){
                document.write(`<h4>${i}, </h4>`)
            }
        } else if (A > B) {
            for (let i = A; i >= B; i-- ) {
                document.write(`<h4>${i}, </h4>`)
            }
        } else {document.write('False Value')}
    document.write('</div>')
}
writeNumbers(10,1)


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let arrayChangeItem = (arr, i) => {
    let change = arr[i+1]
    arr[i+1] = arr[i]
    arr[i] = change;
    return arr
}

let arrayFourth = [9, 8, 0, 4];
console.log(arrayFourth)
console.log(arrayChangeItem(arrayFourth, 1))


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
//         Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]

let arrayZeroPushEnd = (arr) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArray.push(arr[i])
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            newArray.push(arr[i])
        }
    }
    return newArray
}
let arrayFifth = [1,0,6,0,3];
console.log(arrayZeroPushEnd(arrayFifth))