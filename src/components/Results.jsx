import { calculateInvestmentResults, formatter } from "./util"

export default function Results({ userInput }){
    console.log(userInput)
    const resultsData = calculateInvestmentResults(userInput)
    // console.log(resultsData);
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment
    return(
        // <p>Results...</p>
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((yearData) => {
                    const TotalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                    const TotalAmountInvested = yearData.valueEndOfYear - TotalInterest;
                    return(
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(TotalInterest)}</td>
                            <td>{formatter.format(TotalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
       
    )
}