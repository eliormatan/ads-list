# ads-list
Web app that shows the advertisers and the number of times each advertiser appears in the ads.txt file of a given domain.

## Overview:
The app has both backend(Node) and frontend(React) sides.
I created an API for the client(React) using the server(Node).

Server:
The server creates an endpoint for the route "/api/advertisers".
When a "GET" request arrives from the client, the server gets the domain from the
query field and tries to get the data from ads.txt file of the remote server of that domain. 
Then parses the data to a map ({key: domain ,value: count}) and sends it back to the client as a response.

Client:
When the user clicks the "parse" button, the client makes a "GET" request to the server and adds a spinner until it gets a response.
Then the client builds a table with the data or displays an error message. 

## How to run:
#### Clone the repo:
```
$ git clone https://github.com/eliormatan/ads-list.git
```

##### Run the server from the root folder:
```
$ npm install
$ npm start
```

##### Run the client:
```
$ cd client
$ npm install
$ npm start
```

### Then go to:
#### http://localhost:3000/ 




 
