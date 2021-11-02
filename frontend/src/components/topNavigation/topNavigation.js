import {Navbar, Container, Nav} from 'react-bootstrap';
import '../topNavigation/topNavigation.css'

function TopNavigation() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">A D P</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link href="checkin">Timesheet </Nav.Link>
      <Nav.Link href="admin">Admin</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}

export default TopNavigation;