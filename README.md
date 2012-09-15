Simple nodejs proxy server
==========================

The situation is the following one:
* One host (client) establishes a TCP connection to another one (remote)

client ---> remote

* Client starts the TCP conection to the remote's port
* We want to put a proxy server in the middle
* we can do it with netcat or even with a ssh tunnel but we want to play with node.js

client -- proxy -> remote