import { register } from "swiper/element/bundle";
import "./servicos.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import janela1 from '/Janela1.png';
import janela2 from '/Janela2.png';
import janela3 from '/Janela3.png';
import janela4 from '/Janela4.png';
import janela5 from '/Janela5.png';
import porta1 from '/Porta1.png';
import porta2 from '/Porta2.png';
import porta3 from '/Porta3.png';
import porta4 from '/Porta4.png';
import porta5 from '/Porta5.png';
import guardaCorpo1 from '/GuardaCorpo1.png';
import guardaCorpo2 from '/GuardaCorpo2.png';
import guardaCorpo3 from '/GuardaCorpo3.png';
import guardaCorpo4 from '/GuardaCorpo4.png';
import guardaCorpo5 from '/GuardaCorpo5.png';
import portao1 from '/Portao1.png';
import portao2 from '/Portao2.png';
import portao3 from '/Portao3.png';
import portao4 from '/Portao4.png';
import portao5 from '/Portao5.png';
import GuardaCorpoCapa from '/GuardaCorpo.jpg';
import JanelasCapa from '/Janelas.jpg';
import PortasCapa from '/Portas.jpg';
import PortaoCapa from '/Portao.jpg';
import { useState, useRef, useEffect  } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

register();


const Servicos = () => {
  const [tipoServico, setTipoServico] = useState(false);
  const sliderRef = useRef(null);

  const servicos = {
    'Janelas em geral': {
      imagens:[
      { id: 1, image: janela1 },
      { id: 2, image: janela2 },
      { id: 3, image: janela3 },
      { id: 4, image: janela4 },
      { id: 5, image: janela5 }
      ],
      descricao: "O alumínio é um metal leve e resistente, o que faz com que a janela de alumínio possua boa durabilidade e resistência.",
      capa: JanelasCapa
    },

    'Portas Pivoltantes': {
      imagens: [
        { id: 6, image: porta1 },
        { id: 7, image: porta2 },
        { id: 8, image: porta3 },
        { id: 9, image: porta4 },
        { id: 10, image: porta5 }
      ],
      descricao: "As portas de alumínio são a opção mais inovadora e prática para sua casa. Com design moderno e em vários modelos, elas são leves e muito fáceis de instalar e limpar.",
      capa: PortasCapa
    },

    'Portas Deslizantes': {
      imagens: [
        { id: 11, image: guardaCorpo1 },
        { id: 12, image: guardaCorpo2 },
        { id: 13, image: guardaCorpo3 },
        { id: 14, image: guardaCorpo4 },
        { id: 15, image: guardaCorpo5 }
      ],
      descricao: "Um guarda-corpo em alumínio e vidro é uma estrutura usada como proteção em locais elevados, a fim de evitar que haja queda para os níveis mais baixos.",
      capa:GuardaCorpoCapa
    },

    'Portões em geral': {
      imagens: [
        { id: 16, image: portao1 },
        { id: 17, image: portao2 },
        { id: 18, image: portao3 },
        { id: 19, image: portao4 },
        { id: 20, image: portao5 }
      ],
      descricao: "O alumínio é um material resistente à corrosão e por isso garante ao portão ótima durabilidade. ",
      capa: PortaoCapa
    }
  };

  const handleClick = (tipo) => {
    setTipoServico(tipo);
    // Obter a altura do viewport e a metade da altura do slider
    const viewportHeight = window.innerHeight;
    const sliderHeight = sliderRef.current.clientHeight;
    // Calcular o deslocamento para centralizar o slider
    const offsetTop = (viewportHeight - sliderHeight) / 2;
    // Scroll suave para o slider com o deslocamento calculado
    sliderRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
<>
  <div className="container-galeria">

    <div className="title">
      <h1>Serviços</h1>
    </div>

    <Row className="servicos">
      {Object.keys(servicos).map((tipo) => (
        <Col key={tipo} xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4">
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Card style={{ flexGrow: 1 }}>
              <Card.Img variant={tipo} src={servicos[tipo].capa} />
              <Card.Body>
                <Card.Title>{tipo}</Card.Title>
                <Card.Text>{servicos[tipo].descricao}</Card.Text>
                <Button variant="outline-danger" onClick={() => handleClick(tipo)}>Ver mais</Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
      ))}
    </Row>

    <div className="slider-servicos" ref={sliderRef}>
      {tipoServico && (
        <swiper-container slides-per-view={1} navigation pagination={{ clickable: true }} loop={true}>
          {servicos[tipoServico].imagens.map((item) => (
            <swiper-slide key={item.id}>
              <img src={item.image} alt={tipoServico} />
            </swiper-slide>
          ))}
        </swiper-container>
      )}
    </div>

    <Button className="py-2 mb-3" variant="success" size="lg" target='blank' href="https://api.whatsapp.com/send?phone=5511974094092">Solicitar Orçamento</Button>
  </div>
</> 
  );
};

export default Servicos;
