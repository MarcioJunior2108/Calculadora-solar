import "../Styles/Hero.css";
import SimuladorSolar from "./SimuladorSolar";

function Hero() {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="conteudo-centralizado">
          <h3>Simulador de Energia Solar</h3>
          <p>Desenvolvido por Márcio Oliveira</p>
          <SimuladorSolar />
        </div>
      </div>
    </section>
  );
}

export default Hero;
