var userId = 46;

//$('chatWindow').
/* example of use: create new message */
//var m1 = new chatMessage(userId, 'hello', new Date());


/* example of use: send message */
//sendMessage(m1);


/* happens when a new message is there */
function allMessagesSubscribe(snapshotValue) {
    console.log(snapshotValue);
    
    
    
    showChat(snapshotValue);

}

$('#send-message').click( function sendMsgToDB(){
    
    var message = new chatMessage(userId,  $('#message').val(), new Date());
    
    sendMessage(message);

});

function showChat(snapshotValue){

    var msgArr = snapshotValue;
     $("#chat-messages").empty();
    $.each(msgArr, function( index, value ) {
        
               
                $("#chat-messages").append("<li>" + value.userid + " : " + value.message + "</li>");
      
     
            
            //alert( index + ": " + value );
    });
}

