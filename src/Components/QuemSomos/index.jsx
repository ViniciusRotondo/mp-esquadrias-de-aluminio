import "./quemSomos.css";
import LogoCompleta from "/LogoCompleta.png";

const QuemSomos = () => {
  return (
    <>
      <div className="container-quem-somos">
        <div className="texto-quem-somos">
          <h2>
            Descubra como a MP Esquadria de Alumínio está redefinindo os padrões
            de excelência e qualidade
          </h2>
          <p>
            A <span>MP Esquadrias de Alumínio</span> teve início em 2009 como uma modesta
            serralheria, fundada por Pedro Fernando e seu filho, Matheus
            Retondo. Com o passar dos anos, a empresa passou por uma
            significativa expansão quando Thais Retondo, filha de Pedro,
            ingressou para assumir o setor administrativo. Sua entrada foi
            fundamental para fortalecer a estrutura organizacional e impulsionar
            o crescimento da empresa. Desde então, a <span>MP Esquadrias de Alumínio</span>
            consolidou-se como <span>referência no mercado</span>, destacando-se pela
            <span>qualidade</span> de seus produtos e serviços. Com uma equipe dedicada e
            comprometida, oferecemos soluções em esquadrias de alumínio que
            atendem às necessidades e expectativas dos nossos clientes. Nosso
            <span>foco na excelência e no profissionalismo</span> nos permite entregar
            resultados superiores em cada projeto que assumimos. Estamos
            constantemente inovando e aprimorando nossos processos para garantir
            a máxima satisfação dos clientes. Na <span>MP Esquadrias de Alumínio</span>,
            valorizamos a confiança depositada em nós pelos nossos clientes e
            estamos comprometidos em continuar oferecendo produtos e serviços da
            mais alta qualidade.
          </p>
        </div>
        <div className="imagem-quem-somos">
          <img src={LogoCompleta} alt="" />
        </div>
      </div>
    </>
  );
};

export default QuemSomos;
