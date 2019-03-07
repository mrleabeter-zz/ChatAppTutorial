var socket = io();

$('form').on('submit',function () {
  var msgData = {}
  msgData.intls = $('#initials').val().toUpperCase();
  msgData.txt = $('#message').val();
  // var initials = $('#initials').val();
  // var text = $('#message').val();
  socket.emit('message', msgData);
  // socket.emit('message', text);
  $('#message').val('');
  $('#initials').val('');
  return false;
});

socket.on('message', function (msg) {
  // $('<li>').text('says: ' + msg).appendTo('#chat-history');
  $('<li>').text(msg.intls + ' says: ' + msg.txt).appendTo('#chat-history');
});