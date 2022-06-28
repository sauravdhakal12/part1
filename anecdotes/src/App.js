import { useState } from 'react'

const randomNum = () => {
  const random = Math.round(Math.random() * 6);
  return random;
}

const nextAnedtode = (setSelected) => {
  const random = randomNum();
  setSelected(random);
}

const handleVote = (selected, votes, changeVote) => {
  const temp = [...votes];
  temp[selected] += 1;

  changeVote(temp);
}

const AnecdoteButton = ({ setSelected, nextAnedtode, changeVote, selected, votes }) => {
  return (
    <div>
      <button onClick={() => { handleVote(selected, votes, changeVote) }}>vote</button>
      <button onClick={() => { nextAnedtode(setSelected) }}>next anecdote</button>
    </div>
  )
}

const most = (votes) => {
  let highest = 0;
  let num = 0; 

  for (let i = 0; i < 7; i++) {
    if (votes[i] > highest) {
      num = i;
      highest = votes[i];
    };
  }

  if (highest === 0) {
    return -1;
  }
  return num;
}

const MostVote = ({ anecdotes, votes }) => {
  const mostVotes = most(votes)

  if (mostVotes === -1) {
    return (
      <div>
        <h1>Highest voted anecdotes appear here!</h1>
      </div>
    )
  }
  return (
    <div>
      <h1>Anecdotes with most votes</h1>
      <p>
        {anecdotes[mostVotes]}
      </p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, changeVote] = useState(new Array(7).fill(0))

  return (
    <div>
      {anecdotes[selected]}
      <p> has {votes[selected]} votes </p>
      <AnecdoteButton setSelected={setSelected} nextAnedtode={nextAnedtode} changeVote={changeVote} selected={selected} votes={votes} />
      <MostVote votes={votes} anecdotes={anecdotes} />
    </div>
  )

}

export default App