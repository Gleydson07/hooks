import { useCallback } from 'react';
import { useState  } from 'react';

interface UseCallbackExampleProps {
    handleSumCount: (value: number) => void;
}

const Button = ({handleSumCount}: UseCallbackExampleProps) => {
    console.log("re-render")
    return <button onClick={() => handleSumCount(10)}>+</button>
}

export function UseCallbackExample(){
    const [count, setCount] = useState(0);
    
    const handleSumCount = useCallback((value: number) => {
        setCount(count+value);
    },[count])

    return (
        <div>
            <h1>useCallback - Geralmente usado para otimizações de funções:</h1>
            <p>Count: {count} </p>
            <Button handleSumCount={handleSumCount}/>
        </div>
    )
}
