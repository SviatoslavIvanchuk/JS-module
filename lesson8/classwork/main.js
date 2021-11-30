/*Взяти файл template_2.html та працювати в ньому*/
/*1) Напишіть код, який :*/
/*  a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)*/
console.log(document.getElementById('main_header'))
let changeIdMain_header = document.getElementById('main_header').id = 'sep_2021'
// let changeIdSep_2021 = document.getElementById('sep_2021').id = 'main_header'
console.log(changeIdMain_header)


/*  b) робить шириниу елементу ul 400px*/
let ulElement = document.getElementsByTagName('ul');
ulElement[0].style.width = '400px'


/*  c) робить шириниу всіх елементів з класом linkList шириною 50%*/
let elementsWithClassLinkList = document.getElementsByClassName('linkList');
for (const liElement of elementsWithClassLinkList) {
    liElement.style.width = '50%'
}


/*  d) отримує текст який зберігається в елементі з класом listElement2*/
let saveTextInClassListElement2 = document.getElementsByClassName('listElement2');
console.log(saveTextInClassListElement2[0].textContent)


/*  e) отримує всі елементи li та змінює ім колір фону на сірий*/
let allLi = document.getElementsByTagName('li');
for (const li of allLi) {
    li.style.background = 'grey'
}

/*  f) отримує всі елементи 'a' та додає їм клас anchor*/
let allAElements = document.getElementsByTagName('a');
for (const a of allAElements) {
    a.classList.add('anchor')
}


/*  g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів*/
for (const a of allAElements) {
    if (a.textContent === 'link3') {
        a.style.fontSize = '40px'
    }
}


/*  h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a*/
for (const a of allAElements) {
    a.classList.add(`element_${a.textContent}`)
}


/*  i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()*!*/
let elementsSub_header = document.getElementsByClassName('sub-header');
let colorBackOne = prompt('Введіть колір фону: ')
for (const element of elementsSub_header) {
    element.style.background = colorBackOne;
}


/*  j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
                Колір отримати з prompt()*/
let colorTextOne = prompt('Введіть колір тексту: ')
for (const element of elementsSub_header) {
    if (element.textContent === 'content 2 segment') {
        element.style.color = colorTextOne;
    }
}

/*  k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()*/
let elementWithClassContent_1 = document.getElementsByClassName('content_1');
console.log(elementWithClassContent_1)
let changeText = prompt('Введіть текст: ')
elementWithClassContent_1[0].innerText = changeText;


/*  l) отримати елементи p та змінити їм padding на 20px*/
let pElements = document.getElementsByTagName('p');
for (const p of pElements) {
    p.style.padding = '40px'
}


/*  m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)*/
let elementsWithClassText2 = document.getElementsByClassName('text2');
for (const element of elementsWithClassText2) {
    element.innerHTML = 'SEP_2021';
}