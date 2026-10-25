import { useState } from 'react';
import { UserContext } from './Context.js';

function Juros({ children }) {
  const [juros, setJuros] = useState(12);

  return (
    <UserContext.Provider value={{ juros, setJuros }}>
      {children}
    </UserContext.Provider>
  );
}

export default Juros;
 