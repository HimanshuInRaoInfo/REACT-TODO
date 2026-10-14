import './App.css'
import { TodoList } from './components/todo-list.component'

function App() {  

  return (
    <>
      <div className='main-section'>
        <h2>Hey Himanshu!</h2>
        <p>Here is your tasks!</p>
        <TodoList />
      </div>
    </>
  )
}

export default App
