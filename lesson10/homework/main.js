// - Создать произвольный елемент с id = text.
//   Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let firstTask = document.createElement('div');
firstTask.classList.add('firstTaskClass')
firstTask.setAttribute('id', 'text')
document.body.appendChild(firstTask);

let buttonOne = document.getElementById('btnOne');
buttonOne.onclick = function () {
    firstTask.hidden = true;
}


    // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let buttonTwo = document.getElementById('btnTwo');
buttonTwo.onclick = function () {
    buttonTwo.hidden = true;
}


    // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//          інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let buttonThree = document.getElementById('btnThree');
buttonThree.onclick = function () {
    let ageCheck = document.getElementById('age').value;
    if (ageCheck < 18) {
        alert('You are too young')
    } else {
        alert('Welcome')
    }
}


    // - Создайте меню, которое раскрывается/сворачивается при клике

let films = document.getElementsByClassName('films')[0];
let titleFilms = films.getElementsByClassName('title')[0];
titleFilms.onclick = function () {
    let filmsList = document.getElementsByClassName('filmsList')[0];
    filmsList.style.display = 'none';
}
titleFilms.ondblclick = function () {
    let filmsList = document.getElementsByClassName('filmsList')[0];
    filmsList.style.display = 'block';
}

document.write('<hr/>')

    // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
    // Вывести список комментариев в документ, каждый в своем блоке.
    // Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
];

let commentsList = document.createElement('div')
commentsList.classList.add('commentsList')


for (const comment of comments) {
    let commentBlock = document.createElement('div')

    let h4 = document.createElement('h4')
        h4.innerText = comment.title;
    let p = document.createElement('p');
        p.innerText = comment.body;
    let buttonBody = document.createElement('button');
        buttonBody.innerText = 'HideBody'

    buttonBody.onclick = function () {
            p.hidden = true;
    }
    buttonBody.ondblclick = function () {
            p.hidden = false;
    }

    commentBlock.append(h4);
    commentBlock.append(p);
    commentBlock.append(buttonBody)

    commentsList.appendChild(commentBlock)
}
document.body.append(commentsList)