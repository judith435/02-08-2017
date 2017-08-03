// Initialize Firebase
var config = {
    apiKey: "AIzaSyDAkAa9eULF2zKGajKKi0etXzOtAUTLEZs",
		authDomain: "test-app-kobe.firebaseapp.com",
		databaseURL: "https://test-app-kobe.firebaseio.com",
		projectId: "test-app-kobe",
		storageBucket: "test-app-kobe.appspot.com",
		messagingSenderId: "714482224093"
		};
firebase.initializeApp(config);
var database = firebase.database();


function chatMessage(userid, message, timestamp) {
    this.userid = userid;
    this.message = message;
    this.timestamp = timestamp;
    
}

function sendMessage(message) {
    database.ref('chat').push(message);
}

var allMessages = firebase.database().ref('chat');
allMessages.on('value', function (snapshot) {
    allMessagesSubscribe(snapshot.val());
});

var s= new chatMessage(1, "asd", new Date());