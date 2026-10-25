function Historico({ historico }) {
    return (
        <div>
            <h2>Histórico de cálculos</h2>
            <ul>
                {historico.map(({ inicial, mensal, juros, periodo }, index) => (
                    <li key={index}>
                        {index + 1}. VI: R${inicial}, IM: R${mensal}, TJ: {juros}%, PA: {periodo} anos
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Historico;