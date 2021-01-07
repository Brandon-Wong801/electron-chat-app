const enterButton = document.getElementById('enter');


enterButton.onclick = enterClicked;
var count = 0;
function enterClicked(){
    const name = document.getElementById('uname').value;
    console.log("Test worked");
    count++;
    window.alert(name+" "+ count);
}



