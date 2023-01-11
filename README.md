## Descrição

CRUD de frases com traduções em linguagens ficticias, essa aplicação faz consumo da seguinte api externa [Fun Translator](https://funtranslations.com/) 

## 🔌 Instalação

```bash
$ npm install
```

## ⚡ Executando

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

Exemplo do body da requisição no postman:

<img src="https://i.ibb.co/K0MpkPV/Microsoft-Teams-image-20.png">

Exemplo de resultado:

```json
{
  "success": {
    "total": 1
  },
  "contents": {
    "translated": "Bello, ka am con a banana!",
    "text": "Hello, I am hungry!",
    "translation": "minion"
}

}
```

## ✔️ Tecnologias utilizadas

- Node v19.2.0
- Express v4.17.13
- Nest v9.0
- Typescript
- TypeORM v0.3.11
- MySQL
- Postman v10.6.7

