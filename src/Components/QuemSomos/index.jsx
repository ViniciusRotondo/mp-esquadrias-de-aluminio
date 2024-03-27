import LogoCompleta from "/LogoCompleta.png";
import { Container, Row, Col, Image } from 'react-bootstrap';

const QuemSomos = () => {
  return (
    <Container className="container-quem-somos">
      <Row>
        <Col md={6}> 
          <h2 className="color-red">
            NOSSA HISTÓRIA
          </h2>
          <p>
            Fundada por Pedro Desangiacomo em 2009, somos uma empresa familiar dedicada à fabricação de esquadrias de alumínio sob medida. Com a expertise transmitida de geração em geração, combinamos tradição e inovação para oferecer produtos de qualidade excepcional. Desde então, trabalhamos lado a lado com nossos clientes, moldando o futuro com excelência em cada projeto.
          </p>
        </Col>
        <Col md={6} className="d-none d-md-block"> 
          <Image src={LogoCompleta} alt="logo" fluid />
        </Col>
      </Row>
      <div className="ref-servicos"></div>
    </Container>
  );
};

export default QuemSomos;