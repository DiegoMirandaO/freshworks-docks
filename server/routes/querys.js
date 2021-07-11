require('dotenv').config();
const Pool = require('pg').Pool
const pool = new Pool({
  host: process.env.DB_HST,
  database: process.env.DB_NME,
  port: process.env.DB_PRT,
  user: process.env.DB_USR,
  password: process.env.DB_PSW
});

const getDuckFeds = (request, response) => {
  pool.query('SELECT * FROM ducks ORDER BY ID ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getDuckFedById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM ducks WHERE ID = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const createDuckFed = (request, response) => {
  const { place, ts, food, weight, ducks_number, is_recurrent } = request.body;

  pool.query(
    'INSERT INTO ducks (fed_ts, food_weight, ducks_number, is_recurrent, fed_place, food_type ) VALUES ($1, $2, $3, $4, $5, $6)',
    [ ts, weight, ducks_number, is_recurrent, place, food],
    (error, results) => {
      if (error) {
        throw error
      }
      console.log('########', results, '########')
      response.status(201).send(`Duck added`)
    })
};

// const createUser = (request, response) => {
//   const { name, email } = request.body

//   pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
//     if (error) {
//       throw error
//     }
//     console.log('########', results, '########')
//     response.status(201).send(`User added`)
//   })
// };

// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id)
//   const { name, email } = request.body

//   pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User modified with ID: ${id}`)
//     }
//   )
// };


const deleteDuckFed = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM ducks WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
};

// const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`User deleted with ID: ${id}`)
//   })
// };

module.exports = {
  getDuckFeds,
  getDuckFedById,
  createDuckFed,
  deleteDuckFed,
};