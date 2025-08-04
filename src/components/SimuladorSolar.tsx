import { useState } from 'react';
import '../Styles/SimuladorSolar.css';

type ResultadoSimulacao = {
  mensal: number;
  anual: number;
  placas: number;
};

const SimuladorSolar = () => {
  const [conta, setConta] = useState('');
  const [consumo, setConsumo] = useState('');
  const [estado, setEstado] = useState('');
  const [resultado, setResultado] = useState<ResultadoSimulacao | null>(null);
  const [erro, setErro] = useState('');

  const calcular = () => {
    const valorConta = parseFloat(conta.replace(',', '.'));
    const kwh = parseFloat(consumo.replace(',', '.'));

    if (isNaN(valorConta) || isNaN(kwh) || valorConta <= 0 || kwh <= 0) {
      setErro('Por favor, preencha todos os campos corretamente.');
      setResultado(null);
      return;
    }

    setErro('');

    const economiaMensal = valorConta * 0.9;
    const economiaAnual = economiaMensal * 12;
    const placas = Math.ceil(kwh / 30);

    setResultado({
      mensal: economiaMensal,
      anual: economiaAnual,
      placas,
    });
  };

  const formatarMoeda = (valor: number) =>
    valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="simulador-container">
      <h2>Simulação Detalhada ⚙️</h2>
      <div className="simulador-form">
        <input
          type="number"
          placeholder="Valor médio da conta (R$)"
          value={conta}
          onChange={(e) => setConta(e.target.value)}
        />
        <input
          type="number"
          placeholder="Consumo mensal (kWh)"
          value={consumo}
          onChange={(e) => setConsumo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Estado (UF)"
          value={estado}
          onChange={(e) => setEstado(e.target.value.toUpperCase())}
          maxLength={2}
        />
        <button className="simulador-button" onClick={calcular}>
          Calcular
        </button>
        {erro && <p className="erro">{erro}</p>}
      </div>

      {resultado && (
        <div className="resultado">
          <h3>Resultado da Simulação</h3>
          <p>💰 Economia mensal: {formatarMoeda(resultado.mensal)}</p>
          <p>📅 Economia anual: {formatarMoeda(resultado.anual)}</p>
          <p>🔋 Placas solares estimadas: {resultado.placas}</p>
        </div>
      )}
    </div>
  );
};

export default SimuladorSolar;
