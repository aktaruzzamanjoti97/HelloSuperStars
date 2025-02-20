import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import Educational from './Educational'
import Employment from './Employment'
import Interest from './Interest'
import Personal from './Personal'
import Report from './Report'
import Security from './Security'

const SettingsHome = () => {
return (
<>
    <div className="container CustomSettings">
        
        <div className="row">
            <div className="col-md-12 mt-3  ">
                <h5 className='navSetting px-2 py-3 fw-bold text-warning'>Setting</h5>
                <div className="col-md-12 px-3 SettingsB">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first" className=''>
                        <Row>
                            <Col sm={3} className='bg-success pt-3 SettingsL '>
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
                                    <Nav.Link eventKey="four">Interest</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='mb-3 NavBtn'>
                                    <Nav.Link eventKey="five">Security</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='mb-3 NavBtn'>
                                    <Nav.Link eventKey="six">Report</Nav.Link>
                                </Nav.Item>

                            </Nav>
                            </Col>
                            <Col sm={9} className='bg-dark pt-5 SettingsR'>
                            <Tab.Content>

                                <Tab.Pane eventKey="first">
                                    <Personal />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Educational />
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Employment />
                                </Tab.Pane>
                                <Tab.Pane eventKey="four">
                                    <Interest />
                                </Tab.Pane>
                                <Tab.Pane eventKey="five">
                                    <Security />
                                </Tab.Pane>
                                <Tab.Pane eventKey="six">
                                    <Report />
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