import React  from 'react'
import { Form } from 'react-bootstrap'

const Report = () => {
    
return (
<>
    {/* <h5 className="text-light">Two Step Verification</h5>
    <hr style={{color: "white", height:"1px"}} /> */}

    <Form>
        <div className="col-md-6 ms-5 ReportSet">
            <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>How can we help?</Form.Label>
                    <Form.Control className="text-light bg-dark" as="select" >
                        <option value="DICTUM">how to be a premium member!</option>
                        <option value="CONSTANCY">How to join Super Star liveness learning section?</option>
                        <option value="COMPLEMENT">Is it possible to be a SuperStar from a general member?</option>
                    </Form.Control>

                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Explain the issue</Form.Label>
                    <Form.Control as="textarea" rows={3} className='text-light bg-dark' placeholder="Write here..." />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-5">
                    <Form.Label>Attach any document</Form.Label>
                    <Form.Control type="file" className='text-dark bg-dark' />
                </Form.Group>

                <div className="col-md-6 mb-4 ">
                    <button className='btn text-warning border-warning  w-100'>Submit</button>
                </div>
            </Form>
        </div>
    </Form>
</>
)
}

export default Report