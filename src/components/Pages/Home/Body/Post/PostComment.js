import {React, useState } from 'react'
import Star from '../../../../../images/Profile/Shakibpro.png'

import { Collapse } from "react-bootstrap";
const PostComment = () => {
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
                <button className="we-reply-button " onClick={()=> setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>Reply .</button>.
                <button className="we-reply-button " onClick={()=> setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>5m</button>

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
                        <button className="we-reply-button  " onClick={()=> setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}>Reply .</button>.
                        <button className="we-reply-button " onClick={()=> setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}>1m</button>
                    </li>
                </ul>

                <Collapse in={open}>
                    <div id="example-collapse-text">
                        <div className="accordion-button-fx  ">
                            <img src={Star} className="com-post-img-head" alt={Star} />
                            <form action="">
                                <input type="text" className=" comment-text-post-x"
                                    placeholder="Write a comment...." />
                            </form>
                        </div>
                    </div>
                </Collapse>

            </li>
        </ul>
    </div>

    <div className="accordion-button-fx  ">
        <img src={Star} className="com-post-img-head" alt={Star} />
        <form action="">
            <input type="text" className="comment-text-post" placeholder="Write a comment...." />
        </form>
    </div>
</>
)
}

export default PostComment