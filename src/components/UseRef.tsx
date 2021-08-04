import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";


export function UseRef(){
    const [value, setValue] = useState('');
    const input = useRef<HTMLInputElement>(null);

    useEffect(() => {
        input.current?.focus()
        console.log(input.current);
    }, [value])

    function handleClick(val:string){
        setValue(val)
    }
    return(
        <div style={{display:"flex", height:"100vh", flexDirection:"column", justifyContent:"space-between"}}>
            <h1>useRef - Permite usar a referência de um elemento para o manipular</h1>
            <input ref={input} type="search" value={value} onChange={e => setValue(e.target.value)}/>
            <p onClick={() => handleClick('Clicou no texto')}>Clique aqui</p>
        </div>
    )
}