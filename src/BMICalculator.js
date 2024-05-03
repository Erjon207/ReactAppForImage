// BMICalculator.js
import React, { useState } from 'react';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');

  const calculateBMI = () => {

    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);


    // BMI Formel = gewiht durch höche ^2
    const bmi = weightValue / (heightValue * heightValue);

    const bmiCategory = getBMICategory(bmi);

    setResult(`Your BMI is: ${bmi.toFixed(2)} (${bmiCategory})`);
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      return 'Lauch';
    } else if (bmi < 20){
      return 'E chli Lauchig';
    } else if (bmi < 24.9) {
      return 'Normal ';
    } else if (bmi < 27.5){
      return 'E chli Fett';
    } else if (bmi < 29.9) {
      return 'Fat';
    } else if (bmi < 37) {
      return 'Summo Ringer';
    } else {
        return 'Waal';
    }
  };

  return (
    <div>
      <h1>BMI Calculator</h1>

      <label htmlFor="weight">Weight (kg): </label>
      <input class="input" type="number" id="weight" step="0.01" value={weight} onChange={(e) => setWeight(e.target.value)}/>

      <label htmlFor="height">Height (m): </label>
      <input class="input" type="number" id="height" step="0.01" value={height} onChange={(e) => setHeight(e.target.value)}/>

      <button onClick={calculateBMI}>Calculate BMI</button>

      <p id="result">{result}</p>

      <table>
        <thead>
          <tr>
            <th>BMI</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Less than 18.5</td>
            <td>Underweight</td>
          </tr>
          <tr>
            <td>18.5 - 20</td>
            <td>a bit too light</td>
          </tr>
          <tr>
            <td>20 - 24.9</td>
            <td>Normal weight</td>
          </tr>
          <tr>
            <td>25 - 27.5</td>
            <td>a bit too fat</td>
          </tr>
          <tr>
            <td>27.6 - 30</td>
            <td>Fat</td>
          </tr>
          <tr>
            <td>30 - 36.9</td>
            <td>Summo Ringer</td>
          </tr>
          <tr>
            <td>37 and more</td>
            <td>Waal</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BMICalculator;
