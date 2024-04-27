import React, { useMemo, useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [category, setCategory] = useState("");

  function onWeightChange(event) {
    setWeight(event.target.value);
  }

  function onHeightChange(event) {
    setHeight(event.target.value);
  }

  function calculateCategory() {
    const bmi = parseFloat(output);
    if (isNaN(bmi)) {
      setCategory(""); // Clear the category if BMI is not a number
    } else if (bmi < 18.5) {
      setCategory("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setCategory("Normal weight");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setCategory("Overweight");
    } else if (bmi>=30 && bmi<=35.0 ){
      setCategory("Obese");
    }else{
      setCategory("Extremely Obese");
    }
  }

  const output = useMemo(() => {
    const calculateheight = height / 100;
    return (weight / (calculateheight * calculateheight)).toFixed(1);
  }, [weight, height]);

  useEffect(() => {
    calculateCategory();
  }, [output]);

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>
          Weight {weight} kg
        </p>
        <input type='range' className='input-slider' step="1" min={40} max={200} value={weight} onChange={onWeightChange} />
        <p className='slider-output'>
          Height {height} cm
        </p>
        <input type='range' className='input-slider' step="1" min={140} max={220} value={height} onChange={onHeightChange} />
      </div>
      <div className='output-section'>
        <p>Your BMI is {output}.</p>
        {category && (
          <p className='category'>You are in the category of {category}</p>
        )}
      </div>
      <main>
  <img src="/bmi-range.jpg" alt="BMI Range" className="category-image" />
</main>

    </main>
  );
};

export default App;
