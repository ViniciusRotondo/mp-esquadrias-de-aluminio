import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import logoCompletaLat from "/LogoCompletaLat.png";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToQuemSomos = () => {
    const quemSomosSection = document.querySelector(".ref-quem-somos");
    if (quemSomosSection) {
      const offset = 80;
      window.scrollTo({
        top: quemSomosSection.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  const scrollToServicos = () => {
    const servicosSection = document.querySelector(".ref-servicos");
    if (servicosSection) {
      const offset = 60;
      window.scrollTo({
        top: servicosSection.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
        className="py-0 justify-content-between bg-opacity-75"
      >
        <Navbar.Brand onClick={scrollToTop} className="px-4">
          <Image
            src={logoCompletaLat}
            alt="logo"
            className="d-inline-block align-top logo-image"
            fluid
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav
            className="justify-content-center px-4 py-2"
            expand="sm"
            activeKey="/home"
          >
            <Nav.Item>
              <Nav.Link className="navbar" onClick={scrollToTop}>Início</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navbar" onClick={scrollToQuemSomos}>Quem Somos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navbar" onClick={scrollToServicos}>Nossos Serviços</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="navbar"
                target="blank"
                href="https://api.whatsapp.com/send?phone=5511974094092"
              >
                Solicitar orçamento
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
