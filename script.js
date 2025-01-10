let name = document.getElementById("name");
let age = document.getElementsByClassName("age");
let astu = document.getElementsByClassName("astu");
let contents = document.getElementById("content")


name.onclick = function() {
    contents.textContent = 'hello'
}