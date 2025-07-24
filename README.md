# Sistema-Cadastro-Usuario

Sistema completo para cadastro de usuários, com front-end em **Next.js**, back-end em **NestJS**, documentação com **Swagger**, persistência de dados em **MySQL** e uso do **TypeORM** como ORM.

---

## 📌 Objetivo

Permitir o cadastro de usuários com **e-mail** e **senha**, armazenando os dados com segurança no banco de dados e disponibilizando uma API documentada com Swagger para facilitar o consumo dos endpoints.

---

## 🛠️ Tecnologias Utilizadas

### 🧩 Front-end (pasta `frontend`)
- Next.js
- React
- TypeScript
- Axios (para requisições HTTP)

### 🔧 Back-end (pasta `backend`)
- NestJS
- TypeScript
- TypeORM
- MySQL
- Swagger
- Dotenv

---

## 📁 Estrutura do Projeto

```bash
Sistema-Cadastro-Usuario/
├── frontend/ # Projeto Next.js
│ ├── pages/
│ └── components/
├── backend/ # Projeto NestJS
│ ├── src/
│ │ ├── user/
│ │ ├── auth/
│ │ ├── main.ts
│ ├── ormconfig.ts
│ └── ...
└── README.md
```
