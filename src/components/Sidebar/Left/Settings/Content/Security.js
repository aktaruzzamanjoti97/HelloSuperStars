import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const Security = () => {
return (
<>
    <div className="">
        <h5 className="text-light">Two Step Verification</h5>
        <hr style={{color: "white", height:"1px"}} />

        <Form className='d-flex ms-5'>
            <Form.Group className="mb-3 justify-content-center" controlId="formBasicEmail">

                <div className="d-flex mb-4">
                    <div className="col-md-10">
                        <Form.Control type="text" className='w-100 text-light bg-dark'
                            placeholder='Enter phone number' />
                    </div>
                    <div className="NameSe text-light col-md-2">
                        <button className='btn text-warning border-warning ms-3'>Submit</button>
                    </div>
                </div>
                <div className="d-flex mb-4">
                    <div className="col-md-10">
                        <Form.Control type="text" className='w-100 text-light bg-dark' placeholder='Enter OTP' />
                    </div>
                    <div className="NameSe text-light col-md-2">
                        <button className='btn text-success border-success ms-3'>Submit</button>
                    </div>
                </div>

            </Form.Group>
        </Form>

        <h5 className="text-light">Email</h5>
        <hr style={{color: "white", height:"1px"}} />

        <Form className='d-flex ms-5'>
            <Form.Group className="mb-3 justify-content-center" controlId="formBasicEmail">

                <div className="d-flex mb-4">
                    <div className="col-md-10">
                        <Form.Control type="email" className='w-100 text-light bg-dark' placeholder='Enter email' />
                    </div>
                    <div className="NameSe text-light col-md-2">
                        <button className='btn text-warning border-warning ms-3'>Submit</button>
                    </div>
                </div>
                <div className="d-flex mb-4">
                    <div className="col-md-10">
                        <Form.Control type="text" className='w-100 text-light bg-dark'
                            placeholder='Enter security code' />
                    </div>
                    <div className="NameSe text-light col-md-2">
                        <button className='btn text-success border-success ms-3'>Submit</button>
                    </div>
                </div>

            </Form.Group>
        </Form>

        <h5 className="text-light">Password</h5>
        <hr style={{color: "white", height:"1px"}} />

        <Form className='d-flex ms-5'>
            <Form.Group className="mb-3 justify-content-center" controlId="formBasicEmail">

                <div className="d-flex mb-4">
                    <div className="col-md-8">
                        <Form.Control type="password" className='w-75 text-light bg-dark'
                            placeholder='Enter old password' />
                    </div>
                </div>
                <div className="d-flex mb-4">
                    <div className="col-md-6 me-2">
                        <Form.Control type="password" className='w-100 text-light bg-dark' placeholder='New password' />
                    </div>
                    <div className="col-md-6">
                        <Form.Control type="password" className='w-100 text-light bg-dark'
                            placeholder='Confirm password' />
                    </div>
                </div>
                <div className="d-flex mb-4">
                    <div className="col-md-6">
                        <button className='btn text-warning border-warning  w-100'>Submit</button>
                    </div>

                </div>
            </Form.Group>

        </Form>

    </div>

</>
)
}

export default Security