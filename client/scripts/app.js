
var app = {};
app.server = 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages';
app.init = function() {
  this.fetch();
  context = this;
  $('#main').on('click', '.username', function() {
  	context.handleUsernameClick(this)
  });
};
app.send = function(message) {
  $.ajax({
  	type: 'POST',
  	url: this.server,
  	data: JSON.stringify(message),
  	contentType: 'application/json',
  	success: function(message) {
  		$('#chats').append('<div>' + message + ' </div>')
  	}
  })
};
app.fetch = function(){
  $.ajax({
  	url: this.server,
  	type: 'GET',
  	contentType: 'application/json',	
  	success: function(data) {
  		data.results.forEach(function(x) {
  			return app.renderMessage(x);
  		})
  	}
  })
};

app.clearMessages = function() {
	$('#chats').children().remove();
}

app.renderMessage = function(data) {
	$('#chats').append('<a href="#" class=username>' + data.username + ': ' + data.text + '</a>')

}

app.renderRoom = function(room) {
	$('#roomSelect').append('<div>' + room + '</div>')
}

app.handleUsernameClick = function() {
	$('.friends').append('')
}



