import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export function UserProvider({ children }) {
	const [inicial, setInicial] = useState(0);
	const [mensal, setMensal] = useState(0);
	const [juros, setJuros] = useState(1);
	const [periodo, setPeriodo] = useState(15);

	return (
		<UserContext.Provider
			value={{
				inicial, setInicial,
				mensal, setMensal,
				juros, setJuros,
				periodo, setPeriodo,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
