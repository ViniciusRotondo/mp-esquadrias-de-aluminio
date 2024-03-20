import "./servicos.css";
import Porta from "/porta.jpg";
import Janela from "/janela.jpg"
import GuardaCorpo from "/guarda-corpo.jpg"
import Portao from "/Portao.jpeg"

const Servicos = () => {
  return (
    <>
      <div className="container-galeria">

        <div className="title">
          <h1>Serviços</h1>
        </div>

        <div className="servicos">

          <div className="servicos-detalhes">
            <a href="#">
              <img src={Porta} alt="" />
              <h2>
                  Portas de Alumínio
              </h2>
              <p>
                  Para Portas de Alumínio existem opções de abrir e de correr. A
                  largura total das portas varia de 60 cm a 160 cm. Em relação à
                  altura, varia entre 60 cm a 2,17 m.
              </p>
            </a>
          </div>

          <div className="servicos-detalhes">
            <a href="#">
              <img src={Janela} alt="" />
              <h2>
                  Janelas
              </h2>
              <p>
                  Para Portas de Alumínio existem opções de abrir e de correr. A
                  largura total das portas varia de 60 cm a 160 cm. Em relação à
                  altura, varia entre 60 cm a 2,17 m. 
              </p>
            </a>
          </div>

          <div className="servicos-detalhes">
            <a href="#">
              <img src={GuardaCorpo} alt="" />
              <h2>
                  Guarda Corpo
              </h2>
              <p>
                  Para Portas de Alumínio existem opções de abrir e de correr. A
                  largura total das portas varia de 60 cm a 160 cm. Em relação à
                  altura, varia entre 60 cm a 2,17 m.
              </p>
            </a>
          </div>

          <div className="servicos-detalhes">
            <a href="#">
              <img src={Portao} alt="" />
              <h2>
                  Portões
              </h2>
              <p>
                  Para Portas de Alumínio existem opções de abrir e de correr. A
                  largura total das portas varia de 60 cm a 160 cm. Em relação à
                  altura, varia entre 60 cm a 2,17 m.
              </p>
            </a>
          </div>

        </div>

      </div>
    </>
  );
};

export default Servicos;
