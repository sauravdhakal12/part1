import { useState } from "react"

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  )
}

const Stats = ({ good, bad, neutral }) => {
  const all = good + bad + neutral;
  const avg = (good - bad) / all;
  const pos = (good / all) * 100;

  if (!all) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="all" value={all} />
          <StatisticsLine text="average" value={avg} />
          <StatisticsLine text="positive" value={pos} />
        </tbody>
      </table>

    </div>
  )
}

const Button = ({ text, handleFeedback }) => {
  return (
    <button onClick={handleFeedback}>{text}</button>
  )
}


const App = () => {
  const [allStats, changeStats] = useState({
    "good": 0,
    "neutral": 0,
    "bad": 0,
  });

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleGood = () => {
    setGood(good + 1);
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }

  const handleBad = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button text="good" handleFeedback={handleGood} />
      <Button text="neutral" handleFeedback={handleNeutral} />
      <Button text="bad" handleFeedback={handleBad} />

      <h2>statistics</h2>
      <Stats good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App