import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <Navbar className="navbar">
      <Container className="container">
        <Navbar.Brand>
          <p className="brand">Toolbox Challenge</p>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
