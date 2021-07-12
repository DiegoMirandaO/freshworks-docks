import { useMemo, useState } from 'react';
import { Chart } from 'react-google-charts';
import { getFeds } from '../Utils/Api';

function FoodType() {
  const [data,  setData] = useState([["Foot Type", "Weight"]]);
  
  const promiseData = getFeds();
  useMemo(()=> {
    promiseData.then(d => {
      const myData = dataTransform(d);
      setData(myData);
    });

  }, []);

  return (
    <Chart
    height={'300px'}
    chartType="ColumnChart"
    loader={<div>Loading Chart</div>}
    data={data}
    options={{
      title: 'Total weight of each food type',
      chartArea: { width: '100%' },
      hAxis: {
        title: 'Food Type',
        minValue: 0,
      },
    }}
    />
  );
}

function dataTransform(rawData) {
  if(!rawData || !rawData.length || rawData.length <= 0){
    console.log("No data")
    return;
  }

  var data = {};
  rawData.forEach(element => {
    const type = element.food_type;
    const exists = Object.keys(data).some(val=>val === type)
    if(!exists){
      data = Object.assign({}, data, {[type]: element.food_weight})
    } else {
      data[type] = data[type] + element.food_weight;
    }
  });
  
  const dataArray = [["Foot Type", "Weight"]];
  Object.keys(data).sort().forEach((key) => dataArray.push([key, data[key]]));
  return dataArray;
};



export default FoodType;
    