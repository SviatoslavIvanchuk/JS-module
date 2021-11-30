// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// -- отримує текст з параграфа з id "content"
let pIdContent = document.getElementById('content');
let pIdContentText = pIdContent.textContent;
console.log(pIdContentText)


// -- отримує текст з блоку з id "rules"
let divIdRules = document.getElementById('rules');
let divIdRulesText = divIdRules.textContent;
console.log(divIdRulesText)


// -- замініть текст параграфа з id 'content' на будь-який інший
pIdContent.innerText = 'Первое правило Бойцовского клуба: никому не рассказывать о Бойцовском клубе.'


// -- замініть текст параграфа з id 'rules' на будь-який інший
divIdRules.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, assumenda!'


// -- змініть кожному елементу колір фону на червоний
let bodyElements = document.body.children
console.log(bodyElements)
for (const Element of bodyElements) {
    Element.style.background = 'red';
}


// -- змініть кожному елементу колір тексту на синій
for (const Element of bodyElements) {
    Element.style.color = 'blue'
}


// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classListWithIdRules = divIdRules.classList;
console.log(classListWithIdRules)


// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let textWithClassFc_Rules = document.getElementsByClassName('fc_rules');
for (const fc_rulesElement of textWithClassFc_Rules) {
    fc_rulesElement.style.color = 'silver';
}