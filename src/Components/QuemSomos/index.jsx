import "./quemSomos.css";
import FamiliaMP from "/familiamp.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";

const QuemSomos = () => {
  return (
    <>
      <Container className="container-quem-somos">
        <Row>
          <Col md={6} className="text-quem-somos">
            <h2>NOSSA HISTÓRIA</h2>
            <p>
              Fundada por Pedro Desangiacomo em 2009, somos uma empresa familiar
              dedicada à fabricação de esquadrias de alumínio sob medida. Com a
              expertise transmitida de geração em geração, combinamos tradição e
              inovação para oferecer produtos de qualidade excepcional. Desde
              então, trabalhamos lado a lado com nossos clientes, moldando o
              futuro com excelência em cada projeto.
            </p>
          </Col>
          <Col md={6} className="img-quem-somos">
            <Image src={FamiliaMP} alt="logo" fluid />
          </Col>
        </Row>
      </Container>
      <div className="ref-servicos"></div>
    </>
  );
};

export default QuemSomos;
