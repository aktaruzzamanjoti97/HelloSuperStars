import React from 'react'
import { Nav } from 'react-bootstrap';
import "../../../CSS/userSettings/settings.css"

// import Personal from './SettingComponents/Personal';
// import Educational from './SettingComponents/Educational';
// import Employment from './SettingComponents/Employment';
// import Interest from './SettingComponents/Interest';
// import Security from './SettingComponents/Security';
import Report from './SettingComponents/Report';

const Content = () => {
    return (
        <>
            <div className="container">
                <div className="settingsBody">
                    <h1 className="settingsTitle border border-warning p-3 justify-content-space-between">Setting</h1>
                    <div className="row m-1">
                        <div className="col-sm-4 leftSettingsBody">
                            <Nav className="flex-column leftInnersettingsBody">
                                <Nav.Link className="leftInnersettingsBody" href="#">Personal</Nav.Link>
                                <Nav.Link className="leftInnersettingsBody" eventKey="link-1">Educational</Nav.Link>
                                <Nav.Link className="leftInnersettingsBody" eventKey="link-2">Employment</Nav.Link>
                                <Nav.Link className="leftInnersettingsBody" eventKey="link-1">Interest</Nav.Link>
                                <Nav.Link className="leftInnersettingsBody" eventKey="link-1">Security</Nav.Link>
                                <Nav.Link className="leftInnersettingsBody" eventKey="link-2">Report</Nav.Link>
                            </Nav>
                        </div>
                        <div className="col-sm-8 bg-dark">
                           <Report/>
                        </div>
                    </div>   
                </div>
            </div>
           
        </>
    )
}

export default Content
