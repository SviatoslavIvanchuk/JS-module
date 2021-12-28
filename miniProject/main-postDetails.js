let post = JSON.parse(localStorage.getItem('post'));
    console.log(post)

let postDetails = document.createElement('div');
    postDetails.classList.add('postDetails');

    // console.log(post.title)
    let postDetailBlock = document.createElement('div');
        postDetailBlock.classList.add('postDetailBlock')
    let postH3 = document.createElement('h3');
        postH3.innerText = `${post.title}`;
    let postP = document.createElement('p');
        postP.innerText = `${post.body}`;

    postDetailBlock.append(postH3)
    postDetailBlock.append(postP)
postDetails.append(postDetailBlock)

document.body.append(postDetails)

let commentsBlock = document.createElement('div');
    commentsBlock.classList.add('comments')
    postDetails.append(commentsBlock)
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        for (const comment of comments) {
            if (comment.postId === post.id) {
                let commentBlock = document.createElement('div')
                    commentBlock.classList.add('commentBlock')

                    let commentName = document.createElement('h4')
                        commentName.innerText = `${comment.name}`
                    let commentNameEmail = document.createElement('h6')
                        commentNameEmail.innerText = `${comment.email}`
                    let commentBody = document.createElement('p');
                        commentBody.innerText = `${comment.body}`

                    commentBlock.append(commentName)
                    commentBlock.append(commentNameEmail)
                    commentBlock.append(commentBody)
                commentsBlock.append(commentBlock)
            }
        }
    })