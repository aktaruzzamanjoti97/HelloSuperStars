import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import Educational from './Educational'
import Employment from './Employment'
import Personal from './Personal'

const SettingsHome = () => {
return (
<>
    <div className="container">
        <div className="row">
            <div className="col-md-12 mt-3  ">
                <h5 className='navSetting px-2 py-3 fw-bold text-warning'>Setting</h5>
                <div className="col-md-12 px-3">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first" className=''>
                        <Row>
                            <Col sm={3} className='bg-success pt-3 '>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item className='mb-3 NavBtn'>
                                    <Nav.Link eventKey="first">Personal</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='mb-3 NavBtn'>
                                    <Nav.Link eventKey="second">Educational</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='mb-3 NavBtn'>
                                    <Nav.Link eventKey="third">Employment</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='mb-3 NavBtn'>
                                    <Nav.Link eventKey="second">Interest</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='mb-3 NavBtn'>
                                    <Nav.Link eventKey="second">Security</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='mb-3 NavBtn'>
                                    <Nav.Link eventKey="second">Report</Nav.Link>
                                </Nav.Item>
                                
                            </Nav>
                            </Col>
                            <Col sm={9} className='bg-dark pt-5'>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" >
                                   <Personal/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                   <Educational/>
                                </Tab.Pane><Tab.Pane eventKey="third">
                                   <Employment/>
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