var axios = require('axios')

async function salvar(nome, cpf, telefone){
     axios.post('https://sheetdb.io/api/v1/2wrscdvn2tr9y',{
        "data": {
            "Nome": nome, 
            "CPF": cpf,
            "Telefone": telefone
        }
     },{
        "auth": {
            "username": "437dt814",
            "password": "ej2seew29jwzjstwb37h"
        }
     })
}