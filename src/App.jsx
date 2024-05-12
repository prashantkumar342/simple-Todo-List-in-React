import { useEffect, useState } from 'react'
import './App.css'
import Todocomp from './Todocomp'

function App() {
  const savedtodo = () => {
    const savedtodo = localStorage.getItem('todo')
    if (savedtodo) {
      return JSON.parse(savedtodo)
    } else {
      return []
    }
  }
  const [input, setinput] = useState('')
  const [error, seterror] = useState('')
  const [todo, settodo] = useState(savedtodo)

  const tasksubmit = (e) => {
    e.preventDefault()
    if (input !== '') {
      localStorage.getItem(settodo([...todo, input]))
      setinput('')
      seterror('')
    } else {
      seterror("input box can't be empty")
    }
  }
  const deletebtn = (todoindex) => {
    const newtodo = todo.filter((_, index) => index !== todoindex)
    settodo(newtodo)
  }
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])



  return (
    <>
      <div>
        <h1 className='h1'>Manage Your Todo List</h1>
        <form onSubmit={tasksubmit} >
          <input className='input' value={input} onChange={(e) => setinput(e.target.value)} type="text" placeholder='Type Task Here' />
          <button className='button' type='submit'>Add</button>
          <p className='error'>{error}</p>
        </form>
        <hr style={{ fontSize: '5vh', border: 'black solid' }} />
        {todo.map((item, index) => (<Todocomp key={index} itemvalue={item} delfun={() => deletebtn(index)} />))}
      </div>

    </>
  )
}

export default App
