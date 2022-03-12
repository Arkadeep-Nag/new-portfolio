import { db } from './firebase.js';
var input = document.getElementById("email");
document.getElementById("send").addEventListener("click", haveRecord);

function haveRecord(e) {
    e.preventDefault();

    db.collection("users").add({
        email: input.value,


    })

}