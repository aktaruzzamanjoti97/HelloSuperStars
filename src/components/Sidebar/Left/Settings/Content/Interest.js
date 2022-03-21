import React from 'react'
import { Form } from 'react-bootstrap'

const Interest = () => {
return (
<>
    <div className="container">
        <Form className="text-light">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Travelling" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Food" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Technology" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Entertainment" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Dgital World" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Gaming" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Environment" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Education" />
            </Form.Group>
            
            <div className="d-flex mb-4 mt-3 ButtonSe">
                <Form.Control type="password" className='PassBtn bg-dark text-light' placeholder='enter password' />
                <button type="submit" className='btn ButtonSE ButtonSEA fw-bold w-25 mx-2 '> Save </button>
            </div>

        </Form>

    </div>
</>
)
}

export default Interest