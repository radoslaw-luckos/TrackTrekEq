import { createContext, useState, ReactNode, FC } from 'react';
import { UserContextType, IUserData } from './@types.user';

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider: FC<ReactNode> = ({ children }) => {
	const [userData, setUser] = useState<IUserData>({ email: '', id: '', items: [], lists: [] });

	return <UserContext.Provider value={{ userData, setUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
