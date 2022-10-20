const routes = require("express").Router();
const TaskController = require("../controller/TaskController")
var db = require("../database/db")

routes.get("/login",TaskController.getALL)

routes.get("/cadastro",TaskController.cadastro)

routes.get('/listar' ,function(req,res){
    db.query("SELECT * FROM clientes",[],function(erro,listagem){
        if(erro){
            res.status(200).send(erro)
        }
        res.render('lista',{lista : listagem})
    })
})

module.exports = routes