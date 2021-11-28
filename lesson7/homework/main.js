// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// //   створити пустий масив, наповнити його 10 об'єктами new User(....)
//
//     function User(id, name, surname, email, phone) {
//         this.id = id
//         this.name = name
//         this.surname = surname
//         this.email = email
//         this.phone = phone
//     }
//
//     let user1 = new User(43,'Kevin', 'hart', 'kevin.hart@example.com', 6532717551)
//     let user2 = new User(22,'Evan', 'Berry', 'evan.berry@example.com', 6532757451)
//     let user3 = new User(13,'Joseph', 'Lopez', 'joseph.lopez@example.com', 6532817451)
//     let user4 = new User(41,'Kevin', 'hart', 'kevin.hart@example.com', 6532717451)
//     let user5 = new User(55,'Kevin', 'hart', 'kevin.hart@example.com', 6532417451)
//     let user6 = new User(6,'Kevin', 'hart', 'kevin.hart@example.com', 6532717451)
//     let user7 = new User(75,'Kevin', 'hart', 'kevin.hart@example.com', 6532716551)
//     let user8 = new User(18,'Kevin', 'hart', 'kevin.hart@example.com', 65324717451)
//     let user9 = new User(91,'Kevin', 'hart', 'kevin.hart@example.com', 65322917451)
//     let user10 = new User(10,'Kevin', 'hart', 'kevin.hart@example.com', 6532647451)
//
//     let usersArr = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10]
//     console.log(usersArr)
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// //  залишивши тільки об'єкти з парними id (filter)
//
//     let evenIdUser = usersArr.filter(user => user.id % 2 === 0)
//     console.log(evenIdUser)
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
//     let sortIdUser = usersArr.sort((a, b) => a.id - b.id)
//     console.log(sortIdUser)
//
//
// console.log('===========================================')
//
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// //   створити пустий масив, наповнити його 10 об'єктами Client
//
//     class Client {
//         constructor(id, name, surname, email, phone, order) {
//             this.id = id;
//             this.name = name;
//             this.surname = surname;
//             this.email = email;
//             this.phone = phone;
//             this.order = order;
//         }
//     }
//     let clientDataBase = [
//         new Client(43,'Kevin', 'hart', 'kevin.hart@example.com', 6532717551, ['PC', 'iphone', 'lamp']),
//         new Client(22,'Evan', 'Berry', 'evan.berry@example.com', 6532757451, ['PC', 'lamp']),
//         new Client(13,'Joseph', 'Lopez', 'joseph.lopez@example.com', 6532817451, ['PC', 'iphone', 'lamp', 'miBand']),
//         new Client(41,'Kevin', 'hart', 'kevin.hart@example.com', 6532717451, [ 'lamp']),
//         new Client(51,'Kevin', 'hart', 'kevin.hart@example.com', 6532717551, ['PC', 'iphone', 'lamp', 'laptop', 'tablet', 'graphic card']),
//         new Client(17,'Kevin', 'hart', 'kevin.hart@example.com', 6532717551, ['PC', 'tablet']),
//         new Client(25,'Kevin', 'hart', 'kevin.hart@example.com', 6532717551, ['PC', 'tablet', 'graphic card']),
//         new Client(22,'Kevin', 'hart', 'kevin.hart@example.com', 6532717551, ['mi band']),
//         new Client(44,'Kevin', 'hart', 'kevin.hart@example.com', 6532717551, ['PC', 'iphone', 'lamp','graphic card']),
//         new Client(2,'Kevin', 'hart', 'kevin.hart@example.com', 6532717551, ['PC', 'iphone', 'graphic card'])
//     ];
//     console.log(clientDataBase)
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості
// //   товарів в полі order по зростанню. (sort)
//
//     let orderSort = clientDataBase.sort((a,b) => a.order.length - b.order.length)
//     console.log(orderSort)