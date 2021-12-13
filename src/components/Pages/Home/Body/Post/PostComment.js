import React from 'react'

export default function PostComment ({users}){
    return (
        <>
             <div className="accordion-item comment-bg-post">
                        <div id="flush-collapseOne" className="accordion-collapse collapse">

                        <div className="coment-area  ">
                                <ul className="we-comet ">
                                    <li >
                                        <div className="comet-avatar">
                                            <img  src={users.profilePicture} className="com-post-img-head"
                                                alt={users.profilePicture} />
                                        </div>

                                        <div className="we-comment">
                                            <div className="coment-head">
                                                <h5><p className="com-name-po">Jason borne</p></h5>
                                                <span>1 year ago</span>
                                                <p className="we-reply" title="Reply"><i
                                                        className="fa fa-reply"></i></p>
                                            </div>
                                            <p className="com-name-po">we are working for the dance and sing songs. this car is very awesome for
                                                the youngster. please vote this car and like our post</p>
                                        </div>

                                        <ul>
                                            <li>
                                                <div className="comet-avatar">
                                                    <img className="com-post-img" src={users.profilePicture} alt={users.profilePicture} />
                                                </div>
                                                <div className="we-comment">
                                                    <div className="coment-head">
                                                        <h5><p className="com-name-po">alexendra dadrio</p></h5>
                                                        <span>1 month ago</span>
                                                        <p className="we-reply" title="Reply"><i
                                                                className="fa fa-reply"></i></p>
                                                    </div>
                                                    <p className="com-name-po">yes, really very awesome car i see the features of this car in
                                                        the official website of <p title="">#Mercedes-Benz</p>
                                                        and really impressed :-)</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="comet-avatar">
                                                    <img className="com-post-img" src={users.profilePicture} alt={users.profilePicture} />
                                                </div>
                                                <div className="we-comment">
                                                    <div className="coment-head">
                                                        <h5><p className="com-name-po">Olivia</p></h5>
                                                        <span>16 days ago</span>
                                                        <p className="we-reply" title="Reply"><i
                                                                className="fa fa-reply"></i></p>
                                                    </div>
                                                    <p className="com-name-po">i like lexus cars, lexus cars are most beautiful with the awesome
                                                        features, but this car is really outstanding than lexus</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <div className="comet-avatar">
                                            <img className="com-post-img-head" src={users.profilePicture} alt={users.profilePicture} />
                                        </div>
                                        <div className="we-comment">
                                            <div className="coment-head">
                                                <h5><p className="com-name-po">Donald Trump</p></h5>
                                                <span>1 week ago</span>
                                                <p className="we-reply" title="Reply"><i
                                                        className="fa fa-reply"></i></p>
                                            </div>
                                            <p className="com-name-po">we are working for the dance and sing songs. this video is very awesome
                                                for the youngster. please vote this video and like our channel
                                                <i className="em em-smiley"></i>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="accordion-button-fx  ">
                                

                                <img src={users.profilePicture} className="com-post-img-head" alt={users.profilePicture} />
                                <form action="">
                                    <input type="text" className="comment-text-post"
                                        placeholder="Write a comment...." />
                                    <button className="comment-text-post-sub">Submit</button>
                                </form>
                            </div>

                            
                        </div>
                    </div>
        </>
    )
}

