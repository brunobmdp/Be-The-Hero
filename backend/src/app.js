const express = require("express");
const routes =  require('./routes');
const cors = require('cors');
const {errors} = require('celebrate');

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports= app;


/**
 * Metodos HTTP
 * 
 * GET: buscar/listar informação no backend
 * POST: Criar informação no backand
 * PUT: Modificar informação no backend
 * DELETE: Apagar informação no backend
*/
/**
 * Tipos de Parametros
 * 
 * Query Params: Parametros nomeados na rota após "?" (filtros,paginação,)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, ultilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL server
 * NoSQL: MongoDB, CouchDB, etc.
 */

/**
 * Driver: SELECT * FROM users
 * Query builder: table('users').select('*').where()
 */
