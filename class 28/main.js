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

const getPostHTML = (post, index) => {
    return `
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
    const comments = document.getElementsByClassName('comments-container');
    for(let i=0;i<comments.length;i++){
        // If the element has this class then remove it, otherwise add it
        comments[i].classList.toggle('show-comments-container')
    }
}


function init(){
    const postsContainer = document.getElementById('posts');
    let innerHTML = '';
    initialPost.forEach((post, index) => {
        innerHTML += getPostHTML(post, index)
    })
    postsContainer.innerHTML = innerHTML
}

init();