import mysql from 'mysql2/promise.js';

async function connect() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
    return connection;
}

async function executeQuery(query, params=[]) {
    const conexao = await connect();

    try {
        const resultado = await conexao.execute(query, params);
        return resultado;
    }
    catch (erro) {
        console.console.log();
        ('Erro ao executar query:', erro);
        throw erro;
    }
    finally {
        await conexao.end();
    }
}

export default executeQuery;