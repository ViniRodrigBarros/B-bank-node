const cadastro1 =  require('../models/cadastro1')

const getALL = (req,res) =>{
    return res.render('index');
};
const cadastro = (req,res) =>{
    return res.render('cadastro');
}


module.exports = {
    getALL,
    cadastro,

};