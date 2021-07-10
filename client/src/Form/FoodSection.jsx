import { Grid, Input, InputLabel, Select, FormControl } from '@material-ui/core';
import { useStyles } from './styles';
import Title from './Title';

function FoodSection(props) {
  const { handleChange, defaultFoodType, defaultFoodWheight } = props;
  const classes = useStyles();
  return (
      <>
      <Grid item xs={12}>
        <Title text="Food" />
      </Grid>
      <Grid item xs={4}>
        <FormControl 
          className={classes.inputText}
          required>
          <InputLabel htmlFor="food-type">Food type</InputLabel>
          <Select 
            required id="food-type"
            defaultValue={defaultFoodType}
            onChange={(event) => { handleChange(event) }}>
            <option value="pond-weed">Pond weed</option>
            <option value="seeds">Seeds</option>
            <option value="insects">Insects</option>
            <option value="worms">Worms</option>
            <option value="other">Other</option>
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