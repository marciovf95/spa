const Modelo = require('./ModeloTabelaDev')
const NaoEncontrado = require('../../erros/NaoEncontrado')
// https://sequelize.org/master/manual/model-querying-basics.html
module.exports = {
    listar () {
        return Modelo.findAll({ raw: true })
    },
    inserir (Dev) {
        return Modelo.create(Dev)
    },
    async pegarPorId (id) {
        const encontrado = await Modelo.findOne({
            where: {
                id: id
            }
        })

        if (!encontrado) {
            throw new NaoEncontrado()
        }

        return encontrado
    },
    atualizar (id, dadosParaAtualizar) {
        return Modelo.update(
            dadosParaAtualizar,
            {
                where: { id: id }
            }
        )
    },
    remover (id) {
        return Modelo.destroy({
            where: { id: id }
        })
    }
}