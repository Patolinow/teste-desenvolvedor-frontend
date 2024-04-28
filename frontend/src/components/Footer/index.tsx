import { Container } from "react-bootstrap";
import logoWhite from "../../assets/images/logo-white.png";
import "./styles.scss";

export default function Footer() {
  return (
    <footer className="d-flex justify-content-end flex-column">
      <div id="sub-footer" className="p-3">
        <Container className="mx-auto d-flex gap-3 justify-content-between align-items-center px-0">
          <img src={logoWhite} alt="dot.lib logo" />
          <p className="m-0">© Copyright Dot.lib 2024. All Rights Reserved.</p>
        </Container>
      </div>
    </footer>
  )

}