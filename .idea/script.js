

$(function(){
    // Replace "localhost" with ipv4 address from ipconfig (windows) or ifconfig (mac/linux) command from
    // console(shell), to chat via (W)LAN
    var socket = io("http://localhost:3000");
    socket.connect();
    $('form').submit(function(e){
        e.preventDefault(); // preventing reloading page
        socket.emit('message', {text: $('#m').val()});
        $('#m').val('');
    return false;
    });
    socket.on('broadcastmessage', function(msg){
        console.log(msg.text)
        $('#messages').append($('<li>').text(msg.text));
    });
});

