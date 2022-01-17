import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import "../../../../CSS/userSettings/settings.css";
function Educational() {

    const [inputList, setInputList] = useState([{ degree: "", institute: "", subject: "" }]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    const handleAddClick = () => {
        setInputList([...inputList, { degree: "", institute: "", subject: "" }]);
    };

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    return (
        <div className="container">
            {
                inputList.map((x, i) => {
                    return (
                        <div className="EducationalMainBody">
                            <Form >
                                <Form.Group as={Row} className="mb-1 p-3" controlId="formHorizontalText">
                                    <Form.Label column sm={1}>
                                        <p className="settingPersonalText">Degree</p>
                                    </Form.Label>
                                    <Col sm={8} className="settingPersonalInputField">
                                        <Form.Control onChange={e => handleInputChange(e, i)} name="degree" value={x.degree} className="border-warning dark" type="text" placeholder="BSc" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-1 p-3" controlId="formHorizontalText">
                                    <Form.Label column sm={1}>
                                        <p className="settingPersonalText">Institute</p>
                                    </Form.Label>
                                    <Col sm={8} className="settingPersonalInputField">
                                        <Form.Control onChange={e => handleInputChange(e, i)} name="institute" value={x.institute} className="border-warning dark" type="text" placeholder="Daffodil International University" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-1 p-3" controlId="formHorizontalText">
                                    <Form.Label column sm={1} className="settingPersonaledit form-label">
                                        <p className="settingPersonalText">Subject</p>
                                    </Form.Label>
                                    <Col sm={8} className="settingPersonalInputField">
                                        <Form.Control onChange={e => handleInputChange(e, i)} name="subject" value={x.subject} className="border-warning dark" type="text" placeholder="CSE" />
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

export default Educational;
