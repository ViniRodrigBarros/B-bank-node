


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
    //enviar const usuario para cadastro.json
    exports.GetCadastro = (req,res) =>{
      const usuario = {
        email:email,
        senha:senha,
        nome:nome,
        cpf:cpf
      }
      res.json({usuario})
    }

    console.log(usuario)
    alert("oi")
    
     
    
  }
/*
  exports.GetCadastro = (req,res) =>{
    
    const usuario = {
      email:"test1bd",
      senha:"test2",
      nome:"test3",
      cpf:"test4"
    }
    res.json({usuario})
  }    
*/