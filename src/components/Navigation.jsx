import { Nav, NavItem, Button } from "reactstrap";
import { Link } from "react-router-dom";

export const Navigation = ({ apiToken, handleUserLogout }) => {
  return (
    <Nav>
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/dashboard">Dashboard</Link>
      </NavItem>
      {/* will appear only when user is signed in  */}
      {apiToken && <Button onClick={handleUserLogout}>Sign Out</Button>}
    </Nav>
  );
};
