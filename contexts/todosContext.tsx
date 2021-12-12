import { useState, createContext } from 'react';

interface ITodo {
  id: number;
  name: string;
}

interface ITodoContext {
  todos: ITodo[];
  setTodos;
  addTodo: (ITodo) => any;
}

const TodosContext = createContext({} as ITodoContext);

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => {
      return [todo, ...prevTodos];
    });
  };

  return (
    <TodosContext.Provider value={{ todos, setTodos, addTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

export { TodosContext, TodosProvider };
