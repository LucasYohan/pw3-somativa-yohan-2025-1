const Sequelize = require('sequelize');

const connection = require('../database/database');

const modelCategoria = require('./modelCategoria')

const modeLivro = connection.define(
    'tbl_livro',
    {
        cod_livro:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        cod_categoria:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        nome_livro:{
            type:Sequelize.STRING(100),
            allowNull:true
        },
        autor_livro:{
            type:Sequelize.STRING(100),
            allowNull:true
        },
        descricao_livro:{
            type:Sequelize.STRING(500),
            allowNull:true
        },
    }
);

modelCategoria.hasMany(modeLivro, {
    foreignKey: 'cod_categoria',
    sourceKey: 'cod_categoria'
});

modeLivro.belongsTo(modelCategoria, {
    foreignKey: 'cod_categoria',
    sourceKey: 'cod_categoria'
});

// modeLivro.sync({force:true});

module.exports = modeLivro;