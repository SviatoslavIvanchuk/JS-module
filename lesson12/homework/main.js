// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

let usersPosts = document.createElement('div');
    usersPosts.classList.add('posts')
    usersPosts.setAttribute('id', 'task1')

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            for (const post of posts) {
                // console.log(post)
            let postBlock = document.createElement('div');
                postBlock.classList.add('post')
                for (const postItem in post) {
                    // console.log(post[postItem])
                    let itemBlock = document.createElement('div');
                    itemBlock.innerHTML = `<strong>${postItem}:</strong> ${post[postItem]}`;
                    postBlock.append(itemBlock)
                }
            usersPosts.append(postBlock)
            }
        })
document.body.append(usersPosts)

document.write('<hr/>')
document.write('<hr/>')

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let commentsBlock = document.createElement('div');
    commentsBlock.classList.add('comments')
    commentsBlock.setAttribute('id', 'task2')

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(comments => {
            for (const comment of comments) {
                // console.log(comment.postId)
                let commentBlock = document.createElement('div');
                    commentBlock.classList.add('comment')
                for (const commentItem in comment) {
                    // console.log(commentItem)
                    let commentKey = document.createElement('div');
                    commentKey.innerHTML = `<strong>${commentItem}:</strong> ${comment[commentItem]}`
                    commentBlock.append(commentKey)
                }
                commentsBlock.append(commentBlock)
            }
        })
    document.body.append(commentsBlock);