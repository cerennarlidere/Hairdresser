import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "pink", textAlign: "center", marginTop: "-0px" }}>
        Shine Kuaför
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Bağlantılar</Heading>
            <FooterLink href="#">Anasayfa</FooterLink>
            <FooterLink href="#">Hakkımızda</FooterLink>
            <FooterLink href="#">Hizmetlerimiz</FooterLink>
            <FooterLink href="#">Kuaförlerimiz</FooterLink>
            <FooterLink href="#">Müşterilerimiz</FooterLink>
            <FooterLink href="#">İletişim</FooterLink>
            <FooterLink href="#">Randevu al</FooterLink>
          </Column>

          <Column>
            <Heading>Hizmetlerimiz</Heading>
            <FooterLink href="#">Saç kesim</FooterLink>
            <FooterLink href="#">Saç boyama</FooterLink>
            <FooterLink href="#">Ombre/Sombre</FooterLink>
            <FooterLink href="#">Makyaj</FooterLink>
            <FooterLink href="#">Kalıcı Oje</FooterLink>
          </Column>

          <Column>
            <Heading>Sosyal Medya</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="https://www.instagram.com/beyhanyazilim/">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>

          <Column>
            <Heading>İletişim</Heading>
            <p href="#">Adres:Atatürk Mahallesi</p>
            Telefon:
            <a href="tel:050897979">050897979</a>
            Mail:
            <a href="mailto:ceren-ceren2000@hotmail.com">
              ceren-ceren2000@hotmail.com
            </a>
          </Column>

          <Column>
            <Heading>Shine Hakkında</Heading>
            <p href="#">biz 2003 kurulduk. devam etmek</p>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
