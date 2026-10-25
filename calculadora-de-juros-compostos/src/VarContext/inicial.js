import { useState } from 'react';
import { UserContext } from './Context.js';

function Inicial({ children }) {
  const [inicial, setInicial] = useState(0);

  return (
    <UserContext.Provider value={{ inicial, setInicial }}>
      {children}
    </UserContext.Provider>
  );
}

export default Inicial;
 