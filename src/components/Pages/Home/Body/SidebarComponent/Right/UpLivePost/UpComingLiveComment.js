import {React, useState } from 'react'
import Star from '../../../../../../../images/Profile/ayman-profile.jpg'

import { Collapse } from "react-bootstrap";
const UpComingLiveComment = () => {
const [open, setOpen] = useState(false);
return (
<>
<div className="coment-area  ">
        <ul className="we-comet ">
            <li>
                <div className="comet-avatar">
                    <img src={Star} className="com-post-img-head" alt={Star} />
                </div>

                <div className="we-comment col-md-12">
                    <div className="coment-head">
                        <p>
                            <p className="com-name-po">Jason borne</p>
                        </p>
                        <span>1 year ago</span>
                        <p className="we-reply" title="Reply"><i className="fa fa-reply"></i>
                        </p>
                    </div>
                    <p className="com-name-po">we are working for the dance and sing songs. this
                        car is very awesome for
                        the youngster. please vote this car and like our post</p>
                </div>

                <button className="we-reply-button-x  ">Like .</button>.
                <button className="we-reply-button" variant="link" onClick={()=> setOpen(!open)}
                    aria-expanded={open} aria-controls="collapseID">Reply .</button>.
                <button className="we-reply-button" variant="link" onClick={()=> setOpen(!open)}
                    aria-expanded={open} aria-controls="collapseID" >5m</button>

                <ul>
                    <li>
                        <div className="comet-avatar">
                            <img className="com-post-img" src={Star} alt={Star} />
                        </div>
                        <div className="we-comment">
                            <div className="coment-head">
                                <p>
                                    <p className="com-name-po">Olivia</p>
                                </p>
                                <span>16 days ago</span>
                                <p className="we-reply" title="Reply"><i className="fa fa-reply"></i></p>
                            </div>
                            <p className="com-name-po">i like lexus cars, lexus cars are most
                                beautiful with the awesome .</p>
                        </div>
                        <button className="we-reply-button-x ">Like .</button>.
                        <button className="we-reply-button" variant="link" onClick={()=> setOpen(!open)}
                            aria-expanded={open} aria-controls="collapseID">Reply .</button>.
                        <button className="we-reply-button " variant="link" onClick={()=> setOpen(!open)}
                            aria-expanded={open} aria-controls="collapseID">1m</button>
                    </li>
                </ul>

                <Collapse in={open}>
                    <div id="collapseID">
                        <div className="accordion-button-fx-reply  ">
                            <img src={Star} className="com-post-img-head-reply" alt={Star} />
                            <form action="">
                                <input className="form-control we-comment-reply" rows="1" id="autoresizing"
                                    placeholder='write here...' />
                            </form>
                        </div>
                    </div>

                </Collapse>

            </li>
        </ul>
    </div>
    <div className="comment-post-head">
        <img src={Star} className="com-post-img-head-p" alt={Star} />
        <form action="">
            <input className="form-control comment-input-fill" rows="1" id="autoresizing" placeholder='write here...' />
        </form>
    </div>
</>
)
}

export default UpComingLiveComment