// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
//              та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let formOne = document.createElement('form');
formOne.setAttribute('id', 'f1');
    let inputOneUserName = document.createElement('input');
        inputOneUserName.name = 'userName';
        inputOneUserName.placeholder = 'User name'
    let inputOneAgeUser = document.createElement('input');
        inputOneAgeUser.name = 'age';
        inputOneAgeUser.placeholder = 'User age'

formOne.append(inputOneUserName)
formOne.append(inputOneAgeUser)

let formTwo = document.createElement('form');
formTwo.setAttribute('id', 'f2');
    let inputTwoUserCity = document.createElement('input');
        inputTwoUserCity.name = 'City';
        inputTwoUserCity.placeholder = 'City';
    let inputTwoUserCountry = document.createElement('input');
        inputTwoUserCountry.name = 'Country';
        inputTwoUserCountry.placeholder = 'Country';

formTwo.append(inputTwoUserCity)
formTwo.append(inputTwoUserCountry)

let createButton = document.createElement('button');
createButton.innerText = 'Info'

document.body.append(formOne)
document.body.append(formTwo)
document.body.append(createButton)

createButton.onclick = function () {
    let userName = formOne.userName.value;
    let age = formOne.age.value;
    let city = formTwo.City.value;
    let country = formTwo.Country.value;
    console.log({Name: userName , age: age, City: city, Country: country})
}

document.write('<hr/>')


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let formTable = document.createElement('div');
    formTable.setAttribute('id', 'formTable')

let linesInput = document.createElement('input');
    linesInput.type = 'number';
    linesInput.name = 'lines';
let cellsInput = document.createElement('input');
    cellsInput.type = 'number';
    cellsInput.name = 'cells';
let contentInput = document.createElement('input');
    contentInput.name = 'content'
let buttonTable = document.createElement('button');
    buttonTable.innerText = 'Create table'

formTable.append(linesInput)
formTable.append(cellsInput)
formTable.append(contentInput)
formTable.append(buttonTable)

document.body.append(formTable)

let tableBlock = document.createElement('div')

buttonTable.onclick = function () {
        for (let i = 0; i < linesInput.value; i++) {
            let linesBlock = document.createElement('div')
            linesBlock.classList.add('linesBlock')
            tableBlock.append(linesBlock)

            for (let i = 0; i < cellsInput.value; i++) {
                let cellsBlock = document.createElement('div')
                cellsBlock.classList.add('cellsBlock')
                cellsBlock.innerText = contentInput.value;

                linesBlock.append(cellsBlock);
            }
        }
}
document.body.append(tableBlock)

document.write('<hr/>')

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//     кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let creativeWord = ['кретин', 'дурбецало', 'дурень', 'свинтус', 'йолоп', 'бухло']


// let inputWord = document.createElement('input');
//     inputWord.type = 'text';
//     inputWord.name = 'wordCreative';
//
// let buttonWord = document.createElement('button')
//     buttonWord.innerText = 'Check word'
//
// buttonWord.onclick = function () {
//     for (const word of creativeWord) {
//         if (inputWord.value === word) {
//             alert('Ай-яй-яй, як не виховано!')
//             inputWord.value = '';
//             return;
//         }
//     }
//     if (inputWord.value) {
//         alert('Хороше слово')
//     }
// }
//
// document.body.append(inputWord)
// document.body.append(buttonWord)


    // - Сворити масив не цензцрних слів.
    // Сворити інпут текстового типу.
    // Потрібно перевіряти чи не містить ціле речення в собі погані слова.
    // Кинути алерт з попередженням у випадку якщо містить.
    // Перевірку робити при натисканні на кнопку

let inputSentence = document.createElement('input');
    inputSentence.name = 'wordChecker';
    inputSentence.type = 'text';
let buttonCheck = document.createElement('button');
    buttonCheck.innerText = 'Check Sentence'

// let createArrInputSentence = inputSentence.value.split(' ');
// console.log(inputSentence.value)

buttonCheck.onclick = function () {
    let createArrInputSentence = inputSentence.value.split(' ');
    // console.log(createArrInputSentence)

    for (let i = 0; i < createArrInputSentence.length; i++) {
        // console.log(createArrInputSentence[i])

        for (const word of creativeWord) {
            if (word === createArrInputSentence[i]) {
                alert('В реченні є погане слово: ' + `${createArrInputSentence[i]}`)
            }
        }
    }
}

document.body.append(inputSentence)
document.body.append(buttonCheck)