//PROTOCOLO DE INTERCAMBIO
var http=require('http');
//CRANDO EL SEVIDOR MEDIANTE EL USO DE PROTOCOLO HTTP
var server=http.createServer();
//SERVICIO WEB
function mensaje(req,resp){
    //ESTADO 200 SATISFACTORIO, MENSAJE DE TIPO TEXTO PLANO CONFIGURADO MENDIANTE JSON 
    resp.writeHead(200,{'content-type': 'text/plain'})
    //ESCRIBI EL MENSAJE EN TEXTO PLANO
    resp.write('HOLA MUNDO');
    //FINALIZO LA COMUNICACION ENTRE EL CLIENTE Y EL SERVIDOR 
    resp.end();
}

server.on('request', mensaje);
server.listen(3000, function(){
    console.log("La solicitud fue realizada mediante el puerto 3000");
});