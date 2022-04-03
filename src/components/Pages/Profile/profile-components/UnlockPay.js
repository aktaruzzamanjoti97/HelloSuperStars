import React,{ useState, useEffect, useRef } from 'react';
import Collapse from 'react-bootstrap/Collapse'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Markup } from 'interweave';
import BookNowPay from '../BookNow/BookNowPay';

const UnlockPay = (props) => {
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
                        <img src={`Azhari`} alt="" className="img-fluid BookImg" />
                    </div>
                </div>

                <div className="col-md-9">
                    <h4 className="BookNameText">Sakib</h4>
                    <div className="vb"></div>
                    <div className="mt-3 row">

                        <div className="col-md-6 BookNowMN">
                            <table className='taBook'>
                                <tr >
                                    <th className='text-light bookTh'>Star</th>
                                    {/* <td className='BookNText'>{star.super_star?.first_name} {star.super_star?.last_name}</td> */}
                                    <td className='BookNText'>Sakib al Hasan</td> 
                                </tr>
                                <tr >
                                    <th className='text-light bookTh'>Date</th>
                                    <td className='BookNText'>12/08/2021</td>
                                </tr>
                                <tr >
                                    <th className='text-light bookTh'>Time</th>
                                    <td className='BookNText'>11.59 PM</td>
                                </tr>
                                <tr >
                                    <th className='text-light bookTh'>Fee</th>
                                    <td className='BookNText'>200BDT</td>
                                </tr>
                                </table>
                        </div>

                        <div className="col-md-6">
                                <h5 className="text-white">Instructions</h5>
                                <p className='BookNText'>
                                    <Markup content= "orem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan vel nulla at euismod. Sed ipsum magna"/>
                                </p>
                            
                        </div>
                    </div>

                </div>
            </div>

            <div className="BookNow-m-p">
                <form >
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group my-3">
                                <big className="text-white">Email/Phone</big>
                                <input type="text" className="form-control BookNow-input" name="email" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group my-3">
                                <big className="text-white">Password</big>
                                <input type="password" className="form-control BookNow-input" name="password"  required/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <button type="submit" className="my-3 btn btn-gold text-light fw-bold" variant="link"
                                    onClick={handleClick } aria-expanded={open}
                                    aria-controls="collapseID">Register</button> 
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
export default UnlockPay
