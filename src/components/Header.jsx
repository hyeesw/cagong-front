import React from 'react';
import { Nav } from 'react-bootstrap';

function Header() {
  return (
    <Nav variant="pills" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
        {/* <Button as="input" type="button" value="Input" />{' '} */}
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/signup" eventKey="link-1">
          Signup
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
export default Header;
