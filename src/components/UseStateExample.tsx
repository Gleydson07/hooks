import { useState } from 'react';

export function UseStateExample(){
  const [count, setCount] = useState(0);

  function handleSumCount(){
    setCount(count+1);
  }

  function handleDecreaseCount(){
    setCount(count-1);
  }

  return (
    <div>
      <h1>useState - Preserva o estado/valor de uma variável durante o fluxo da aplicação:</h1>
      <p>Count: {count} </p>
      <button onClick={handleSumCount}>+</button>
      <button onClick={handleDecreaseCount}>-</button>
    </div>
  )
}
