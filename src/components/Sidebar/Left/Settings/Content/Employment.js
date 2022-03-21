import React, { useState } from 'react'
import {Form} from 'react-bootstrap'

const Employment = () => {

const [inputList, setInputList] = useState([{ position: "", company: "", salary: "" }]);

const handleInputChange = (e, index) => {
const { name, value } = e.target;
const list = [...inputList];
list[index][name] = value;
setInputList(list);
};

const handleAddClick = () => {
setInputList([...inputList, { position: "", company: "", salary: "" }]);
};

const handleRemoveClick = index => {
const list = [...inputList];
list.splice(index, 1);
setInputList(list);
};

return (
<>
    <form action="">
        {
        inputList.map((x, i) => {

        return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <div className="d-flex mb-4">
                    <div className="NameSe text-light col-md-2 btn">Position</div>
                    <div className="col-md-8">
                        <Form.Control type="text" className='w-75 MobileSettingsNa' onChange={e=> handleInputChange(e, i)} name="position"
                            value={x.position} />
                    </div>
                </div>

                <div className="d-flex mb-4">
                    <div className="NameSe text-light col-md-2 btn">Company</div>
                    <div className="col-md-8">
                        <Form.Control type="text" className='w-75 MobileSettingsNa' onChange={e=> handleInputChange(e, i)}
                            name="company"
                            value={x.company} />
                    </div>
                </div>

                <div className="d-flex mb-2">
                    <div className="NameSe text-light col-md-2 btn">Salary Range</div>
                    <div className="col-md-8">
                        <Form.Control type="text" className='w-75 MobileSettingsNa' onChange={e=> handleInputChange(e, i)} name="salary"
                            value={x.salary} />
                    </div>
                </div>

                <div className="d-flex justify-content-center">

                    {inputList.length !== 1 &&
                    <button className='btn border-danger text-danger mx-4' onClick={()=> handleRemoveClick(i)}>
                        <i class="fa-solid fa-minus"></i>&nbsp;Remove
                    </button>
                    }

                    {inputList.length - 1 === i &&
                    <button className='btn border-success text-success ' onClick={handleAddClick}>
                        <i class="fa-solid fa-plus"></i>&nbsp;Add Another
                    </button>
                    }

                </div>
            </Form.Group>
        </Form>

        )
        })
        }

        <div className="d-flex mb-4">
            <div className="NameSe text-light col-md-2 btn">Password</div>
            <div className="col-md-8">
                <Form.Control type="password" className='w-75 MobileSettingsNa' />
            </div>
        </div>
        <div className="d-flex mb-4 ButtonSe">
            <button type="submit" className='btn ButtonSE fw-bold w-25'>
                Save
            </button>
        </div>
    </form>

</>
)
}

export default Employment