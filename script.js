
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCoaBOMk2NrmAynTcL2sNtYJC5sG7sJqQE",
      authDomain: "mychathouse-2b047.firebaseapp.com",
      projectId: "mychathouse-2b047",
      storageBucket: "mychathouse-2b047.appspot.com",
      messagingSenderId: "693897431162",
      appId: "1:693897431162:web:08378d620e666499c753c3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
const db= firebase.database();
const username = prompt("What's your name?");
document.getElementById("send-message").addEventListener("submit", postChat);
function postChat(e) {
e.preventDefault();
const timestamp = Date.now();
const chatTxt = document.getElementById("chat-txt");
const message = chatTxt.value;
chatTxt.value = "";
db.ref("messages/" + timestamp).set({
  usr: username,
  msg: message,
});
}
const fetchChat = db.ref("messages/");
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const msg = "<li>" + messages.usr + " : " + messages.msg + "</li>";
  document.getElementById("messages").innerHTML += msg;
});

















// {
//   "rules": {
//     ".read": "auth.uid != null",
//     ".write": "auth.uid != null"
//   }
// }
