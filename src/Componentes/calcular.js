import { useContext } from 'react';
import { UserContext } from '../VarContext/Context.js';

function useCalcular() {//Calcula o valor final do investimento com base nos valores fornecidos pelo usuário no contexto.
    const { inicial, mensal, juros, periodo } = useContext(UserContext);

    return function calcular() {
        let resultado = inicial;

        for (let i = 0; i < periodo * 12; i++) {
            resultado = resultado * (1 + juros / 100) + mensal;
        }

        return Number(resultado);
    };
}

export default useCalcular;
