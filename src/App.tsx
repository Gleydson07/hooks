import React from 'react';
import { MemoExample } from './components/MemoExample';
import { UseCallbackExample } from './components/UseCallbackExample';
import { UseContextExample } from './components/UseContextExample';
import { UseEffectExample } from './components/UseEffectExample';
import { UseRef } from './components/UseRef';
import { UseStateExample } from './components/UseStateExample';
import { UserProvider } from './hooks/UseUser';

function App() {
  return (
    <div style={{maxWidth:"900px", margin:"0 auto"}}>
      {/* <UseStateExample/> */}
      {/* <UseEffectExample/> */}
      {/* <MemoExample/> */}
      {/* <UseCallbackExample/> */}
      {/* <UseRef/> */}
      <UserProvider>
        <UseContextExample/>
      </UserProvider>
    </div>
  );
}

export default App;
