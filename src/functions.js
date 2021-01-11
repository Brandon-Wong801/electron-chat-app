//const enterButton = document.getElementById('enter');



//enterButton.onclick = enterClicked;
var count = 0;
function enterClicked(){
    const name = document.getElementById('uname').value;
    console.log("Test worked");
    count++;
    //window.alert(name+" "+ count);
    enterChat(name);
    
    
}

function homeClicked(){
    window.location.href = "index.html";
    populateHeader("hi");
}

function enterChat(name){
    window.location.href = "chatroom.html";
    window.onload = populateHeader(name);
    window.alert(name);
}

function populateHeader(name){
    document.getElementById('username').innerText = name;
}


