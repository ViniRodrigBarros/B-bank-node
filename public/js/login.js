function logar(){
  nomes = document.getElementById("idemail").value;
  nomes.toString()
  alert(nomes)
  senha = document.getElementById("idsenha").value;

console.log(JSON.stringify({
  nomes:nomes,
  senha:senha
}));

  fetch("/login",{
      method:'POST',
      body: JSON.stringify({
          nomes:nomes,
          senha:senha
      }) , 
      headers: { "Content-Type" : "application/json" }
      
  })

  .then(async (resp) => {
      var status = await resp.text();
      console.log(status)
      if(status == 'conectado' ){
        location.href = 'usuario.html'
      }else {
        alert('nome e senha invalidos!!')
      }
      
  });

}