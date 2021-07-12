require('dotenv').config();
const Pool = require('pg').Pool
const { Client } = require('pg');

const client = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

client.connect()

const getDuckFeds = (request, response) => {
  client.query('SELECT * FROM ducks ORDER BY ID ASC', (error, results) => {
    if (error) {
      console.log(error)
    }
    response.status(200).json(results.rows)
  })
};

const getDuckFedById = (request, response) => {
  const id = parseInt(request.params.id)

  client.query('SELECT * FROM ducks WHERE ID = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const createDuckFed = (request, response) => {;
  const { place, fed_ts, food_type, food_weight, ducks_number, is_recurrent } = request.body;
  client.query(
    'INSERT INTO ducks (fed_ts, food_weight, ducks_number, is_recurrent, fed_place, food_type ) VALUES ($1, $2, $3, $4, $5, $6)',
    [ fed_ts, food_weight, ducks_number, is_recurrent, place, food_type],
    (error, results) => {
      if (error) {
        console.error(error);
        return;
      }
      response.status(201).send(`Duck added`)
    })
};

const deleteDuckFed = (request, response) => {;
  const id = parseInt(request.params.id)

  client.query('DELETE FROM ducks WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
};

module.exports = {
  getDuckFeds,
  getDuckFedById,
  createDuckFed,
  deleteDuckFed,
};