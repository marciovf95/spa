const TabelaDev = require('./TabelaDev')
const CampoInvalido = require('../../erros/CampoInvalido')
const DadosNaoFornecidos = require('../../erros/DadosNaoFornecidos')

class Dev {
    constructor ({ id, nome, sexo, idade, hobby, dataNascimento, dataCriacao, dataAtualizacao, versao }) {
        this.id = id
        this.nome = nome
        this.sexo = sexo
        this.idade = idade
        this.hobby = hobby
        this.dataNascimento = dataNascimento
        this.dataCriacao = dataCriacao
        this.dataAtualizacao = dataAtualizacao
        this.versao = versao
    }

    async criar () {
       
        this.validar()
        const resultado = await TabelaDev.inserir({
            nome : this.nome,
            sexo : this.sexo,
            idade : this.idade,
            hobby : this.hobby,
            dataNascimento : this.dataNascimento            
        })
        this.id = resultado.id
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao
        this.versao = resultado.versao
    }

    async carregar () {    
          
        const encontrado = await TabelaDev.pegarPorId(this.id)
        this.nome = encontrado.nome
        this.sexo = encontrado.sexo
        this.idade = encontrado.idade
        this.hobby = encontrado.hobby
        this.dataNascimento = encontrado.dataNascimento
        this.dataCriacao = encontrado.dataCriacao
        this.dataAtualizacao = encontrado.dataAtualizacao
        this.versao = encontrado.versao
    }

    async atualizar () {
        await TabelaDev.pegarPorId(this.id)
        const campos = ['nome', 'sexo', 'idade', 'hobby', 'dataNascimento']
        const dadosParaAtualizar = {}

        campos.forEach((campo) => {
            const valor = this[campo]
            if (typeof valor === 'string' && valor.length > 0) {
                dadosParaAtualizar[campo] = valor
            }
        })

        if (Object.keys(dadosParaAtualizar).length === 0) {
            throw new DadosNaoFornecidos()
        }

        await TabelaDev.atualizar(this.id, dadosParaAtualizar)
    }

    remover () {
        return TabelaDev.remover(this.id)
    }

    validar () {
        
        const campos = ['nome', 'sexo', 'idade', 'hobby', 'dataNascimento'];
        
        campos.forEach(campo => {
            const valor = this[campo]
            if (typeof valor !== 'string' || valor.length === 0) {
                console.log(typeof valor)
                throw new CampoInvalido(campo)
            }
        })
    }
}

module.exports = Dev