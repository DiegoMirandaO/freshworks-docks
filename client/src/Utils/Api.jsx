import axios from 'axios';

const getFeds = () => {
  axios.get("http://localhost:3001/ducks/")
    .then(
      (result) => {
        console.log(result.data);
      },
      (error) => {
        console.error(error);
    });
}

const postFed = (ducksCount = 0, place = "", time = "", foodType = "", weight = 0, recurrent = false) => {
  if(
    typeof ducksCount !== 'number' 
    || typeof place !== 'string' 
    || typeof foodType !== 'string'
    || typeof weight !== 'number'
    || typeof recurrent !== 'boolean'
  ) {
      throw new Error('Invalid data type');
    }
  if(ducksCount <= 0) {
    throw new Error('At least 1 duck');
  }
  if( place.lenght > 200) {
    throw new Error('Place should not excede length of 200 chars ');
  }

  const today = new Date(Date.now());
  const timeFed = new Date(today.getFullYear() , today.getMonth(), today.getDay(), time.split(':')[0], time.split(':')[1]);
  const data = {
    fed_place: place,
    fed_ts: timeFed,
    food_type: foodType,
    food_weight: weight,
    ducks_number: ducksCount,
    is_recurrent: recurrent,
  };
    
  axios.post("/ducks/", data)
    .then(
      (result) => {
        console.log("POST", result);
      },
      (error) => {
        console.error(error);
    });
}

export { getFeds, postFed };