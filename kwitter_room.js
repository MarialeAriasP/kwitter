const config = {
      apiKey: "AIzaSyC60gGNHNCk_RYu03lgKeaZWEQKe74if_8",
      authDomain: "kwitter-90cbc.firebaseapp.com",
      databaseURL: "https://kwitter-90cbc-default-rtdb.firebaseio.com",
      projectId: "kwitter-90cbc",
      storageBucket: "kwitter-90cbc.appspot.com",
      messagingSenderId: "209875355374",
      appId: "1:209875355374:web:92fc10a529f90f742e95ff" 
    };
    
    // Initialize Firebase
firebase.initializeApp(config);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Te damos la bienvenida, " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "Agregando el nombre de la sala"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {

      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

      Room_names = childKey;

      console.log("Nombre de la sala: " + Room_names);

      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";

      document.getElementById("output").innerHTML += row;

      });});
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";      
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}