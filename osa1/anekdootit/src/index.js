import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  })
  const [mostVoted, setMostVoted] = useState(0)

  const handlePoints = (props) => {
    const newPoints = {...points};
    newPoints[selected] += 1;
    setPoints(newPoints)

    if (newPoints[selected] > newPoints[mostVoted]) {
      setMostVoted(selected)
    }
  }


  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}<br></br>
      has {points[selected]} votes<br></br>
      <button onClick={handlePoints}>vote</button>
      <Button handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text="next anecdote" />
      <h2>Anecdote with most votes</h2>
      {anecdotes[mostVoted]}<br></br>
      has {points[mostVoted]} votes
      
      
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)