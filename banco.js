//My sql conection
const http = require('http')
const path = require('path')

const express =  require('express')
const fs = require("fs");
var session = require('express-session')


const app = express()
const server = http.createServer(app)

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Vinicius13$13',
  database : 'b_bank'
});
 
connection.connect(function(err){
  if (err){
    console.log("erro de conec")
  }
  else{
    console.log("conectado")
  }
});
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});


/*connection.query("INSERT INTO clientes(email) VALUES('vini@gmail.com')",function(err,result){
  if(!err){
    console.log("cadastro realizado")
  }
  else{
    console.log('Erro ao cadastrar')
  }
})
*/



connection.end();


