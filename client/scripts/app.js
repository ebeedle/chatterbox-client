
var app = {
  username: window.location.search.substr(10),
  server: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
  $message: $('#message'),
  roomname: 'lobby',
  $send: $('#send'),
  
  init: function() {
    this.fetch();
    context = this;
    $('#main').on('click', '.username', function() {
   	  context.handleUsernameClick()
    });
  },
  send: function(message) {
    $.ajax({
  	  url: app.server,
  	  type: 'POST',
  	  data: JSON.stringify(message),
  	  //contentType: 'application/json',
  	  success: function(message) {
  		//$('#chats').append('<div>' + message + ' </div>')
  	  }
    })
  },
  fetch: function(){
    $.ajax({
  	  url: app.server,
  	  type: 'GET',
  	  data: { order: '-creatAt' },
  	  contentType: 'application/json',	
  	  success: function(data) {
  		data.results.forEach(function(x) {
  			return app.renderMessage(x);
  		})
  	 }
    })
  },

  clearMessages: function() {
	$('#chats').html('');
  },

  renderMessage: function(data) {
	$('#chats').append('<a href="#" class=username>' + data.username + ': ' + data.text + '</a>');
  },

  renderRoom: function(room) {
	$('#roomSelect').append('<div>' + room + '</div>');
  },

  handleUsernameClick: function() {
	$('.friends').append('')
  },

  handleSubmit: function() {
	var message = {
		username: app.username,
        message: app.$message.val(),
        roomname: app.roomname || 'lobby'
    }

    app.send(message);

    event.preventDefault();
}

};



