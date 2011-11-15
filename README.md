# A shared white board

### About

This is a express.js app with socket.io plugin. 

Currently, the server only acts as a message broadcaster, i.e. it receives a message from the client and sends it out to all other clients.

### Client API
The com.js library provides for an abstraction over the internal messaging API. 

It has one method 'sendDrawMsg' to send data from the client. To receive data you must implement matisse.onDrawEvent.

See the views/index.jade for example written in (http://jade-lang.com/)[jade] templating engine.

See index.html in this directory for a vanilla html example.

### How to Run this app?
To run this application you need to install (http://nodejs.org)[node.js] and also install npm.

Then you can run 

>
> $ node app.js
>

in the checked folder.

Then go to the browser and open http://localhost:8000/ for the jade template page or http://localhost:8000/html for the HTML page.
