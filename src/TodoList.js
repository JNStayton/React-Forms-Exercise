import { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
	//set initial state
	const [ todos, setTodos ] = useState([]);

	//add a todo to state
	const addTodo = (newTodo) => {
		setTodos((todos) => [ ...todos, newTodo ]);
	};

	const removeTodo = (id) => {
		setTodos((todos) => todos.filter((todo) => todo.id !== id));
	};

	//make a Todo component for each todo in state
	const currentTodos = todos.map((todo) => (
		<Todo task={todo.task} removeTodo={removeTodo} key={todo.id} id={todo.id} />
	));

	return (
		<div>
			<h1>Current Todos</h1>
			<ul>{currentTodos}</ul>
			<NewTodoForm addTodo={addTodo} />
		</div>
	);
};

export default TodoList;
