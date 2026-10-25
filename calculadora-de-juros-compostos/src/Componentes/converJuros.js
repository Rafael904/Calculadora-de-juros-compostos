import { useState } from 'react';

function ConverJuros() {
    const [taxa, setTaxa] = useState(0);
    return(<>
    <h2>Conversor de taxa de juros</h2>
    <p> Para converter uma taxa de juros anual em mensal com juros compostos, a fórmula correta não é uma 
        simples divisão por 12, mas sim a <b>conversão de taxas equivalentes</b>.</p>
    <div><b>Digite a taxa de juros anual:</b> <input value={taxa} onChange={(e) => setTaxa(Number(e.target.value))} />%
    <br /><b>A taxa de juros mensal equivalente é aproximadamente:</b> {((((1 + taxa / 100) ** (1/12)) - 1) * 100).toFixed(10)}%</div>
    </>);
}

export default ConverJuros;