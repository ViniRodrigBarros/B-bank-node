class Cliente {
    constructor(nome, senha, email, dtnascimento, saldo){
      this.nome = nome
      this.senha = senha
      this.email = email
      this.dtnascimento = dtnascimento
      this.saldo = saldo
      
    }
    // Sets
    setNome(nome1){
      this.nome = nome1
    }
    setEmail(email1){
      this.email = email1
    }
    setSaldo(saldo1){
      this.saldo = getSaldo() + parsetInt(saldo1);
    }
    setSenha(senha1){
      this.senha = senha1
    }
    setDtnascimento(dtnascimento1){
      this.dtnascimento = dtnascimento1
    }
  
    // Gets
    getNome(){
      return this.nome
    }
    getEmail(){
      return this.email
    }
    getDtnascimento(){
      return this.dtnascimento
    }
    getSaldo(){
      return this.saldo
    }
  
    getSenha(){
      return this.senha
    }
    getDtnascimento(){
      return this.dtnascimento
    }
  
  
  
  
  }
  
  var c1 = new Cliente("Berg", "1414", "rafa@gmail.com", "29/06/2003", 200)
  
  // modelo pra o banco de dados em logar
  var email2 = c1.getEmail()
  var senha2 = c1.getSenha()
  
  var ContaPrincipal = new Cliente("deafalt","defalt","defalt","defalt",000)
  var ContaApoio = new Cliente("","","","",000)