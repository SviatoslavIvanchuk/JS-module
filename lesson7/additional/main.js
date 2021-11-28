// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }


// class Users {
//     constructor(id, name, username, email, address, street, phone, website, company) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = address;
//         this.phone = phone;
//         this.website = website;
//         this.company = company;
//     }
// }
//
// class Address {
//     constructor(street, suite, city, zipcode, geo) {
//         this.street = street;
//         this.suite = suite;
//         this.city = city;
//         this.zipcode = zipcode;
//         this.geo = geo;
//     }
// }
//
//     class AddressGeo {
//         constructor(lat, lng) {
//             this.lat = lat;
//             this.lng = lng;
//         }
//     }
//
//     class Company {
//         constructor(name, catchPhrase, bs) {
//             this.name = name;
//             this.catchPhrase = catchPhrase;
//             this.bs = bs;
//         }
//     }
//
// let geo = new AddressGeo('-37.3159','81.1496')
// let address = new Address('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', geo)
// let company = new Company('Romaguera-Crona', 'Multi-layered client-server neural-net','harness real-time e-markets' )
//
// let user = new Users(1, 'Leanne Graham', 'Bret','Sincere@april.biz',
//     address, '1-770-736-8031 x56442', '1-770-736-8031 x56442', 'hildegard.org', company)
//
// console.log(user)



// -  Створити функцію конструктор / клас  який описує об'єкт тегу
//      Поля :
//     -назва тегу ()
//     - опис його дій
//     - масив з атрибутами (2-3 атрибути максимум)
//    Кожен атрибут описати як окремий який буде містити
//     -назву атрибуту
//     -опис дії атрибуту
//   інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


// class Tags {
//     constructor(tagName, tagAction, attrNameOne, attrActionOne, attrNameTwo, attrActionTwo) {
//         this.tagName = tagName;
//         this.tagAction = tagAction;
//         this.attr = [
//             {attrNameOne: attrNameOne, attrActionOne: attrActionOne},
//             {attrNameTwo: attrNameTwo, attrsActionTwo: attrActionTwo}
//             ]
//     }
// }
//
// let tagA = new Tags(
//     '<a>', 'является одним из важных элементов HTML и предназначен для создания ссылок.',
//     'accesskey','Активация ссылки с помощью комбинации клавиш.',
//     'download', 'Предлагает скачать указанный по ссылке файл.')
// console.log(tagA)
//
// let tagDiv = new Tags(
//     '<div>', 'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//     'align', 'Задает выравнивание содержимого тега <div>',
//     'title','Добавляет всплывающую подсказку к содержимому.'
// )
// console.log(tagDiv)
//
// let tagH1 = new Tags(
//     '<h1>', 'представляет собой наиболее важный заголовок первого уровня',
//     'align', 'Определяет выравнивание заголовка.',
//     'hidden', 'Скрывает содержимое элемента от просмотра.'
// )
// console.log(tagH1)
//
// let tagSpan = new Tags(
//     '<span>', 'предназначен для определения строчных элементов документа',
//     'class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.',
//     'dir', 'Задает направление и отображение текста — слева направо или справа налево.'
// )
// console.log(tagSpan)
//
// let tagInput = new Tags(
//     '<input>', 'является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//     'autofocus', 'Устанавливает фокус в поле формы.',
//     'list', 'Указывает на список вариантов, которые можно выбирать при вводе текста.'
// )
// console.log(tagInput)
//
// let tagForm = new Tags(
//     '<form>', 'устанавливает форму на веб-странице.',
//     'action', 'Адрес программы или документа, который обрабатывает данные формы.',
//     'enctype', 'Способ кодирования данных формы.'
// )
// console.log(tagForm)
//
// let tagOption = new Tags(
//     '<option>', 'определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
//     'label', 'Указание метки пункта списка.',
//     'selected', 'Заранее устанавливает определенный пункт списка выделенным.'
// )
// console.log(tagOption)
//
// let tagSelect = new Tags(
//     '<select>', 'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
//     'multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка.',
//     'required', 'Список обязателен для выбора перед отправкой формы.'
// )
// console.log(tagSelect)