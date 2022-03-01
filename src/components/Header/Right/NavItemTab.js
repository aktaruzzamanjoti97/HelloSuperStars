import React from 'react'
import { Nav } from 'react-bootstrap'

const NavItemTab = (Nav_user) => {
return (
<>
    <Nav.Item>
        <Nav.Link eventKey="first">Tab 1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="second">Tab 2</Nav.Link>
    </Nav.Item>

    <div className="item  ">
    
    
    <div class="top-right-c">🔴</div>
    <div class="LivePIcM_t">{Nav_user.username}</div>
  </div>
</>
)
}

export default NavItemTab