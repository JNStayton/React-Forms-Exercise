import { useState } from 'react';

const Todo = ({ task = 'default todo text', removeTodo, id }) => {
	const handleRemove = () => removeTodo(id);

	return (
		<div>
			<li>
				{task} <button onClick={handleRemove}>X</button>
			</li>
		</div>
	);
};

export default Todo;
