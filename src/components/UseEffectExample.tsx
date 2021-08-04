import { useEffect } from "react";
import { useState } from "react";


export function UseEffectExample(){
    const [mount, setMount] = useState('');
    const [update, setUpdate] = useState(['atualizado ']);
    const [updateOtherComponent, setUpdateOtherComponent] = useState(0);

    useEffect(() => {
        console.log('montagem')
        setMount('chamado apenas na montagem do componente')
    }, [])

    useEffect(() => {

        return () => {
            console.log('componentWillUnmount - desmontagem')
        }
    }, [])

    useEffect(() => {
        console.log('att')
    })

    useEffect(() => {
        console.log('outro component')
    }, [updateOtherComponent])

    function handleUpdate(){
        setUpdate([...update, `att `])
    }

    function handleUpdateOtherComponent(){
        setUpdateOtherComponent(updateOtherComponent+1)
    }

    return (
        <div>
            <h1>useEffect - Equivale aos lifecycle methods: </h1>
            <ol>
                <li>
                    componentDitMount
                    {mount}
                </li>
                <li>
                    ComponentDitUpdate
                    <br/>
                    {update}
                    <br/>
                    <button onClick={() => handleUpdate()}>Atualizar component</button>
                </li>
                <li>
                    ComponentDidUnmount
                    para desmontar um 
                </li>
                <li>
                    Diferente de como acontece nos lifecycle methods, no useEffect 
                    podemos setar uma dependência para que o componente seja atualizado 
                    quando o valor desta dependência for alterado.
                    <br/>
                    {updateOtherComponent}
                    <br/>
                    <button onClick={() => handleUpdateOtherComponent()}>Atualizar este component</button>
                </li>
            </ol>

        </div>
    )
}