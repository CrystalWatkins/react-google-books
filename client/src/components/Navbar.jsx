import React from 'react';
import Navbar from "react-bootstrap/Navbar";

const Navbar = () => {
    return (
        <Nav
        activeKey="/search"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item>
          <Nav.Link href="/search">Search</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="saved">Saved</Nav.Link>
        </Nav.Item>
      </Nav>
    );
};

export default Navbar;