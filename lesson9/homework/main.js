// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let classListOne = ['wrap', 'collapse', 'alpha', 'beta']
let divBloc = document.createElement('div');
divBloc.innerText = 'Hello Okten';
divBloc.style.background = 'aqua';
divBloc.style.color = 'red';
divBloc.style.fontSize = '44px';
divBloc.style.width = '300px';
divBloc.style.margin = '10px';
document.body.appendChild(divBloc)

for (const Element of classListOne) {
    divBloc.classList.add(Element)
}

let cloneDivBloc = divBloc.cloneNode(true);
document.body.appendChild(cloneDivBloc);



// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його
// до блоку .menu
// Завдання робити через цикли.

let arrayInfo = ['Main','Products','About us','Contacts'];
let ulBloc = document.body.getElementsByClassName('menu')[0];

for (const Element of arrayInfo) {
    let liBloc = document.createElement('li');
    ulBloc.appendChild(liBloc);
    liBloc.innerText = Element;
}


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesDivBloc = document.createElement('div');
// document.body.appendChild(coursesDivBloc)
// for (const coursesElement of coursesAndDurationArray) {
//     let divWithCourse = document.createElement('div');
//     coursesDivBloc.appendChild(divWithCourse);
//     divWithCourse.innerText = 'Курс ' + coursesElement.title + ' триває ' + coursesElement.monthDuration + ' місяців'
// }


// - Є масив

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let divCoursesBloc = document.createElement('div');
document.body.appendChild(divCoursesBloc)

for (const CourseElement of coursesAndDurationArray) {
    let divCourseBloc = document.createElement('div')
    divCourseBloc.classList.add('item')

    let h1 = document.createElement('h1');
    h1.classList.add('heading')
    h1.innerText = CourseElement.title;
    let p = document.createElement('p')
    p.classList.add('description')
    p.innerText = CourseElement.monthDuration

    divCourseBloc.appendChild(h1)
    divCourseBloc.appendChild(p)
    divCoursesBloc.appendChild(divCourseBloc)
}
