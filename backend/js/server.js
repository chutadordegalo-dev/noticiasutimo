import express from 'express';
import cors from 'cors';
import executeQuery from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get('/noticias', async (req, res) => {
    let query = `
        SELECT
            id,
            titulo,
            conteudo,
            caminho_imagem,
            link
        FROM
            noticias
        ORDER BY
            id DESC
        LIMIT 10
    `;

    let resultado = await executeQuery(query);
    res.send(resultado[0]);
});

app.post('/noticias', async (req, res) => {

    var query = `
        INSERT INTO noticias (
            titulo,
            conteudo,
            caminho_imagem,
            link
        ) VALUES (
            ?,
            ?,
            ?,
            ?
        )
    `;

    var noticias = [
        req.body.titulo,
        req.body.conteudo,
        req.body.imagem,
        req.body.link
    ];

    let resultado = await executeQuery(query, noticias);

    try {
        res.send({
            insertId: resultado[0].insertId
        });
    }
    catch{
        res.send({
            insertId: null
        });
    }
});

app.listen(3000, () =>{
    console.log("Servidor online em http://localhost:3000")
});