const banco = require("./banco")
const http = require('http')
const path = require('path')
const cadastro = require('./public/js/cadastro.js')


const express =  require('express')
const fs = require("fs");
var session = require('express-session')

const app = express()
const server = http.createServer(app)

app.use(express.json());
app.use(express.urlencoded());
app.use(session({secret:"abc"}));



// configuraçoes
app.set('port', process.env.PORT || 3000)


// Rotas
app.get('/', (req, res) => {
  res.send('Rota Primaria')

})

app.get("/Cadastro",(req, res) => {
    app.get(cadastro.Cadastro())
})
    




app.get("/login",function(req,res){
    res.send('login')
})
//start do server
server.listen(app.get('port'), () => {
    console.log('server na porta', app.get('port'))
  
   
})

// secção de login
app.use('/acesso-restrito/*', (req, res, next) => {
    if( req.session.nome ){
        next();
    }else{
        res.redirect('/index.html')
    }
      });


      // artigos estaticos
app.use(express.static(path.join(__dirname, 'public')))



// secção de login 2


app.post('/login',(req, res) => {
    const usuarioscad =   fs.readFileSync('./usuarios.json')
    const usuariosparse = JSON.parse(usuarioscad)
    

    var email = req.body.nomes
    var senha = req.body.senha


        for( var umUsuario of usuariosparse) {
            if(email == umUsuario.email && senha == umUsuario.senha ){
                    req.session.email = umUsuario
                    res.send('conectado')
                    return
            }
                
            
        }
        res.send('falhou')
        
    
})

function transferenciaBackend(){
    console.log('test')
}
function investimentoBackend(){
    console.log('test')
}
