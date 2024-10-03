import logo from './logo.svg';
import './App.css';
import UserInput from './components/UserInput';
import Header from './components/Header';
import { useState } from 'react';
import Results from './components/Results';

function App() {
  const [inputValue, setInputValue] = useState({
    //input identifier : value
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = inputValue.duration >= 1

  function handleChange(inputIdentifier, eventNewValue) {
    setInputValue((prevInputValue) => {
      console.log(prevInputValue);
      return {
        ...prevInputValue,
        [inputIdentifier]: +eventNewValue,
      };
    });
  }
  return (
    <>
    {/* <h1>React Investment Calculator</h1> */}
    <Header />
    <UserInput onInputChange={handleChange} userInput={inputValue} />
    {!inputIsValid && <p className='center'>Please enter a duration greater than Zero</p>}
    {inputIsValid && <Results userInput={inputValue} />}
    </>
  );
}

export default App;
