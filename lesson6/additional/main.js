// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
//      данні до знака равлика(@),
//      наявність равлика,
//      крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
//      функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
let emailAddressOne = 'someemail@gmail.com';
let emailAddressTwo = 'someeMAIL@gmail.com';
let emailAddressThree = 'someeMAIL@i.ua';
let emailAddressFour = 'some.email@gmail.com';

let email = (email) => {
    let emailStr = email.toLowerCase().split('')
    if ((emailStr.indexOf('@', 1)  !== -1) && (emailStr.lastIndexOf('.') - emailStr.indexOf('@') > 2) && (emailStr.indexOf('.') - emailStr.indexOf('@') > 0)) {
       return document.write('Email прийнято')
    } else {return  document.write('Email не прийнято')}
}
document.write(emailAddressOne + ' - ')
email(emailAddressOne)
document.write('<br/>')
document.write(emailAddressTwo + ' - ')
email(emailAddressTwo)
document.write('<br/>')
document.write(emailAddressThree + ' - ')
email(emailAddressThree)
document.write('<br/>')
document.write(emailAddressFour + ' - ')
email(emailAddressFour)
document.write('<br/>')

console.log('======================================')
document.write('<hr>')


// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

let sortCoursesArray = coursesArray.sort((a,b) => {
    return a.modules.length - b.modules.length
})
console.log(sortCoursesArray)

console.log('======================================')
document.write('<hr>')


// - Напишіть функцію count(str, stringSearch), яка повертає кількість символів stringSearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let symb = 'о';
let str = 'Астрономия это наука о небесных объектах';
let count = (str, stringSearch) => {
    let arrSymb = [];
    let strArr = str.split('')
    for (const strArrElement of strArr) { strArrElement === stringSearch? arrSymb.push(strArrElement) : false }
    return arrSymb.length
}
document.write(count(str, symb).toString())
console.log(count(str, symb))

console.log('======================================')
document.write('<hr>')


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let strSecond = 'Сила тяжести приложена к центру масс тела';
let cutString = (str, n) => {
    let strArr = str.split(' ')
    return strArr.slice(0,n)
}
document.writeln(cutString(strSecond,5).join(' '))