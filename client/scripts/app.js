// $(document).ready(function() {


var app = {};
app.init = function() {
  this.server = 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages';
  
  
};
app.send = function(message) {
  var sendMessage = $.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
  type: 'POST',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message sent');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message', data);
  }
});
  return sendMessage;
};

// app.fetch = function() {
//   var getMessage = $.get("http://parse.sfm8.hackreactor.com/chatterbox/classes/messages", function(message){
//         return this.send(message);
//     });
//   return getMessage;
app.fetch = function() {
  var getMessage = $.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: this.server,
  type: 'GET',
  // data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message received');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message', data);
  }
});
  return getMessage;
};

//adding messages to the DOM
app.renderMessage = function(message) {
  var $chat = $('<div></div>');
  $chat.text(message);
  $('#chats').append($chat);
}
//deleting messages from the DOM
app.clearMessages = function() {
  $('#chats').children().remove();
}

//adding rooms to the DOM
app.renderRoom = function(message) {
  var $subRoom = $('<div></div>')
  $subRoom.text(message)
  $('#roomSelect').append($subRoom)
}

//add a friend upon clicking their username

app.handleUsernameClick = function() {
  var $friend = $('<div></div>')
  $friend.text(message.username)
  $('.friend').append($friend)
};

$('#main').on('click','.username', function() {console.log('works')}/*this.handleUsernameClick*/);


app.handleSubmit = function() {
  var $friend = $('<div></div>')
  $friend.text(message.username)
  $('.friend').append($friend)
};

$('#main').on('click','.username', function() {console.log('works')}/*this.handleUsernameClick*/);













// });























