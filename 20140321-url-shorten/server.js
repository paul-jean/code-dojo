// http://nodejs.org/api/net.html#net_net_createserver_options_connectionlistener
var net = require('net');
var shortenedUrls = {};
var index = 0;

var port = 8000;
if (process.argv.length > 2 && process.argv[2].match(/\d+/)) {
  port = parseInt(process.argv[2], 10);
}

var connect = function(socket) {
  console.log('Client connected');
  socket.on('end', function() {
    console.log('Server disconnected');
  });
  socket.write('Welcome to p.co!\n\n');
  socket.write('You can enter:\n\n');
  socket.write('shorten <long url>\n');
  socket.write('or\n');
  socket.write('go <short url>\n\n');
  socket.on('data', function(buffer) {
    var command = buffer.toString();
    console.log("You entered ");
    console.log(command);
    var shortenRegex = new RegExp("shorten (.*)", "i");
    var goRegex = new RegExp("go (p.co/.*)", "i");
    if (command.match(shortenRegex)) {
      var match = shortenRegex.exec(command);
      if (match.length > 1) {
        var url = match[1];
        var shortened = "p.co/" + index;
        shortenedUrls[shortened] = url;
        socket.write("Shortening: " + url + " to: \n");
        socket.write(shortened + "\n\n");
        index++;
        console.log(shortenedUrls);
      }
    }
    else if (command.match(goRegex)) {
      var shortUrlMatch = goRegex.exec(command);
      if (shortUrlMatch.length > 1) {
        var realUrl = shortenedUrls[shortUrlMatch[1]];
        if (realUrl) {
          socket.write("Redirect ->\n");
          socket.write("http://" + realUrl + "\n\n");
        } else {
          socket.write("Ooops couldn't find " + shortUrlMatch[1] + "\n\n");
        }
      }
    }
    else {
      socket.write("Oops didn't catch that, sorry :( \n\n");
    }
  });
  socket.on('end', socket.end);
};

var server = net.createServer(connect);

server.listen(port, function() {
  console.log('Server bound');
  console.log('Listening on port ' + port);
});
