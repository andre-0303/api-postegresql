# API PostgreSQL - API de Escola 📚

API desenvolvida com **PostgreSQL** para gerenciar dados de alunos. Oferece rotas para listar, adicionar, editar, consultar e deletar alunos. 🎓

## Tabela de Conteúdos 📑

1. [Tecnologias ⚙️](#tecnologias)
2. [Instalação 🚀](#instalacao)
3. [Uso 🛠️](#uso)
4. [Rotas 📡](#rotas)
5. [Contribuindo 🙌](#contribuindo)
6. [Licença 📜](#licenca)

## Tecnologias ⚙️

- **Node.js** 🖥️
- **Express.js** 🌐
- **PostgreSQL** 🏫
- **pg (node-postgres)** 🔗

## Instalação 🚀

1. Clone o repositório:
    ```bash
    git clone https://github.com/SEU_USUARIO/api-postegresql.git
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Configure o banco de dados no `.env`:
    ```env
    DB_HOST=localhost
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_NAME=curso_pg
    ```
4. Inicie o servidor:
    ```bash
    npm run dev
    ```
O servidor estará disponível em `http://localhost:3000`.

## Uso 🛠️

- **GET /alunos**: Retorna todos os alunos.
- **POST /alunos**: Adiciona um novo aluno.
- **GET /alunos/:id**: Retorna um aluno específico.
- **PUT /alunos/:id**: Atualiza os dados de um aluno.
- **DELETE /alunos/:id**: Deleta um aluno.

## Rotas 📡

- `GET /alunos`: Lista todos os alunos.
- `POST /alunos`: Cria um aluno.
- `GET /alunos/:id`: Retorna um aluno.
- `PUT /alunos/:id`: Atualiza um aluno.
- `DELETE /alunos/:id`: Deleta um aluno.

## Contribuindo 🙌

1. Faça um **Fork** do repositório.
2. Crie uma branch:
    ```bash
    git checkout -b minha-modificacao
    ```
3. Faça as alterações e commit:
    ```bash
    git commit -am 'Alterações feitas'
    ```
4. Envie para o repositório remoto:
    ```bash
    git push origin minha-modificacao
    ```
5. Crie um **Pull Request**.

## Licença 📜

Este projeto está licenciado sob a [MIT License](LICENSE).
