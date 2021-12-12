import { useContext } from 'react';
import { TodosContext } from '../../contexts/todosContext';

const TodosList = () => {
  const { todos, setTodos } = useContext(TodosContext);

  return (
    <div>
      {todos?.map((todo) => {
        return <p>{todo.name}</p>;
      })}
    </div>
  );
};

export default TodosList;
