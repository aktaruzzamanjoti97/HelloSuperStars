import React,{ useState, useEffect, useRef } from 'react';
import Collapse from 'react-bootstrap/Collapse'
import './BookNow.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Azhari from '../../../../images/starProfile/StarPhotos/1.jpg';
import BookNowPay from './BookNowPay';

const BookNowEvent = (props) => {
const [open, setOpen] = useState(false);
function handleClick(e){
    e.preventDefault();
    setOpen(!open);
}

return (
<>
    <Card className='BookNow'>
        <CardContent>
            <div className="row BookNow-m-p">
                <div className="col-md-3 mb-3">
                    <div className="play-button-container">
                        <img src={Azhari} alt="" className="img-fluid BookImg" />
                    </div>
                </div>

                <div className="col-md-9">
                    <h4 className="BookNameText">Meet Mizanur Rahman at Friday night online</h4>
                    <div className="vb"></div>
                    <div className="mt-3 row">

                        <div className="col-md-6 BookNowMN">
                            <table className='taBook'>
                                <tr >
                                    <th className='text-light bookTh'>Star</th>
                                    <td className='BookNText'>Mizanur Rahman Azhari</td>
                                </tr>
                                <tr >
                                    <th className='text-light bookTh'>Date</th>
                                    <td className='BookNText'>12/08/2021</td>
                                </tr>
                                <tr >
                                    <th className='text-light bookTh'>Time</th>
                                    <td className='BookNText'>10.00 PM to 11:00 PM</td>
                                </tr>
                                <tr >
                                    <th className='text-light bookTh'>Fee</th>
                                    <td className='BookNText'>999 BDT</td>
                                </tr>
                                </table>
                            {/* <div className="text-white">
                                <h6>Star</h6>
                                <h6>Date</h6>
                                <h6>Time</h6>
                                <h6>Fee</h6>
                            </div>
                            <div className="mx-3 BookNText">
                                <h6>Mizanur Rahman Azhari</h6>
                                <h6>12/08/2021</h6>
                                <h6>10.00 PM to 11:00 PM</h6>
                                <h6>999 BDT</h6>
                            </div> */}
                        </div>

                        <div className="col-md-6">
                                <h5 className="text-white">Instructions</h5>
                                <p className='BookNText'>orem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Duis accumsan vel nulla at euismod. Sed ipsum magna</p>
                            
                        </div>
                    </div>

                </div>
            </div>

            <div className="BookNow-m-p">
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group my-3">
                                <big className="text-white">Name</big>
                                <input type="text" className="form-control BookNow-input" name="name" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group my-3">
                                <big className="text-white">Phone Number</big>
                                <input type="text" className="form-control BookNow-input" name="phone" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group my-3">
                                <button type="submit" className="my-3 btn btn-gold text-light fw-bold" variant="link"
                                    onClick={handleClick } aria-expanded={open}
                                    aria-controls="collapseID">Register</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </CardContent>
        
        {/* Book Now Payment */}

        <Collapse in={open}>
            <div id="collapseID">
               <BookNowPay/>
            </div>
        </Collapse>

    </Card>

</>
);
};
export default BookNowEvent