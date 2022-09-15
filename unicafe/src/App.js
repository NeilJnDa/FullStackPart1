import { useState } from 'react'

const StatisticLine = ({text, value, percentage = false}) => {
  if(percentage)
  return(<div>{text} {value}  %</div>)
  return(<div>{text} {value}  </div>)

}
const Statistics = (props) => {
  const good = props.data[0]
  const neutral = props.data[1]
  const bad= props.data[2]
  if(good + neutral + bad == 0)
  return(
    <div>
          <h1>Statistics</h1>
      <p>
        No feedback given
      </p>
    </div>
  )
  return(
    <div>
    <h1>Statistics</h1>
    <table>
    <tbody>
      <tr>
        <td>Good</td>
        <td>{good}</td>
      </tr>
      <tr>
        <td>Neutral</td>
        <td>{neutral}</td>
      </tr>
      <tr>
        <td>Bad</td>
        <td>{bad}</td>
      </tr>
      <tr>
        <td>All</td>
        <td>{good + neutral + bad}</td>
      </tr>
      <tr>
        <td>Average</td>
        <td>{(good + neutral + bad) / 3}</td>
      </tr>
      <tr>
        <td>Positive</td>
        <td>{good / (good + neutral + bad) * 100}%</td>
      </tr>
      </tbody>
    </table>
    {/* <StatisticLine text = 'Good' value = {good}></StatisticLine>
    <StatisticLine text = 'Neutral' value = {neutral}></StatisticLine>
    <StatisticLine text = 'Bad' value = {bad}></StatisticLine>
    <StatisticLine text = 'Average' value = {(good + neutral + bad) / 3}></StatisticLine>
    <StatisticLine text = 'Positive' value = {(good / (good + neutral + bad) * 100)} percentage = {true}></StatisticLine> */}
    </div>
  )
}
const Button = ({onClickHandler, text}) => <button onClick={onClickHandler}>{text}</button>
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => setGood(good + 1)
  const handleClickNeutral = () => setNeutral(neutral + 1)
  const handleClickBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClickHandler={handleClickGood} text = 'Good'></Button>
      <Button onClickHandler={handleClickNeutral} text = 'Neutral'></Button>
      <Button onClickHandler={handleClickBad} text = 'Bad'></Button>
      <Statistics data = {[good, neutral, bad]}></Statistics>
    </div>
  )
}


export default App