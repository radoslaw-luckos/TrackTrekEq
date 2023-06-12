export interface IUserData {
    id: string,
    email: string,
    items: string[],
    lists: string[]
}

export type UserContextType = {
    userData: IUserData,
    setUser: React.Dispatch<React.SetStateAction<IUserData>>
}