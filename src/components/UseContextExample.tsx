import { useCallback } from "react";
import { ChangeEvent } from "react";
import { useUser } from "../hooks/UseUser";

export function UseContextExample(){
    const {user, setUser} = useUser();

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const name = e.target.name;
        setUser({...user, [name]: value})
    }, [user])

    return(
        <div>
            <h1>useContext/Hooks - Permite compartilhar o estado de um elemento em toda arvore de componentes da DOM</h1>
            <input type="text" placeholder="name" name="name" value={user.name} onChange={e => handleChange(e)}/>
            <input type="text" placeholder="e-mail" name="email" value={user.email} onChange={e => handleChange(e)}/>
        </div>
    )
}