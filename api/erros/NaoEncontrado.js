class NaoEncontrado extends Error {
    constructor () {
        super('Dev não foi encontrado!')
        this.name = 'NaoEncontrado'
        this.idErro = 0
    }
}

module.exports = NaoEncontrado