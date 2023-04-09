const button = document.getElementById('button');

function addName (name) {
        let finalName = name.toLowerCase().trim().split(/\s+/).map((word) =>{
            return word[0].toUpperCase() + word.substring(1);
            }).join(' ');
            return finalName;
}
function checkSpam (text) {
    let commentFiltr = text.replace(/viagra/ig, "***").replace(/xxx/ig, "***");
    return commentFiltr;
}

function leaveComment () {
    const fullName = document.getElementById('name').value;
const link = document.getElementById('link').value;
const comment = document.getElementById('comment').value;
    let userFullName = addName(fullName);
    let image = link;
    let commentResult = checkSpam(comment);
    let parentDiv = document.getElementById('result');
parentDiv.innerHTML = parentDiv.innerHTML + `<div class="user">
<img src="${image}" alt="" id="img" /><h4 id="username">${userFullName}</h4>
</div><p id="commentresult">${commentResult}</p>`;
}

button.addEventListener('click', leaveComment);



