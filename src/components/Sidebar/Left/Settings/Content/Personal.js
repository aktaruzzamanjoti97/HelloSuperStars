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
                    <Form.Control type="text" placeholder="Enter email" className='w-100' />
                </div>
            </div>

            <div className="d-flex mb-4">
                <div className="NameSe text-light col-md-2 btn">Phone</div>
                <div className="col-md-8">
                    <Form.Control type="text" placeholder="Enter email" className='w-100' />
                </div>
            </div>


            <div className="d-flex mb-4">
                <div className="NameSe text-light col-md-2 btn">Name</div>
                <div className="col-md-8">
                    <Form.Control type="text" placeholder="Enter email" className='w-100' />
                </div>
            </div>

            <div className="d-flex mb-4">
                <div className="NameSe text-light col-md-2 btn">Name</div>
                <div className="col-md-8">
                    <Form.Control type="text" placeholder="Enter email" className='w-100' />
                </div>
            </div>

            <div className="d-flex mb-4">
                <div className="NameSe text-light col-md-2 btn">Name</div>
                <div className="col-md-8">
                    <Form.Control type="text" placeholder="Enter email" className='w-100' />
                </div>
            </div>



            <Button variant="primary" type="submit" className='mx-2'>
                Submit
            </Button>

        </Form.Group>

    </Form>
</>
)
}

export default Personal