import { Grid, Input, InputLabel, Select, FormControl } from '@material-ui/core';
import { useStyles } from './styles';
import Title from './Title';

function FoodSection(props) {
  const { handleChange, foodType, defaultFoodWheight, handleFoodType } = props;
  const classes = useStyles();
  return (
      <>
      <Grid item xs={12}>
        <Title text="Food" />
      </Grid>
      <Grid item xs={8}>
        <FormControl 
          className={classes.inputText}
          required>
          <InputLabel htmlFor="food-type">Food type</InputLabel>
          <Select 
            required
            id="food-type"
            value={foodType || "default"}
            onChange={(event) => { handleFoodType(event) }}>
            <option disabled value="default">Select type</option>
            <option value="Pond weed">Pond weed</option>
            <option value="Seeds">Seeds</option>
            <option value="Insects">Insects</option>
            <option value="Worms">Worms</option>
            <option value="Other">Other</option>
          </Select>
        </FormControl>
        </Grid>
        <Grid item xs={4}>
          <Input
            id="food-weight"
            type="number"
            defaultValue={defaultFoodWheight}
            className={classes.input}
            style={{width: '64px'}}
            onChange={(event) => { handleChange(event) }}
            required
            inputProps={{
              step: 100,
            }}
          />(grams)
        </Grid>
      </>
      );
  }

      export default FoodSection;