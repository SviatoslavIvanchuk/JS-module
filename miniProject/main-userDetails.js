let userDetails = JSON.parse(localStorage.getItem('user'));
console.log(userDetails)

let userDetailBlock = document.createElement('div');
    userDetailBlock.classList.add('userDetail')
    document.body.append(userDetailBlock)
function userDetailsList(userDetails) {
    for (let userDetailsKey in userDetails) {

        if (typeof userDetails[userDetailsKey] === 'string' || typeof userDetails[userDetailsKey] === 'number'){
            let h2 = document.createElement('h2');
                h2.innerText = `${userDetailsKey}: ${userDetails[userDetailsKey]}`;

                userDetailBlock.append(h2)
        }
        else if (typeof userDetails[userDetailsKey] === 'object') {
            let value = userDetails[userDetailsKey];
            let ulAddress = document.createElement('ul')
                ulAddress.innerHTML = `<h2>${userDetailsKey}:</h2>`

            userDetailBlock.append(ulAddress)

            for (let valueKey in value) {
                if (typeof value[valueKey] === 'string') {

                    let liAddress = document.createElement('li');
                        liAddress.innerHTML = `<h4>${valueKey}: ${value[valueKey]}</h4>`

                    ulAddress.append(liAddress)
                }
                else if (typeof value[valueKey] === 'object') {
                    for (let valueKeyKey in value[valueKey]) {

                        let h4 = document.createElement('h4');
                            h4.innerText = `${valueKeyKey}: ${value[valueKey][valueKeyKey]}`;

                     ulAddress.append(h4)
                    }
                }
            }
        }
    }
}
userDetailsList(userDetails)

let postsButtonBlock = document.createElement('div');
    postsButtonBlock.classList.add('buttonBlock');
    document.body.append(postsButtonBlock)
let postsButton = document.createElement('button');
    postsButton.classList.add('buttonStyle')
    postsButton.innerText = 'Post of current user';
    postsButtonBlock.append(postsButton)

postsButton.onclick = () => {
    let postsListBlock = document.createElement('div')
        postsListBlock.classList.add('postsList')

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            for (const post of posts) {
                let postBlock = document.createElement('div');
                    postBlock.classList.add('postBlock')

                    // postBlock.onclick = () => {
                    // let postString = JSON.stringify('post')
                    // localStorage.setItem('post', postString)
                    // }
                    // console.log(typeof post)

                if (post.userId === userDetails.id) {
                    postBlock.innerHTML = `<a href="post-details.html"><h4>${post.title}</h4></a>`
                    postsListBlock.append(postBlock)

                    postBlock.onclick = () => {
                        let postString = JSON.stringify(post)
                        localStorage.setItem('post', postString)
                    }
                    // console.log(typeof post)
                    }
            }
        })

    userDetailBlock.append(postsListBlock)
    let postsListCloseButton = document.createElement('button')
    postsListCloseButton.classList.add('buttonClose')

    postsListCloseButton.onclick = () => {
        postsListBlock.style.display = 'none';
    }
    postsListBlock.append(postsListCloseButton)
}



