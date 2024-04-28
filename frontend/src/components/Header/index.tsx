import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logoBlack from "../../assets/images/logo-black.png";
import "./styles.scss";

export default function Header() {
  const currentLanguage = "PT";
  const languagesList = ["PT", "EN", "ES"];

  return (
    <header className="fixedHeader shadow-sm">
    <Navbar className="mx-auto fw-bold">
      <Container className="px-3">
        <Navbar.Brand href="/" className="me-4">
          <img src={logoBlack} alt="dot.Lib logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-lg-0 gap-1" navbarScroll>
            <Nav.Link href="#" className="" >BULÁRIO</Nav.Link>
            <NavDropdown title={currentLanguage} id="navbarScrollingDropdown" menuVariant="dark">
              {languagesList.map((language) => (
              <NavDropdown.Item key={language}>{language}</NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}
