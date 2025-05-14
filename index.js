import express from "express";
const app = express();
import pool from "./db.js";

const PORT = 3000;

app.use(express.json());

app.get("/alunos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM alunos");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/alunos", async (req, res) => {
  const { nome, idade } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO alunos (nome, idade) VALUES ($1, $2) RETURNING *",
      [nome, idade]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/alunos/:id", (req, res) => {
  const id = req.params.id;
  pool.query("SELECT * FROM alunos WHERE id = $1", [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.rows.length === 0) {
      res.status(404).json({ error: "Aluno não foi encontrado" });
    } else {
      res.json(result.rows[0]);
    }
  });
});

app.put("/alunos/:id", async (req, res) => {
  const id = req.params.id;
  const { nome, idade } = req.body;

  try {
    const result = await pool.query(
      "UPDATE alunos SET nome = $1, idade = $2 WHERE id = $3 RETURNING *",
      [nome, idade, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Aluno não encontrado" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/alunos/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query(
      "DELETE FROM alunos WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Aluno não encontrado" });
    }
    res.json({ message: "Aluno deletado com sucesso", aluno: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/alunos`);
});
