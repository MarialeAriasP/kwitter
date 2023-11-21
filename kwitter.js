//3. crear la función addUser

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    //firebase.database().ref("/").child(user_name).update({
        //purpose: "agregando usuario"
    //});
    window.location = "kwitter_room.html";
}