import { useEffect } from "react";
import { useContext, useState } from "react";
import { createContext, ReactNode } from "react";

type UserProviderProps = {
    children: ReactNode;
}

type User = {
    name: string,
    email: string
}


interface UserContextProps {
    user: User,
    setUser: (value: User) => void

}

export const UserContext = createContext({} as UserContextProps);

export const UserProvider = ({children}: UserProviderProps) => {
    const [user, setUser] = useState({name: "Miguel Albuquerque", email: "jmasantos07@gmail.com"});

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);