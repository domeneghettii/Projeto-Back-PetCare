# PetCare API

Sistema web para cadastro, listagem e detalhamento de pets, com CRUD completo de *Pets* e *Tutores, e relacionamento **Tutor ↔ Pet*.  

---

## Funcionalidades

- CRUD completo de *Tutores*: criar, listar, buscar por ID, atualizar e excluir.  
- CRUD completo de *Pets*: criar, listar, buscar por ID, atualizar e excluir.  
- Relacionamento entre *Pets e Tutores* via tutor_id.  
- Ao listar um pet, exibe também o *nome e telefone do tutor*.  
- Exclusão de tutor remove automaticamente todos os pets vinculados (ON DELETE CASCADE).  

---

## Tecnologias

- Node.js + Express  
- PostgreSQL ou SQLite  
- REST API + JSON  
- CORS  

---

## Estrutura do Projeto

petcare-api/
│── src/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   ├── tutorModel.js
│   │   └── petModel.js
│   ├── controllers/
│   │   ├── tutorController.js
│   │   └── petController.js
│   ├── routes/
│   │   ├── tutorRoutes.js
│   │   └── petRoutes.js
│   └── database/
│       └── schema.sql
│── .env
│── package.json
│── server.js

## Configuração do Ambiente

1. Clone o repositório:

```bash
git clone https://github.com/domeneghettii/Projeto-Back-PetCare.git
cd Projeto-Back-PetCare