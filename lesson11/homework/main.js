// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let userBlock = document.createElement('div');

let userBlockInputOne = document.createElement('input');
    userBlockInputOne.placeholder = 'Name';
let userBlockInputTwo = document.createElement('input');
    userBlockInputTwo.placeholder = 'Age';
let userBlockButtonSend = document.createElement('button');
    userBlockButtonSend.innerText = 'Send Info'

userBlockButtonSend.onclick = function () {
        localStorage.setItem('Name', `${userBlockInputOne.value}`)
        localStorage.setItem('Age', `${userBlockInputTwo.value}`)
        userBlockInputOne.value = '';
        userBlockInputTwo.value = '';
}

userBlock.append(userBlockInputOne)
userBlock.append(userBlockInputTwo)
userBlock.append(userBlockButtonSend)
document.body.append(userBlock)

document.write('<hr/>')

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let carBlock = document.createElement('div');

let carBlockInputOne = document.createElement('input');
    carBlockInputOne.placeholder = 'Model';
let carBlockInputTwo = document.createElement('input');
    carBlockInputTwo.placeholder = 'Type';
let carBlockInputThree = document.createElement('input');
    carBlockInputThree.placeholder = 'Volume';
let carBlockButtonSend = document.createElement('button');
    carBlockButtonSend.innerText = 'Send Info'

carBlockButtonSend.onclick = function () {
        let model = carBlockInputOne.value;
        let type = carBlockInputTwo.value;
        let volume = carBlockInputThree.value;
        let carArr = {Model: model, Type: type, Volume: volume}
        localStorage.setItem('Car', JSON.stringify(carArr))

        carBlockInputOne.value = '';
        carBlockInputTwo.value = '';
        carBlockInputThree.value = '';
}

carBlock.append(carBlockInputOne);
carBlock.append(carBlockInputTwo);
carBlock.append(carBlockInputThree);
carBlock.append(carBlockButtonSend)

document.body.append(carBlock)