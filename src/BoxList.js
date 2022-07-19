import { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

const BoxList = () => {
	//set state
	const [ boxes, setBoxes ] = useState([
		{ width: 5, height: 5, color: 'blue', id: 'blue' },
		{ width: 7, height: 7, color: 'teal', id: 'teal' },
		{ width: 3, height: 3, color: 'magenta', id: 'magenta' }
	]);

	//add a box to state
	const addBox = (newBox) => {
		setBoxes((boxes) => [ ...boxes, newBox ]);
	};

	//remove a box from state
	const remove = (id) => {
		setBoxes((boxes) => boxes.filter((box) => box.id !== id));
	};

	const allBoxes = boxes.map((box) => (
		<Box
			key={box.color}
			id={box.color}
			width={box.width}
			height={box.height}
			color={box.color}
			handleRemove={remove}
		/>
	));

	return (
		<div>
			<NewBoxForm addBox={addBox} />
			{allBoxes}
		</div>
	);
};

export default BoxList;
