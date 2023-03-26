import { SetStateAction, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    isChecked: boolean;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      isChecked: false,
    };
    const newTodos = [newTodo, ...todos]
    setTodos(newTodos);
    setInputValue("");
    console.log(newTodos);
  };
  //useEffect(()=>console.log(todos), [todos])

  return (
    <div className="App">
      <div>
        <h2>Todo list -TypeScript-</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="inputText"
          ></input>
          <input type="submit" value="Submit" className="submitButton"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
