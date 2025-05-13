import express from 'express';
const app = express();
import pool from './db.js';

const PORT = 3000;

app.use(express.json());

app.get('/alunos', async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM alunos');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/alunos', async (req, res) =>{
    const {nome, idade} = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO alunos (nome, idade) VALUES ($1, $2) RETURNING *',
            [nome, idade]
        );
        res.status(201).json(result.rows[0]);
    } catch(err) {
        res.status(500).json({error: err.message});
    }
});

app.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})