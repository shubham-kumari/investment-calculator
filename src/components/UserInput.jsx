
export default function UserInput({ onInputChange, userInput }) {
//   const [inputValue, setInputValue] = useState({
//     //input identifier : value
//     InitialInvestment: 10000,
//     AnnualInvestment: 1200,
//     expectedReturn: 6,
//     duration: 6,
//   });

//   function handleChange(inputIdentifier, eventNewValue) {
//     setInputValue((prevInputValue) => {
//       console.log(prevInputValue);
//       return {
//         ...prevInputValue,
//         [inputIdentifier]: eventNewValue,
//       };
//     });
//   }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
          onChange={(event) => onInputChange("initialInvestment", event.target.value)}
            value={userInput.initialInvestment}
            type="number"
            required
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            onChange={(event) =>
              onInputChange("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment}
            type="number"
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            onChange={(event) =>
              onInputChange("expectedReturn", event.target.value)
            }
            value={userInput.expectedReturn}
            type="number"
            required
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            onChange={(event) =>
              onInputChange("duration", event.target.value)
            }
            value={userInput.duration}
            type="number"
            required
          />
        </p>
      </div>
    </section>
  );
}
