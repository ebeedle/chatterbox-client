
var app = {
  username: window.location.search.substr(10),
  server: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
  $message: $('#message'),
  roomname: 'lobby',
  $send: $('#send'),
  texts: [],
  f: {},
  
  init: function() {
    this.fetch();
    context = this;
    $('#main').on('click', '.username', function() {
   	  context.handleUsernameClick()
    });
    $('#send').on('submit', '.submit', function() {
      console.log('working')
      //app.handleSubmit
    });
    $('.refresh').on('click', function() {
      $('#chats').html('');
      $('#roomSelect').html('');
      app.fetch();
    })
    $('#roomSelect').on('change', app.handleRoomChange)
    $('#chats').on('click', '.chat', function() {
      var user = $(this).find('.username').data("username");
      var user1 = '.' + user1;
      $(user1).closest('.chat').toggleClass('friend')

      if (!f[user]) {
        f[user] = true;
      } else {
        f[user] = false;
      }

      for (var f in friends) {
        var node = $('<div></div>')
        if (f[friend]) {
          node.text(friend);
          $('#friends').append(node);
        }
      }

    })

      //add to friends div
      //var ob = friends;
      // if you click on a name, friend gets added to that object
        //var username = this.find('.username').data("username")
        //if (ob[username]) 
          //ob[username] = true
        // else {
          //ob[username] = false;
        //}
      // iterate throug object, add to div only those usernames that are p
      // present and true;

      // if you click on name again, it will change 
      // iterate through object and display friends
      //get class name from data
      //add period to class and then use jquery selector to select all
      //add friends class
    //if chat is clicked (class chat, username), add a class to it so that all
    //classes that have the same username are highlighted. 

  },
  send: function(message) {
    console.log('work')
    $.ajax({
  	  url: app.server,
  	  type: 'POST',
  	  data: JSON.stringify(message),
  	  //contentType: 'application/json',
  	  success: function(message) {
        console.log('sent');
        app.fetch();
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
        app.texts = data.results;
        app.displayRooms(data.results)
        console.log(data);
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
    var username = data.username;
    var message = data.text;
    var $chat = $('<div class="chat"></div>')
    $username = $('<div class="username"></div>')
    $username.text(username);
    $username.addClass(username);
    $username.attr('data-username', username);
    $message = $('<div class="mess"></div>');
    $message.text(message);
    $chat.append($username);
    $chat.append($message);
    $('#chats').append($chat);
  },

  renderRoom: function(room) {
	$('#roomSelect').append('<div>' + room + '</div>');
  },

  handleUsernameClick: function() {
	$('.friends').append('')
  },

  handleSubmit: function(event) {
	var message = {
		    username: app.username,
        message: $('#message').val(),
        roomname: app.roomname || 'lobby'
    }

    console.log('works')
    app.send(message);
    event.preventDefault();
},

displayRooms: function(messages) {
  var rooms = {};
  if (app.texts) {
    app.texts.forEach(function(text) {
      if (!rooms[text.roomname]) {
        rooms[text.roomname] = true;
      }
    })
 //have object that contains all different rooms
    //iterate through app.texts
      //if x.roomname and x.roomnme doesn't exist in rooms
     

     //add x.roomname to r   //append all key values in rooms to element and add under roomselect;
  }
  for (var key in rooms) {
     var $option = $('<option></option>');
     $option.val(key);
     $option.text(key);
     $('#roomSelect').append($option);
  } 
},

handleRoomChange: function() {
  var index = $('#roomSelect').prop('selectedIndex');
  var rn = $('#roomSelect').val();
  $('#chats').html('');
  if (index === 0) {
    var desiredRoom = prompt('Enter Room Name');
    if (desiredRoom) {
      var $option = $('<option></option>');
      $option.val(desiredRoom).text(desiredRoom);
      $('#roomSelect').append($option);
    }
  } else {
    app.texts.filter(function(text) {
    return text.roomname === rn
  }).forEach(function(x) {
    app.renderMessage(x)
  })
  //find roomname
 } //filter over all texts to only show only texts with that roomname
}

};



