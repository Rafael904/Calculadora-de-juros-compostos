import { useState } from 'react';
import { UserContext } from './Context.js';

function Periodo({ children }) {
  const [periodo, setPeriodo] = useState(15);

  return (
    <UserContext.Provider value={{ periodo, setPeriodo }}>
      {children}
    </UserContext.Provider>
  );
}

export default Periodo;
 