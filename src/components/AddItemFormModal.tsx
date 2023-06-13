import { useContext, useState } from 'react';
import { IItem, UserContextType } from '../context/@types.user';
import { UserContext } from '../context/UserContext';
import Box from '../layout/Box';
import { CgClose, CgMathPlus } from 'react-icons/cg';
import { v4 as uuidv4 } from 'uuid';

const AddItemFormModal = () => {
	const [item, setItem] = useState<string>('');
	const { createItem, userData, setAddItemModalOpened } = useContext(
		UserContext
	) as UserContextType;

	const submitionHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newItem: IItem = {
			id: uuidv4(),
			itemName: item,
		};

		createItem(newItem, userData.id);
		setAddItemModalOpened(false);
	};

	return (
		<form
			className='modal'
			onSubmit={(e) => submitionHandler(e)}
		>
			<Box>
				<fieldset className='modal__field'>
					<label htmlFor='itemName'>Enter item name </label>
					<input
						type='text'
						id='itemName'
						value={item}
						onChange={(e) => setItem(e.target.value)}
						required
					/>
				</fieldset>
				<div className='modal__field'>
					<button
						type='submit'
						className='modal__btn modal__btn--submit'
					>
						<span>Submit new item!</span>
						<CgMathPlus />
					</button>
					<button
						className='modal__btn modal__btn--close'
						onClick={() => setAddItemModalOpened(false)}
					>
						<span>Cancel </span>
						<CgClose />
					</button>
				</div>
			</Box>
		</form>
	);
};

export default AddItemFormModal;
