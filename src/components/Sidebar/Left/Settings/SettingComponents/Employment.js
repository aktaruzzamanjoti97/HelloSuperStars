import React, { useState } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap';
import "../../../../CSS/userSettings/settings.css"

function Employment() {

    const [inputList, setInputList] = useState([{ position: "", company: "", salaryRange: "" }]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list)
    }

    const handleAddClick = () => {
        setInputList([...inputList, { position: "", company: "", salaryRange: "" }]);
    }

    const handleRemoveClick = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }


    return (
        <div className="container">

            {
                inputList.map((x, i) => {
                    return (
                        <div className="EducationalMainBody">
                            <Form >
                                <Form.Group as={Row} className="mb-1 p-3" controlId="formHorizontalText">
                                    <Form.Label column sm={1}>
                                        <p className="settingPersonalText">Position</p>
                                    </Form.Label>
                                    <Col sm={8} className="settingPersonalInputField">
                                        <Form.Control onChange={e => handleInputChange(e, i)} name="position" value={x.position} className="border-warning dark" type="text" placeholder="BSc" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-1 p-3" controlId="formHorizontalText">
                                    <Form.Label column sm={1}>
                                        <p className="settingPersonalText">Company</p>
                                    </Form.Label>
                                    <Col sm={8} className="settingPersonalInputField">
                                        <Form.Control onChange={e => handleInputChange(e, i)} name="company" value={x.company} className="border-warning dark" type="text" placeholder="Daffodil International University" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-1 p-3" controlId="formHorizontalNumber">
                                    <Form.Label column sm={1} className="settingPersonaledit form-label">
                                        <p className="settingPersonalText">Salary Range</p>
                                    </Form.Label>
                                    <Col sm={8} className="settingPersonalInputField">
                                        <Form.Control onChange={e => handleInputChange(e, i)} name="salaryRange" value={x.salaryRange} className="border-warning dark" type="number" placeholder="CSE" />
                                    </Col>
                                </Form.Group>

                                <div className="d-flex">
                                    {inputList.length !== 1 && <Button onClick={() => handleRemoveClick(i)} variant="outline-warning" style={{ width: "300px", marginLeft: "70px", marginTop: "40px" }} className="educationalButtonSave"> ➖ Remove</Button>}

                                    {inputList.length - 1 === i && <Button onClick={handleAddClick} variant="outline-warning" style={{ width: "300px", marginLeft: "70px", marginTop: "40px" }} className="educationalButtonSave"> ➕ Add Another</Button>}
                                </div>

                            </Form>


                        </div>
                    )
                })
            }

            <div className="flex-row">
                <input type="password" className="PasswordField border-warning" />
                <Button variant="outline-warning" style={{ width: "200px", marginLeft: "10px" }} className="educationalButtonSave">Save</Button>
            </div>


        </div>
    )
}

export default Employment;

