// Функција за ажурирање на бројот на лајкови за дадено копче
function updateLikeCount() {
    const button = document.getElementById("likebutton1");
    const likeCountElement = document.getElementById("likes1");
    let likeCount = parseInt(likeCountElement.textContent);
    if(button.textContent === "🤍"){
        likeCount++;
        document.getElementById("likes1").innerText = likeCount;
        button.textContent = "❤️";
    }
    else{
        likeCount--;
        document.getElementById("likes1").innerText = likeCount;
        button.textContent = "🤍";
    }
    likeCountElement.textContent = likeCount;

}

function updateLike() {
    const button = document.getElementById("likebutton2");
    const likeCountElement = document.getElementById("likes2");
    let likeCount = parseInt(likeCountElement.textContent);
    if(button.textContent === "🤍"){
        likeCount++;
        document.getElementById("likes2").innerText = likeCount;
        button.textContent = "❤️";
    }
    else{
        likeCount--;
        document.getElementById("likes2").innerText = likeCount;
        button.textContent = "🤍";
    }
    likeCountElement.textContent = likeCount;

}

function updateLikees() {
    const button = document.getElementById("likebutton3");
    const likeCountElement = document.getElementById("likes3");
    let likeCount = parseInt(likeCountElement.textContent);
    if(button.textContent === "🤍"){
        likeCount++;
        document.getElementById("likes3").innerText = likeCount;
        button.textContent = "❤️";
    }
    else{
        likeCount--;
        document.getElementById("likes3").innerText = likeCount;
        button.textContent = "🤍";
    }
    likeCountElement.textContent = likeCount;

}



document.getElementById("likeButton1").addEventListener("click", () => {
    updateLikeCount()
});

document.getElementById("likeButton2").addEventListener("click", () => {
    updateLike()
});

document.getElementById("likeButton3").addEventListener("click", () => { //ova e za miniinstagram1.html, za da ne go dupliram JavaScript, a
    updateLikees()                                                            // funkcionalnosta im e ista sekako
});



