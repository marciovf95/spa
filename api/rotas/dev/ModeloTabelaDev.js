const Sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')
// https://sequelize.org/v5/manual/data-types.html
const colunas = {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sexo: {
        type: Sequelize.STRING.BINARY,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    hobby: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: Sequelize.DATE,
        allowNull: false
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'developers',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instancia.define('dev', colunas, opcoes)