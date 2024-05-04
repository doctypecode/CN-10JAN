//Complete this JS file to render the post1 on the screen with all the specified tags.
let initialPost =  [
    { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], likedBy:[], image: 'https://files.codingninjas.in/image2-28694.jpg' },
    { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [],likedBy:[], image: 'https://files.codingninjas.in/oip-28704.jpg' },
    { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], likedBy:[], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
    { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], likedBy:[], image: 'https://files.codingninjas.in/image1-28708.jpg' },
  ];



let user = {
    id: 100,
    username: 'codingninjas'
}

// let isLiked = false

// let isPostLiked = false;

// Steps
// 1. Create HTML layout using JS
// 2. 

const getCommentsHTML = (post) => {
    let html = '';
    post.comments.forEach(comment => {
        html += `<p>${comment}</p>`
    })

    return html

    // return '<p>Great post!</p><p>Great post!</p>'
}

// { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], likedBy:[], image: 'https://files.codingninjas.in/image2-28694.jpg' },

const getPostHTML = (post, index) => {
    const html = `
    <div class="post">
            <h3>${post.author}</h3>
            <img src=${post.image} alt="">
            <p>${post.content}</p>
            <button onclick="handleLikeClick(event, ${index})">Like</button>
            <input type="text" name="comment-input" id="">
            <button onclick="handleCommentClick(event, ${index})">Comment</button>

            <div class="post-footer" onclick="handlePostFooterClick(event, ${index})">
                Likes: ${post.likes} Comments: ${post.comments.length}
            </div>

            <div class="comments-container">
                ${getCommentsHTML(post)}
            </div>
        </div>
    `

    const postDiv = document.createElement('div'); // <div></div>
    postDiv.classList.add('post'); // <div class="post"></div>

    const h3 = document.createElement('h3'); // <h3></h3>
    h3.innerText = post.author; // <h3>John</h3>
    postDiv.appendChild(h3); // <div class="post"><h3>John</h3></div>

    const img = document.createElement('img'); // <img src="" alt="" />
    img.src = post.image // <img src="https://files.codingninjas.in/image2-28694.jpg" alt="" />
    postDiv.appendChild(img) // <div class="post">   <h3>John</h3>   <img src="https://files.codingninjas.in/image2-28694.jpg" alt="" /> </div>

    const p = document.createElement('p'); // <p></p>
    p.innerText = post.content // <p>Hello, Instagram!</p>
    postDiv.appendChild(p);

    const likeButton = document.createElement('button');
    likeButton.innerText = 'Like';
    likeButton.addEventListener('click', (event) => handleLikeClick(event, index))
    postDiv.appendChild(likeButton)

    const input = document.createElement('input');
    input.type = "text";
    input.name = 'comment-input'
    input.id = "commentInput"
    postDiv.appendChild(input)

    const commentButton = document.createElement('button');
    commentButton.innerText = 'Comment'
    commentButton.addEventListener('click', (event) => handleCommentClick(event, index))
    postDiv.appendChild(commentButton)

    const postFooterDiv = document.createElement('div');
    postFooterDiv.classList.add('post-footer');
    postFooterDiv.addEventListener('click', (event) => handlePostFooterClick(event, index))
    postFooterDiv.innerText = `Likes: ${post.likes} Comments: ${post.comments.length}`
    postDiv.appendChild(postFooterDiv)

    const commentsContainerDiv = document.createElement('div');
    commentsContainerDiv.classList.add('comments-container');
    postDiv.appendChild(commentsContainerDiv)

    post.comments.forEach(comment => {
        const p = document.createElement('p');
        p.innerText = comment;
        commentsContainerDiv.appendChild(p);
    })

    return postDiv
}


function updatePostFooter(index){
    const postFooter = event.target.parentElement.querySelector('.post-footer')
    postFooter.innerHTML = `Likes: ${initialPost[index].likes} Comments: ${initialPost[index].comments.length}`
}

function handleLikeClick(event, index){
    // Liked Already
    const isLiked = initialPost[index].likedBy.find(id => id === user.id);
    if(isLiked) return;

    initialPost[index].likes = initialPost[index].likes + 1;
    initialPost[index].likedBy.push(user.id)
    event.target.classList.add('like-button');
    updatePostFooter(index);
    
}

function handleCommentClick(event, index){
    // Get the input element
    const inputEl = event.target.parentElement.querySelector('input[name="comment-input"]');
    initialPost[index].comments.push(inputEl.value);
    inputEl.value = '';
    const commentsContainerEl = event.target.parentElement.querySelector('.comments-container')
    commentsContainerEl.innerHTML = getCommentsHTML(initialPost[index])
    updatePostFooter(index);
}

function handlePostFooterClick(event){
    const comments = event.target.parentElement.querySelector('.comments-container');
        // If the element has this class then remove it, otherwise add it
    comments.classList.toggle('show-comments-container')
}
// { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], likedBy:[], image: 'https://files.codingninjas.in/image2-28694.jpg' },

// login -> api call -> authentication -> response {access_token}
// /me call with access_token then the BE will return the user object which gets stored in session storage

// Basic Auth - username and Password

// file input data -> blob
// blob has file data + file metadata
// file data ->  the actual data of the file
// file metadata -> data of file data -> fileName, extension, type

// the point from where the event is triggered will be in event.target

// the default behavior of form submit event is to reload the page

function handleNewPostSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const content = formData.get('contentInput');
    const image = formData.get('imageInput');
    const post = {
        id: (new Date().getTime()).toString() + Math.random(),
        author: JSON.parse(sessionStorage.getItem('user')).name,
        content,
        likes: 0,
        comments:[],
        likedBy:[],
        image:''
    }

    
    post.image = URL.createObjectURL(image)
    initialPost.push(post)
    renderPost(post, initialPost.length - 1)
    event.target.reset()

    // const fileReader = new FileReader();

    // fileReader.onload = function(){
    //     post.image = fileReader.result
    //     initialPost = [post, ...initialPost]
    //     init();
    // }

    // fileReader.readAsDataURL(image)
}

function renderPost(post, index){
    const postsContainer = document.getElementById('posts');
    const finalPostDiv = getPostHTML(post, index);
    postsContainer.insertBefore(finalPostDiv, postsContainer.firstElementChild)
}

// const arr = [{},{},{}] => rendered on UI
// [{},{},{},{}] => re-render this array
// on ui there will 7 elements in total


// const arr = [{},{},{}] => rendered on UI
// {} -> only adding this to UI
// in total there are 4 elements on the UI which is correct

function init(){
    initialPost.forEach((post, index) => {
        renderPost(post, index);
    })
}

init();


// insert before -> I want to insert x before y
// [].push => appendChild
// [].unshift => insertBefore(child, )