# API REST USING NODEJS-EXPRESS AND MONGODB

## install dependencies

```bash
npm install
```

## start server

```bash
npm run dev
```
or
```bash
node server/index.js
```

# methods http

## POST

endpoint: http://localhost:3000/user/

body request

>{
  "name": "name",
	"position":"position",
	"office": "office",
	"salary": 0
  }

## GET

endpoint: http://localhost:3000/user/{_id}

## DELETE

endpoint: http://localhost:3000/user/{_id}

## PUT

http://localhost:3000/user/{_id}

body request

>{
  "name": "name",
	"position":"position",
	"office": "office",
	"salary": 0
  }

