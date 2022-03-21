import React, { useState } from 'react'
import {Form} from 'react-bootstrap'

const Educational = () => {

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
<>
    <form action="">
        {
        inputList.map((x, i) => {

        return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <div className="d-flex mb-4">
                    <div className="NameSe text-light col-md-2 btn">Degree</div>
                    <div className="col-md-8">
                        <Form.Control type="text" className='w-75 MobileSettingsNa' onChange={e=> handleInputChange(e, i)} name="degree"
                            value={x.degree} />
                    </div>
                </div>

                <div className="d-flex mb-4">
                    <div className="NameSe text-light col-md-2 btn">Institute</div>
                    <div className="col-md-8">
                        <Form.Control type="text" className='w-75 MobileSettingsNa' onChange={e=> handleInputChange(e, i)}
                            name="institute"
                            value={x.institute} />
                    </div>
                </div>

                <div className="d-flex mb-4">
                    <div className="NameSe text-light col-md-2 btn">Subject</div>
                    <div className="col-md-8">
                        <Form.Control type="text" className='w-75 MobileSettingsNa' onChange={e=> handleInputChange(e, i)} name="subject"
                            value={x.subject} />
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

export default Educational