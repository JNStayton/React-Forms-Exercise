import { useState } from 'react';

const NewBoxForm = ({ addBox }) => {
	//define initial state
	const INITIAL_STATE = {
		width: '',
		height: '',
		color: ''
	};

	const [ formData, setFormData ] = useState(INITIAL_STATE);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addBox({ ...formData, id: formData.color });
		setFormData(INITIAL_STATE);
	};

	return (
		<form onSubmit={handleSubmit}>
			{/* width input */}
			<label htmlFor="width">Width</label>
			<input
				id="width"
				type="number"
				name="width"
				placeholder="Box Width"
				onChange={handleChange}
				value={formData.width}
			/>
			<label htmlFor="height">Height</label>
			<input
				id="height"
				type="number"
				name="height"
				placeholder="Box Height"
				onChange={handleChange}
				value={formData.height}
			/>
			<label htmlFor="color">Color</label>
			<input
				id="color"
				type="text"
				name="color"
				placeholder="Box Color"
				onChange={handleChange}
				value={formData.color}
			/>
			<button>Add Box</button>
		</form>
	);
};

export default NewBoxForm;
