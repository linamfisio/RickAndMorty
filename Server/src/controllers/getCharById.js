const axios = require('axios')
const URL = 'https://rickandmortyapi.com/api/character/'

async function getCharById(req, res){
  try{
    const { id } = req.params
    const { data } =  await axios.get(`${URL}${id}`)

    if(data){
      let character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
        status: data.status
      }
      res.status(200).json(character)
    } else{
      res.status(404).json({message: 'No hay personajes con ese ID'})
    }
  }
  catch(error){
    res.status(500).json({massage: error.massage})
  }
}



// FORMA EXRPESS
// const getCharById = (req, res) => {

//   const { id } = req.params;

//   axios.get(`${URL}${id}`).then((response) => {
//       const { name, status, species, gender, origin, image } = response.data;

//       // Crear un objeto con la información del personaje
//       const character = { id, name, status, species, gender, origin, image };

//       return character.name
//         ? res.status(200).json(character)
//         : res.status(404).send('Not Found');
//     })
//     .catch((error) => {
//       return res.status(500).send(error.message);
//     });
// }


// PRIMERA FORMA AXIOS:

// const axios = require("axios")

// exports.getCharById = (res, id) => {
//   axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//   .then((response) => {
//     const ch = response.data;
//     return {
//       id,
//       name: ch.name,
//       gender: ch.gender,
//       species: ch.species,
//       origin: ch.origin.name,
//       image: ch.image,
//       status: ch.status
//     }
//   })
//   .then ((response) =>{
//       res.writeHead(200, {"Content-Type": "application/json"})
//       res.end(JSON.stringify(response))
//   })
//   .catch((reason) => {
//     if(reason.response.status === 404){
//       res.writeHead(404, {"Content-Type": "text/plain"})
//       res.end("Error 404")
//     } else {
//       res.writeHead(500, {"Content-Type": "text/plain"})
//       res.end("Error del servidor")
//     }
//   })
// }
module.exports = { getCharById };
