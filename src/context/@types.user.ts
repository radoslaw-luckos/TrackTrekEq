export interface IUserData {
    id: string,
    email: string,
    items: IItem[],
    lists: string[]
};
export type IItem = {
    id: string,
    itemName: string
};

export type UserContextType = {
    userData: IUserData,
    setUser: React.Dispatch<React.SetStateAction<IUserData>>,
    deleteItem: (itemId: string, userId: string) => void,
    createItem: (newItem: IItem, userId: string) => void,
    addItemModalOpened: boolean,
    setAddItemModalOpened: React.Dispatch<React.SetStateAction<boolean>>,
};