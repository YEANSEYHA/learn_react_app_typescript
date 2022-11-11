import Todos from "./components/Todos"
import Todo from "./models/todo"

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn typescript")]
  return (
    <div className="App">
      <Todos items={todos} />
    </div>
  )
}

export default App
