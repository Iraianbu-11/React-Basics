import { useState } from "react";
function generateId() {
  return Math.floor(Math.random() * 100); 
}

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((x) => x.id !== id));
  };

  const handleSubmit = () => {
    setTodos([...todos, { text: input, id: generateId() }]);
    setInput("");
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add Todo"
        />
        <button onClick={handleSubmit}>Submit</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => removeTodo(todo.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
