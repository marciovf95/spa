const roteador = require('express').Router()
const TabelaDev = require('./TabelaDev')
const Dev = require('./Dev')
const SerializadorDev = require('../../Serializador').SerializadorDev

roteador.get('/', async (requisicao, resposta) => {
    const resultados = await TabelaDev.listar()
    resposta.status(200)
    const serializador = new SerializadorDev(
        resposta.getHeader('Content-Type')
    )
    resposta.send(
        serializador.serializar(resultados)
    )
})

roteador.post('/', async (requisicao, resposta, proximo) => {
    try {
        const dadosRecebidos = requisicao.body       
        DevOBJ = new Dev(dadosRecebidos)        
        await DevOBJ.criar()
        resposta.status(201)
        const serializador = new SerializadorDev(
            resposta.getHeader('Content-Type')
        )
        resposta.send(
            serializador.serializar(DevOBJ)
        )
    } catch (erro) {
        proximo(erro)
    }
})

roteador.get('/:idDev', async (requisicao, resposta, proximo) => {
    try {
        const id = requisicao.params.idDev
        const DevOBJ = new Dev({ id: id })
        await DevOBJ.carregar()
        resposta.status(200)
        const serializador = new SerializadorDev(
            resposta.getHeader('Content-Type'),
            ['email', 'dataCriacao', 'dataAtualizacao', 'versao']
        )
        resposta.send(
            serializador.serializar(DevOBJ)
        )
    } catch (erro) {
        proximo(erro)
    }
})

roteador.put('/:idDev', async (requisicao, resposta, proximo) => {
    try {
        const id = requisicao.params.idDev
        const dadosRecebidos = requisicao.body
        const dados = Object.assign({}, dadosRecebidos, { id: id })
        const DevOBJ = new Dev(dados)
        await DevOBJ.atualizar()
        resposta.status(204)
        resposta.end()
    } catch (erro) {
        proximo(erro)
    }
})

roteador.delete('/:idDev', async (requisicao, resposta, proximo) => {
    try {
        const id = requisicao.params.idDev
        const DevOBJ = new Dev({ id: id })
        await DevOBJ.carregar()
        await DevOBJ.remover()
        resposta.status(204)
        resposta.end()
    } catch (erro) {
        proximo(erro)
    }
})

module.exports = roteador