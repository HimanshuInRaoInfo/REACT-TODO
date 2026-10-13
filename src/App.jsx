import './App.css'
import { TodoList } from './components/todo-list.component'

function App() {  

  return (
    <>
      <div className='flex w-full h-full flex-col items-start max-w-8 mx-auto'>
        <h4>Hey Himanshu!</h4>
        <p>Here is your tasks!</p>
        <TodoList />
      </div>
    </>
  )
}

export default App
