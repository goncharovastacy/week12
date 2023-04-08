const fullName = document.getElementById('name').value;
const link = document.getElementById('link').value;
const comment = document.getElementById('comment').value;
const button = document.getElementById('button');
const userName = document.getElementById('username');
const image = document.getElementById('img');
const commentresult = document.getElementById('commentresult');

function addName () {
    let finalName = fullName.toLowerCase().trim().split(/\s+/).map((word) =>{
        return word[0].toUpperCase() + word.substring(1);
        }).join(' ');
        userName.innerHTML = finalName;
}

function addImage () {
    image.src = link;
}

function checkSpam () {
    let comment2 = comment.replace(/viagra/ig, "***").replace(/xxx/ig, "***");
commentresult.innerHTML = comment2;
}
button.addEventListener('click', addName);
button.addEventListener('click', addImage);
button.addEventListener('click', checkSpam);  

/* 
let parentDiv = document.querySelector('.result');
parentDiv.innerHTML = `<h3>Комментарии:</h3><div class="user">
<img src="..." alt="" id="img" /><h4 id="username"></h4></div><p id="commentresult"></p>`;*/


