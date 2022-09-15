import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => setGood(good + 1)
  const handleClickNeutral = () => setNeutral(neutral + 1)
  const handleClickBad = () => setBad(bad + 1)

  const Display = ({name, num}) => <div>{name} {num}</div>
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleClickGood}>Good</button>
      <button onClick={handleClickNeutral}>Neutral</button>
      <button onClick={handleClickBad}>Bad</button>
      <h1>Statistics</h1>

      <Display name = 'Good' num = {good}></Display>
      <Display name = 'neutral' num = {neutral}></Display>
      <Display name = 'bad' num = {bad}></Display>

    </div>
  )
}


export default App