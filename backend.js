const banco = require("./database/db")
const http = require('http')
const path = require('path')
const routes = require('./routes/routes')

const express =  require('express')
const fs = require("fs");
var session = require('express-session');


const app = express()
const server = http.createServer(app)

app.use(express.json());
app.use(express.urlencoded());
app.use(session({secret:"abc"}));


// configuraçoes
app.set('port', process.env.PORT || 3000)
app.set("view engine",'ejs')

// Rotas
app.use(routes)



//start do server
server.listen(app.get('port'), () => {
    console.log('server na porta', app.get('port'))

})

// secção de login


      // artigos estaticos
app.use(express.static(path.join(__dirname, 'public')))



// secção de login 2



function transferenciaBackend(){
    console.log('test')
}
function investimentoBackend(){
    console.log('test')
}
