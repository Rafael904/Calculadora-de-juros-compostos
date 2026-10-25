import { useContext } from 'react';
import { UserContext } from '../VarContext/Context.js';
import './tabela.css';

function Tabela() {
    const { inicial, mensal, juros, periodo } = useContext(UserContext);
    let resAaA = [<tr key={0}><td id="Ano">0</td>
    <td id='investido'>R${inicial.toFixed(2)}</td>
    <td  id='juros' >R$0.00</td>
    <td id='acumulado'>R${inicial.toFixed(2)}</td></tr>];
    var resultado = inicial;
    
    function calcular() {
        for (let i = 0; i < 12; i++) {
            resultado = resultado * (1 + juros / 100) + mensal;
        }
    }
    for (let c = 1; c < periodo + 1; c++) {
        calcular();
        resAaA.push(<tr key={c}><td id="Ano">{c}</td>
        <td  id='investido'>R${(mensal * c * 12 + inicial).toFixed(2)}</td>
        <td id='juros'>R${(resultado - (mensal * c * 12 + inicial)).toFixed(2)}</td>
        <td id='acumulado'>R${resultado.toFixed(2)}</td></tr>);
    }
    
    return (
        <table>
            <thead><tr><th id="Ano">Anos</th><th id='investido'>Total Investido</th><th id='juros'>Total Juros</th><th id='acumulado'>Acumulado</th></tr></thead>
            <tbody>{resAaA}</tbody>
        </table>
    )
}

export default Tabela;