import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Personal = () => {
return (
<>
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className="d-flex mb-4">
                <div className="NameSe text-light col-md-2 btn">Name</div>
                <div className="col-md-8">
                    <Form.Control type="text" className='w-75' />
                </div>
            </div>

            <div className="d-flex mb-4">
                <div className="NameSe text-light col-md-2 btn">Phone</div>
                <div className="col-md-8">
                    <Form.Control type="text" className='w-75' />
                </div>
            </div>

            <div className="d-flex mb-4">
                <div className="NameSe text-light col-md-2 btn">Email</div>
                <div className="col-md-8">
                    <Form.Control type="text" className='w-75' />
                </div>
            </div>

            <div className="d-flex mb-4">
                <div className="NameSe text-light col-md-2 btn">Birthday</div>
                <div className="col-md-8">
                    <Form.Control type="date" className='w-75' />
                </div>
            </div>

            <div className="d-flex mb-4">
                <div className="NameSe text-light col-md-2 btn">Country</div>
                <div className="col-md-8">
                    <Form.Control type="text" className='w-75' />
                </div>
            </div>

            <div className="d-flex mb-4">
                <div className="NameSe text-light col-md-2 btn">Password</div>
                <div className="col-md-8">
                    <Form.Control type="password" className='w-75' />
                </div>
            </div>

        </Form.Group>

        <div className="d-flex mb-4 ButtonSe">
            <button type="submit" className='btn ButtonSE fw-bold w-25'>
                Save
            </button>
        </div>

    </Form>
</>
)
}

export default Personal