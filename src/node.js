const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/recipes', function (req, res) {
  res.json(recipes);
});

app.get('/drinks', function (req, res) {
  res.json(drinks);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

// ---------------------------------------------------

// /* Rota com caminho '/', utilizando o método GET */
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// /* Rota com caminho '/', utilizando o método POST */
// app.post('/', function (req, res) {
//   res.send('Hello World!');
// });

// /* Rota com caminho '/', utilizando o método PUT */
// app.put('/', function (req, res) {
//   res.send('Hello World!');
// });

// /* Rota com caminho '/', utilizando o método DELETE */
// app.delete('/', function (req, res) {
//   res.send('Hello World!');
// });

// /* Rota com caminho '/' para qualquer método HTTP */
// app.all('/', function (req, res) {
//   res.send('Hello World!');
// });

// /* Ou podemos encadear as requisições para evitar repetir o caminho */
// app
//   .route('/')
//   .get(function (req, res) {
// 		// Requisições para rota GET `/` são resolvidas aqui!
//     res.send('Hello World! Get');
//   })
//   .post(function (req, res) {
// 		// Requisições para rota POST `/` são resolvidas aqui!
//     res.send('Hello World! post');
//   });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });