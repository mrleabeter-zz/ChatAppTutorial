var socket = io();

$('form').on('submit',function () {
  var text = $('#message').val();
  socket.emit('message', text);
  $('#message').val('');
  return false;
});