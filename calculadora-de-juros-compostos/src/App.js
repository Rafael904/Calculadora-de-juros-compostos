import './App.css';
import useCalcular from './Componentes/calcular.js'; //Usado para calcular o valor final do investimento
import Tabela from './Componentes/tabela.js'; //Usado para exibir a tabela de resultados
import ConverJuros from './Componentes/converJuros.js'; //Usado para converter a taxa de juros
import Historico from './Componentes/Historico.js'; //Usado para exibir o histórico de cálculos
import { useContext, useState } from 'react';
import { UserContext } from './VarContext/Context.js';

function App() {
  const calcular = useCalcular();
  const {
    inicial, setInicial, mensal,  setMensal, juros, setJuros,
    periodo, setPeriodo,} = useContext(UserContext);

  //Verifica se o resultado já foi calculado e armazena o valor final e o total investido.
  const [resultadoCalculado, setResultadoCalculado] = useState(null);
  const [historico, setHistorico] = useState([]);
  function resultado() {
    const total = calcular();
    const investido = inicial + mensal * periodo * 12;
    setResultadoCalculado({ total, investido });
    setHistorico((atual) => [...atual, { inicial, mensal, juros, periodo }]);
  }

  const [tabela, setTabela] = useState(null);

  return (<>
    <section> {/*Seção principal da aplicação, (parte verde) */}
      <h1>Calculadora de juros compostos</h1>
      <div className='inicial'>Valor inicial: <input value={inicial} type='number' onChange={(e) => setInicial(Number(e.target.value))}/>R$</div>
      <div className="mensal">Investimento mensal: <input value={mensal} type='number' onChange={(e) => setMensal(Number(e.target.value))}/>R$</div>
      <div className="juros">Taxa de juros (por mês): <input value={juros} type='number' onChange={(e) => setJuros(Number(e.target.value))}/>%</div>
      <div className="periodo">Período: <input value={periodo} type='number' onChange={(e) => setPeriodo(parseInt(Number(e.target.value)))}/>anos</div>
    <br/><button onClick = {() => {resultado(); setTabela(true);}}>Calcular</button><br />
    
    <div>{resultadoCalculado ? <>
      <h2>Resultado:</h2>
      <h3 className='investido'>Total investido:<br/> R${(resultadoCalculado.investido).toFixed(2)}</h3>
      <h3 className='juros'>Total de juros:<br /> R${(resultadoCalculado.total - resultadoCalculado.investido).toFixed(2)}</h3>
      <h3 className='final'>Valor final:<br /> R${resultadoCalculado.total.toFixed(2)}</h3>
    </> : <h2><br />Seu resultado aparecerá aqui</h2>}</div>
    </section>
    <p>A calculadora de juros compostos é uma ferramenta fundamental para análise de investimentos e planejamento financeiro. Permite calcular o 
      crescimento de aplicações ao longo do tempo, considerando a capitalização contínua dos rendimentos sobre o valor inicial investido.</p>
    <h2>Tabela</h2>
    <div>{tabela ? <Tabela /> : <h3>Sua tabela aparecerá aqui</h3>}</div>

    <ConverJuros />
    <Historico historico={historico} />
  <br/><br/></>);
}

export default App;
