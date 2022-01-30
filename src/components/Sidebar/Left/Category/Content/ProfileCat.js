import React, { useState } from 'react';
import messiVsPsg from '../../../../../images/messivspsg.png';
import ronaldo from '../../../../../images/ronaldo.jpg';
import './ProfileCat.css';

const ProfileCat = () => {

    const [toggleButton, setToggleButton] = useState({
        flag: 1,
        text: 'Follow',
    })

    const [blockButton, setBlockButton] = useState({
        flag: 1,
        text: 'Block',
    })

    const handleClick = () => {
        if (toggleButton.flag === 0) {
            setToggleButton({
                flag: 1,
                text: 'Follow'
            });
        } else {
            setToggleButton({
                flag: 0,
                text: 'UnFollow'
            });
        }
    }

    const handleBlock = () => {
        if (blockButton.flag === 0) {
            setBlockButton({
                flag: 1,
                text: 'Block'
            });
        } else {
            setBlockButton({
                flag: 0,
                text: 'UnBlock'
            });
        }
    }



    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="star-Card my-3">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 cardFirstSection">
                                    <div className="mt-5 pt-4">
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <div className="followButton mt-5">
                                                <button onClick={handleClick} type="button" className="btn btn-success text-center"><i className="fas fa-user-plus "></i> {toggleButton.text}</button>
                                            </div>

                                            <div className=" blockButton mt-5">
                                                <button onClick={handleBlock} type="button" className="btn btn-danger text-center"><i className="fas fa-user-minus "></i> {blockButton.text}</button>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="d-flex">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="hexagonBox">
                                            <div class="hexagon"></div>

                                            <div className="starProfileImage">
                                                <div className="d-flex justify-content-center">
                                                    <div>
                                                        <img className="img-fluid starCardPro text-center" src={messiVsPsg} alt="" />
                                                        <h5 className="nameStar text-white text-center text-bold text-bold mt-1"><small>Leonel Messi</small></h5>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                    <div className="jotiDiv">
                                        
                                    </div>
                                
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="star-Card my-3">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 cardFirstSection">
                                    <div className="mt-5 pt-4">
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <div className="followButton mt-5">
                                                <button onClick={handleClick} type="button" className="btn btn-success text-center"><i className="fas fa-user-plus "></i> {toggleButton.text}</button>
                                            </div>

                                            <div className=" blockButton mt-5">
                                                <button onClick={handleBlock} type="button" className="btn btn-danger text-center"><i className="fas fa-user-minus "></i> {blockButton.text}</button>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="d-flex">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="hexagonBox">
                                            <div class="hexagon"></div>

                                            <div className="starProfileImage">
                                                <div className="d-flex justify-content-center">
                                                    <div>
                                                        <img className="img-fluid starCardPro text-center" src={ronaldo} alt="" />
                                                        <h5 className="nameStar text-white text-center text-bold text-bold mt-1"><small>Leonel Messi</small></h5>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                    <div className="jotiDiv">
                                        
                                    </div>
                                
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="col-md-12">
                    <div className="star-Card m-3">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 cardFirstSection">

                                <div className="">
                                    <div className="mt-5">
                                        <div className="d-flex flex-column">
                                            <div className="followButton m-5">
                                                <button onClick={handleClick} type="button" className="btn btn-success text-center w-75"><i className="fas fa-user-plus "></i> {toggleButton.text}</button>
                                            </div>

                                            <div className="m-5 blockButton">
                                                <button onClick={handleBlock} type="button" className="btn btn-danger text-center w-75"><i className="fas fa-user-minus "></i> {blockButton.text}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="d-flex">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="hexagonBox">


                                            <div class="hexagon"></div>

                                            <div className="starProfileImage">
                                                <div className="d-flex justify-content-center">
                                                    <div>
                                                        <img className="img-fluid starCardPro" src={neymar} alt="" />
                                                        <h5 className="nameStar text-white text-center text-bold mt-2">Neymar da Silva</h5>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                    <div className="jotiDiv">
                                        
                                    </div>
                                
                                </div>


                            </div>
                        </div>
                    </div>
                </div> */}
                
            </div>

        </>
    );
};

export default ProfileCat;