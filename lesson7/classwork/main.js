// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
//   виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    // function Cars(model, automaker, year, maxSpeed, engine) {
    //     this.model = model;
    //     this.automaker = automaker;
    //     this.year = year;
    //     this.maxSpeed = maxSpeed;
    //     this.engine = engine;
    //     this.drive = function () {
    //         console.log(`Їдемо зі швидкістю ${maxSpeed} на годину`)
    //     }
    //     this.info = function () {
    //         for (const thisElement in this) {
    //             if (typeof this[thisElement] !== 'function' ) {
    //                 document.write(`${thisElement} - ${this[thisElement]}` + '<br/>')
    //             }
    //         }
    //     }
    //     this.increaseMaxSpeed = function (newSpeed) {
    //         this.maxSpeed = this.maxSpeed + newSpeed;
    //     }
    //     this.changeYear = function (newValue) {
    //         this.year = newValue;
    //     }
    //     this.addDriver = function (driver) {
    //         this.driver = driver;
    //     }
    // }
    // let car = new Cars('Nissan GT-R', 'Nissan Motor', 2007, 240, 3.8)
    // console.log(car)
    // car.drive()
    // car.info()
    // car.increaseMaxSpeed(80)
    // car.changeYear(2013)
    // car.addDriver('Kevin')
    // document.write('<hr/>')
    // console.log(car)
    // car.info()


//     - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//      максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Cars {
//     constructor(model, automaker, year, maxSpeed, engine) {
//         this.model = model;
//         this.automaker = automaker;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//     drive () {
//         return 'Їдемо зі швидкістю ' + `${this.maxSpeed}` + ' кілометрів на годину'
//     }
//     info () {
//         for (const thisElement in this) {
//             document.write(`${thisElement} - ${this[thisElement]}` + `<br/>`)
//         }
//     }
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     }
//     changeYear (newValue) {
//         return this.year = newValue;
//     }
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
//
// let carDodge = new Cars('Dodge Viper', 'Chrysler Corporation', 1995, 290, 8)
// console.log(carDodge)
// console.log(carDodge.drive())
// carDodge.info()
// carDodge.increaseMaxSpeed(16)
// console.log(carDodge.changeYear(2017))
// carDodge.addDriver('Kevin')
// document.write('<hr/>')
// console.log(carDodge)
// carDodge.info()



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// class Cinderella {
//
//     constructor(name, year, size) {
//         this.name = name;
//         this.year = year;
//         this.size = size;
//     }
// }
//
// let listCinderella = [
//     new Cinderella('Olivia', 18, 36),
//     new Cinderella('Ava', 21, 36),
//     new Cinderella('Charlotte', 14, 36),
//     new Cinderella('Sophia', 15, 35),
//     new Cinderella('Amelia', 19, 38),
//     new Cinderella('Isabella', 20, 39),
//     new Cinderella('Emma', 16, 34),
//     new Cinderella('Mia', 15, 40),
//     new Cinderella('Emily', 14, 38),
//     new Cinderella('Nora', 18, 36)
// ]
// class Prince {
//     constructor(name, year, sizeShose) {
//         this.name = name;
//         this.year = year;
//         this.sizeShose = sizeShose;
//     }
// }
// let PrinceEdvard = new Prince('Edvard', 18, 34)
//
// let wedding = (Cinderella, Prince) => {
//     for (const cinderellaElement of Cinderella) {
//         if (cinderellaElement.size === Prince.sizeShose) {
//             document.write(`Весілля відбудется у ${Prince.name} і ${cinderellaElement.name}`)
//         }
//     }
// }
// wedding(listCinderella, PrinceEdvard)