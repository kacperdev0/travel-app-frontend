import React, { useState, useEffect } from 'react';
import { Slider, Grid, Typography } from '@mui/material';

const SliderComponent = ({ point1, point2, point3 }) => {
  const [sliderValues, setSliderValues] = useState([0, 50, 100]);

  useEffect(() => {
    const newValues = [point1 ?? sliderValues[0], point2 ?? sliderValues[1], point3 ?? sliderValues[2]];
    setSliderValues(newValues);
  }, [point1, point2, point3]);

  const handleChange = (event, newValue) => {
    setSliderValues(newValue);
  };

  return (
        <Slider
          value={sliderValues}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          max={100}
          step={1}
          marks={[
            { value: sliderValues[0], label: sliderValues[0].toString() },
            { value: sliderValues[1], label: sliderValues[1].toString() },
            { value: sliderValues[2], label: sliderValues[2].toString() },
          ]}
        />
  );
};

export default SliderComponent;
