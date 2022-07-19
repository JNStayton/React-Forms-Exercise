const Box = ({ id, color = 'blue', width = 5, height = 5, handleRemove }) => {
	//pass the box color to the handleRemove function
	const remove = () => handleRemove(id);
	return (
		<div>
			<div
				style={{
					height: `${height}em`,
					width: `${width}em`,
					backgroundColor: `${color}`
				}}
			/>
			<button onClick={remove}>Remove Box?</button>
		</div>
	);
};

export default Box;
