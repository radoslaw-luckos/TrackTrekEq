import { setDoc, doc } from 'firebase/firestore';
import { createContext, useState, ReactNode, FC } from 'react';
import { db } from '../utils/firebase';
import { UserContextType, IUserData, IItem } from './@types.user';

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider: FC<ReactNode> = ({ children }) => {
	const [userData, setUser] = useState<IUserData>({ email: '', id: '', items: [], lists: [] });
	const [addItemModalOpened, setAddItemModalOpened] = useState<boolean>(false);

	const deleteItem = async (itemId: string, userId: string) => {
		const newItems: IItem[] = userData.items.filter((item: IItem) => {
			if (item.id !== itemId) return item;
		});

		const newUserData = { ...userData, items: newItems };
		const userDocRef = doc(db, 'users', userId);
		await setDoc(userDocRef, newUserData);
	};

	const createItem = async (newItem: IItem | null, userId: string) => {
		if (newItem) {
			const newItems: IItem[] = [...userData.items, newItem];
			const newUserData = { ...userData, items: newItems };
			const userDocRef = doc(db, 'users', userId);
			await setDoc(userDocRef, newUserData);
		} else {
			alert('Type any item name');
		}
	};

	return (
		<UserContext.Provider
			value={{
				userData,
				setUser,
				deleteItem,
				createItem,
				addItemModalOpened,
				setAddItemModalOpened,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
