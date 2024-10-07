let express = require('express');
let app = express();

app.get('/', function(request, response){
    response.send('Primeira rota com express');

});


app.listen(3000,function(){
    console.log("A aplicação esta funcionando na porta 3000");
});