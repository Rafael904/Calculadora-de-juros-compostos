import { useState } from 'react';
import { UserContext } from './Context.js';

function Mensal({ children }) {
  const [mensal, setMensal] = useState(660);

  return (
    <UserContext.Provider value={{ mensal, setMensal }}>
      {children}
    </UserContext.Provider>
  );
}

export default Mensal;
 