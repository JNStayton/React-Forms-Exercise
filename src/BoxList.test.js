import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing', () => {
	render(<BoxList />);
});

it('matches snapshot', () => {
	const { asFragment } = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();
});

function addBox(boxes, height = 5, width = 5, color = 'grey') {
	//get the elements
	const widthInput = boxes.getByLabelText('Width');
	const heightInput = boxes.getByLabelText('Height');
	const colorInput = boxes.getByLabelText('Color');
	const btn = boxes.getByText('Add Box');
	//keep track of changes
	fireEvent.change(widthInput, { target: { value: width } });
	fireEvent.change(heightInput, { target: { value: height } });
	fireEvent.change(colorInput, { target: { value: color } });
	//add box
	fireEvent.click(btn);
}

it('should add new box', () => {
	const boxes = render(<BoxList />);
	//no boxes yet
	expect(boxes.queryByText('Remove Box?')).not.toBeInTheDocument();
	addBox(boxes);
	//box
	expect(boxes.queryByText('Remove Box?')).toBeInTheDocument();
});

it('should remove a box', () => {
	const boxes = render(<BoxList />);
	addBox(boxes);
	//there's a box
	expect(boxes.queryByText('Remove Box?')).toBeInTheDocument();
	const btn = boxes.getByText('Remove Box?');
	fireEvent.click(btn);
	//and now there's no box
	expect(boxes.queryByText('Remove Box?')).not.toBeInTheDocument();
});
