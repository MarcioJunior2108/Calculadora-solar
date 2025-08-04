import "../Styles/Resultado.css";
import {
  FaLeaf,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaChartLine,
} from "react-icons/fa";

type ResultadoProps = {
  economiaMensal: number;
  economiaAnual: number;
  retornoInvestimento: number;
  emissaoCarbono: number;
};

const Resultado = ({
  economiaMensal,
  economiaAnual,
  retornoInvestimento,
  emissaoCarbono,
}: ResultadoProps) => {
  return (
    <section className="resultado">
      <h2>Resultado da Simulação</h2>
      <div className="resultado-card">
        <div className="card-item">
          <FaMoneyBillWave className="card-icon" />
          <h3>Economia Mensal</h3>
          <p>R$ {economiaMensal.toFixed(2)}</p>
        </div>
        <div className="card-item">
          <FaCalendarAlt className="card-icon" />
          <h3>Economia Anual</h3>
          <p>R$ {economiaAnual.toFixed(2)}</p>
        </div>
        <div className="card-item">
          <FaChartLine className="card-icon" />
          <h3>Retorno do Investimento</h3>
          <p>{retornoInvestimento} anos</p>
        </div>
        <div className="card-item">
          <FaLeaf className="card-icon" />
          <h3>CO₂ Evitado</h3>
          <p>{emissaoCarbono} kg/ano</p>
        </div>
      </div>
    </section>
  );
};

export default Resultado;
