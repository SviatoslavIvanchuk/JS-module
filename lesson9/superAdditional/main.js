let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
for (const user of users) {
    let addressUser = user.address;
    console.log(addressUser)
}


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//      Всі данні в одному блоці.

let blocWithUsersOne = document.createElement('div');
document.body.appendChild(blocWithUsersOne)

for (const user of users) {
    let userBloc = document.createElement('div');
    userBloc.innerText = `${user.name}; ${user.age}; ${user.status}; ${user.address.city}; ${user.address.country}; ${user.address.street}; ${user.address.houseNumber}`
    blocWithUsersOne.appendChild(userBloc)
}
document.write('<hr/>')

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//      розділивши всі властивості по своїм блокам (div>div*4)

let blocWithUsersTwo = document.createElement('div');
document.body.appendChild(blocWithUsersTwo)

for (const user of users) {
    let userBloc = document.createElement('div');
        userBloc.style.border = '2px solid aqua'
        userBloc.style.margin = '2px'
    let name = document.createElement('div');
        name.innerText = `Name: ${user.name}`;
    let age = document.createElement('div');
        age.innerText = `Age: ${user.age}`;
    let status = document.createElement('div');
        status.innerText = `Status: ${user.status}`
    let address = document.createElement('div');
        address.innerText = `Address: ${user.address.city}, ${user.address.country}, ${user.address.street}, ${user.address.houseNumber}`

    userBloc.appendChild(name)
    userBloc.appendChild(age)
    userBloc.appendChild(status)
    userBloc.appendChild(address)

    blocWithUsersTwo.appendChild(userBloc)
}
document.write('<hr/>')

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//      розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

let blocWithUsersThree = document.createElement('div');
document.body.appendChild(blocWithUsersThree)

for (const user of users) {
    let userBloc = document.createElement('div');
    userBloc.style.border = '2px solid aqua';
    userBloc.style.margin = '2px';
    let name = document.createElement('div');
    name.innerText = `Name: ${user.name}`;
    let age = document.createElement('div');
    age.innerText = `Age: ${user.age}`;
    let status = document.createElement('div');
    status.innerText = `Status: ${user.status}`;
    let address = document.createElement('div');
        let addressCity = document.createElement('div');
            addressCity.innerText = `City: ${user.address.city}`;
        let addressCountry = document.createElement('div');
            addressCountry.innerText = `Country: ${user.address.country}`;
        let addressStreet = document.createElement('div');
            addressStreet.innerText = `Street: ${user.address.street}`;
        let addressHouseNumber = document.createElement('div');
            addressHouseNumber.innerText = `House number: ${user.address.houseNumber}`;

    userBloc.appendChild(name)
    userBloc.appendChild(age)
    userBloc.appendChild(status)
    userBloc.appendChild(address)
        address.appendChild(addressCity)
        address.appendChild(addressCountry)
        address.appendChild(addressStreet)
        address.appendChild(addressHouseNumber)

    blocWithUsersThree.appendChild(userBloc)
}
document.write('<hr/>')

    // ======================================================

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rulesBloc = document.createElement('div')
    rulesBloc.setAttribute('id', 'wrap')
document.body.appendChild(rulesBloc)
let i = 1;
for (const rule of rules) {
    let ruleBloc = document.createElement('div');
        ruleBloc.classList.add('rules')
        ruleBloc.setAttribute('id','rule' + i)
        i++
    let title = document.createElement('h3');
        title.innerText = rule.title;
    let body = document.createElement('p');
        body.innerText = rule.body;

    ruleBloc.appendChild(title)
    ruleBloc.appendChild(body)

    rulesBloc.appendChild(ruleBloc)
}