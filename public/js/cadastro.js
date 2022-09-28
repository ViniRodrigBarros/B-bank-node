
const banco = require("../../banco")

const usuario = {
    email:"",
    senha:"",
    nome:"",
    cpf:""
  }
  
  function Cadastro(){
    alert("test")
    var nome = document.getElementById("idnome").value;
    
    nome.toString()
    var email = document.getElementById("idemailCadastro").value;
    email.toString()
    
    var senha = document.getElementById("idsenhaCadastro").value;
    senha.toString()
  
    // cadastrando no banco de dados
    var cpf = document.getElementById("idCPF").value
    cpf.toString()


  }

  
   
    
