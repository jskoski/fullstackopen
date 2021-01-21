import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }
  const part3 = {
    name: 'State of a component',
    exercises:  14,
  }

  return (
    <div>
      <Header course={course} />
      <Content name1={part1.name} exercises1={part1.exercises}
      name2={part2.name} exercises2={part2.exercises}
      name3={part3.name} exercises3={part3.exercises}/>
      <Total part1={part1.exercises} part2={part2.exercises} part3={part3.exercises} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part1={props.part1} />
      <Part part2={props.part2} />
      <Part part3={props.part3} />
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.part1}
      </p>
      <p>
        {props.part2}
      </p>
      <p>
        {props.part3}
      </p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}
      </p>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))