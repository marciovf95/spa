const ModeloTabela = require('../rotas/dev/ModeloTabelaDev')

ModeloTabela
    .sync()
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log)