const http = require('http');

function responsePeticion(request, response){
	response.end('hola mundo');
}

let server = http.createServer(responsePeticion);


server.listen(3000);