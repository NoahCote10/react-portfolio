
import { Nav } from "react-bootstrap";

const Navigation = ({ currentPage, handlePageChange }) => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <Nav className="navigation" variant="tabs" activeKey={currentPage} onSelect={handlePageChange}>
      {links.map((link) => (
        <Nav.Item key={link.name}>
          <Nav.Link eventKey={link.name} href={link.href}>
            {link.name}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>

  );

};

export default Navigation;
