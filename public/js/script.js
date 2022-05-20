const posts = document.querySelectorAll(".post-card");

const goToPost = async (e) => {
    
    const post = e.target.dataset.post;

    return document.location.replace(`/api/post/${post}`);

};

const goToRegister = async () => {

    return document.location.replace("/api/user/register");

};

for (let i = 0; i < posts.length; i++) {

    posts[i].addEventListener("click", goToPost);

};