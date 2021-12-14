// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let postsBlock = document.createElement('div');
    postsBlock.classList.add('posts');

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            for (const post of posts) {
                let postDiv = document.createElement('div');
                    postDiv.classList.add('post');
                    postDiv.innerHTML = `<h3>${post.id}. ${post.title}</h3> <p>${post.body}</p>`;

                let postButton = document.createElement('button');
                    postButton.classList.add('postButton');
                    postButton.innerText = 'Comments'

                postButton.onclick = function () {

                    let commentBlock = document.createElement('div')
                    commentBlock.classList.add('commentBlock')

                    let commentOffButton = document.createElement('button')
                        commentOffButton.classList.add('offCommentButton')
                        commentOffButton.innerText = 'Leave Comments'

                        fetch('https://jsonplaceholder.typicode.com/comments')
                            .then(response => response.json())
                            .then(comments => {
                                for (const comment of comments) {
                                    if (post.id === comment.postId) {
                                        let commentsList = document.createElement('div')
                                        commentsList.innerHTML = `<h4>${comment.id}. ${comment.name}</h4>
                                                                  <h5>Email: ${comment.email}</h5>
                                                                  <p>${comment.body}</p>
                                                                  <hr>`;
                                        commentBlock.append(commentsList)
                                    }
                                }
                            })
                    commentOffButton.onclick = function () {
                        commentBlock.style.display = 'none';
                        commentOffButton.style.display = 'none';
                    }
                    document.body.append(commentOffButton)
                    document.body.append(commentBlock)
                }

                postDiv.append(postButton)
                postsBlock.append(postDiv)
            }
        })
document.body.append(postsBlock)