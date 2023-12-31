// TERCERA FORMA TEST

const server = require('./server')
const PORT = 3001;
const { conn } = require('../src/DB_connection') // AGREGADO DB SEQUELIZE ORM

server.listen(PORT, async() => {
   await conn.sync({ force: true }) // AGREDADO DB SEQUELIZE
   console.log('Server raised in port: ' + PORT);
});

// Antes de que se levante el servidor, sincronizamos la db
// alter: Actualiza la db y modifica

// conn.sync({ alter: true}).then(() => {
//    server.listen(PORT, () => {
//       console.log('Server raised in port: 3001')
//    })
// })

//SEGUNDA FORMA AXIOS:

// const http = require("http")
// const PORT = 3001
// const { getCharById } = require('./controllers/getCharById')

// http.createServer((req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*')

//   const {url} = req

//   if(url.includes("/rickandmorty/character")){
//     let urlArray = url.split("/")
//     let id = Number(urlArray.pop())
//     getCharById(res, id)
//   }
// })
// .listen(PORT, "localhost")

// PRIMERA FORMA WEB - SERVER: 

// const characters = require("./utils/data")

// if(url.includes("/rickandmorty/character")){
//   let urlArray = url.split("/")
//   let id = Number(urlArray.pop())

//   let foundCh = characters.find((ch) => ch.id === id)

//   if(foundCh){
//     res.writeHead(200, {"Content-Type": "application/json"})
//     res.end(JSON.stringify(foundCh))
//   } else {
//     res.writeHead(404, {"Content-Type": "application/json"})
//     res.end(JSON.stringify({error: "Character not found"}))
//   }
// }