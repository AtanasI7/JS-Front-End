const loadPostsBtnEl = document.getElementById('btnLoadPosts');
const selectPostsEl = document.getElementById('posts');
const infoPostBtnEl = document.getElementById('btnViewPost');
const titleH1El = document.getElementById('post-title');
const descriptionPEl = document.getElementById('post-body');
const commentsUlEl = document.getElementById('post-comments');

function attachEvents() {
    loadPostsBtnEl.addEventListener('click', handlePostsLoad);
    infoPostBtnEl.addEventListener('click', handleInfoLoad);

    async function handlePostsLoad(e) {
        const postRes = await fetch('http://localhost:3030/jsonstore/blog/posts');
        const postData = await postRes.json();

        const allPostsObjs = Object.values(postData);

        for (const postObj of allPostsObjs) {
            const newOptionEl = document.createElement('option');
            newOptionEl.value = postObj.id;
            newOptionEl.textContent = postObj.title;
            selectPostsEl.appendChild(newOptionEl);
        }
    }

    async function handleInfoLoad(e) {
        const currentPostId = selectPostsEl.value;

        const postsRes = await fetch('http://localhost:3030/jsonstore/blog/posts');
        const postsData = await postsRes.json();

        const allPostsObjs = Object.values(postsData);
        const selectedPost = allPostsObjs.find(post => post.id === currentPostId);
        
        const commentsRes = await fetch('http://localhost:3030/jsonstore/blog/comments');
        const commentsData = await commentsRes.json(); 

        const allCommentsObjs = Object.values(commentsData);
        const filteredComments = allCommentsObjs.filter(comment => comment.postId === currentPostId);
        
        titleH1El.textContent = selectedPost.title;
        descriptionPEl.textContent = selectedPost.body;

        commentsUlEl.innerHTML = '';

        for (const commentObj of filteredComments) {
            const newLiEl = document.createElement('li');
            newLiEl.textContent = commentObj.text;

            commentsUlEl.appendChild(newLiEl);
        }   
    }
}

attachEvents();