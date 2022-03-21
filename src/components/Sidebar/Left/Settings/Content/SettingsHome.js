import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import Personal from './Personal'

const SettingsHome = () => {
return (
<>
    <div className="container">
        <div className="row">
            <div className="col-md-12 mt-3  ">
                <h5 className='navSetting px-2 py-3 fw-bold text-warning'>Setting</h5>

                <div className="col-md-12 bg-success px-3 py-3">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first" className='bg-success'>
                        <Row>
                            <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                   <Personal/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    sdgsdgsd
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
        </div>
    </div>

</>
)
}

export default SettingsHome