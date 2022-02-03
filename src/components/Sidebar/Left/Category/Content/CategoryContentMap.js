import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlockCat from './Block/BlockCat';

const CategoryContentMap = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [value, setValue] = useState(true);
    const [btn, setBtn] = useState("Follow");

    const { id, bgImg, categoryName,
        follow, block } = props.singleData

    return (
        <>
            <div className="containerSa  col-md-4 mb-3">

                <div id="carouselExampleCaptions" className="carousel w-100 " data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active cateAS">
                            <img src={bgImg} className="ImgCatView" alt={bgImg} />

                            <div className="CatBG"></div>

                            <button className="border-light bottom-left-View text-light" onClick={() =>
                                setModalShow(true)}>Block</button>
                            <BlockCat show={modalShow} onHide={() => setModalShow(false)} />

                            <div class="CenterAda p-3">|</div>
                            <button className="border-light bottom-right-View text-light" type="button" onClick={() => {
                                setValue(!value);
                                if (value === true) {
                                    setBtn("Unfollow");
                                }
                                else {
                                    setBtn("Follow");
                                }
                            }}
                                style={
                                    value ? { backgroundColor: "" } : { backgroundColor: "#46587B" }
                                }
                            >{btn}</button>
                        </div>
                    </div>
                </div>

                <Link to='/category-profile'>
                    <div className='CatBgView '>
                        <div className="text-success fw-bold ">
                            <h6 className='centeredASd fw-bold text-warning'>
                                {categoryName}
                            </h6>
                        </div>
                    </div>
                </Link>

            </div>
        </>
    );
};

export default CategoryContentMap;