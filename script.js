var axios = require('axios')

async function salvar(now, nome, cpf, telefone, escolha, escolhaIdade, municipio){
     axios.post('https://sheetdb.io/api/v1/2wrscdvn2tr9y',{
        "data": {
            "Data": now,
            "Nome": nome, 
            "CPF": cpf,
            "Telefone": telefone,
            "Associado": escolha,
            "Idade": escolhaIdade,
            "Municipio": municipio,
        }
     },{
        "auth": {
            "username": "437dt814",
            "password": "ej2seew29jwzjstwb37h"
        }
     })
}