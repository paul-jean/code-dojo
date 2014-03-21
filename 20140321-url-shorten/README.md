A very simple URL-shortening server written in node.js.  

Start the server, specifying port 8001 (default: port 8000):

```bash
[rule146@rule146: 20140321-url-shorten]$ node server.js 8001
Server bound
Listening on port 8001
Client connected
```

Open a socket on that port and the server gives you instructions.
Use `shorten` to shorten a url and `go` to retrieve a full url.

```bash
[rule146@rule146: 20140321-url-shorten]$ nc 127.0.0.1 8001
Welcome to p.co!

You can enter:

shorten <long url>
or
go <short url>

shorten www.google.com
Shortening: www.google.com to:
p.co/0

go p.co/0
Redirect ->
http://www.google.com

shorten www.rule146.com
Shortening: www.rule146.com to:
p.co/1

go p.co/1
Redirect ->
http://www.rule146.com
```
