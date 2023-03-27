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

    // console.log()でstateの状態がすぐ見れる
    // const newTodos = [newTodo, ...todos]
    // setTodos(newTodos);
    // setInputValue("");
    // console.log(newTodos);

    setTodos([newTodo, ...todos]);
    setInputValue("");
  };

  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      } //inputValue=今編集して入力している値
      return todo;
    });

    setTodos(newTodos);
  };

  const handleCheck = (id: number, isChecked: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isChecked = !isChecked;
      }
      return todo;
    });

    setTodos(newTodos);
  };

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
        <ul className="todoList">
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="text"
                value={todo.inputValue}
                disabled={todo.isChecked}
                onChange={(e) => handleEdit(todo.id, e.target.value)}
                className="inputText"
              />
              <input
                type="checkbox"
                onChange={() => handleCheck(todo.id, todo.isChecked)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
