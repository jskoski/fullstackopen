import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState (0)
  const [average, setAverage] = useState (0)
  const [positive, setPositive] = useState (0)

  const setToGood = newValue => {
    setPositive(positive + 1)
    setAverage(average + 1)
    setAll(allClicks + 1)
    setGood(newValue)
  }

  const setToNeutral = newValue => {
    setAll(allClicks + 1)
    setNeutral(newValue)
  }

  const setToBad = newValue => {
    setAverage(average - 1)
    setAll(allClicks + 1)
    setBad(newValue)
  }


  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => setToGood (good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <Statistics allClicks={allClicks} average={average} positive={positive} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
  )

const StatisticLine = (props) => {
  return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
  )
}

const Statistics = (props) => {
  if (props.allClicks === 0) {
    return (
      <div>
        <h2>
          statistics
        </h2>
        <p>
          No feedback given
        </p>
      </div>
    )
  }

  return (
  <div>
    <h2>statistics</h2>
    <table>
      <tbody>
    <StatisticLine text="good" value={props.good} />
    <StatisticLine text="neutral" value={props.neutral} />
    <StatisticLine text="bad" value={props.bad} />
    <StatisticLine text="all" value={props.allClicks} />
    <StatisticLine text="average" value={props.average / props.allClicks} />
    <StatisticLine text="positive %" value={props.positive / props.allClicks * 100} />
      </tbody>
    </table>
  </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)