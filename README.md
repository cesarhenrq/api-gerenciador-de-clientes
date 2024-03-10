# API Gerenciador de Clientes

API para gerenciamento de clientes.

## Counteúdo

- [Instalação](#instalação)
- [Uso](#uso)
- [Rotas](#rotas)

## Intalação

Para instalar as dependências do projeto, execute o comando abaixo:

```bash
$ npm install
```

ou

```bash
$ yarn
```

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente (veja o aquivo `.env.example` para um exemplo):

```env
PORT=3000 ou a porta que desejar(recomendado 3000)

DB_HOST=host do banco de dados
DB_USER=usuário do banco de dados
DB_PASSWORD=senha do banco de dados
DB_NAME=nome do banco de dados
DB_PORT=porta do banco de dados
```

## Uso

Para iniciar o servidor, execute o comando abaixo:

```bash
$ npm run dev
```

ou

```bash
$ yarn dev
```

A API estará disponível em `http://localhost:3000` ou na porta que você definiu no arquivo `.env`.

Antes de iniciar o servidor, é necessário criar a tabela no banco de dados. Para isso, execute o que se encontra no arquivo `ddl.txt` na raiz do projeto.

## Rotas

### GET /clientes

Retorna a lista de clientes.

### POST /clientes

Cria um novo cliente.

### GET /delivery

Retorna a lista da rota em que a visitação deve ser feita.
