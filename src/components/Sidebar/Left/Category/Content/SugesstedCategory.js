import React from 'react';
import { Link } from 'react-router-dom';
import Comics from '../../../../../images/comics.jpeg';
import EventImg from '../../../../../images/FootbalImage.jpg';
import tvNatok from '../../../../../images/tvNatok.jpeg';
import './CategoryJs.css';
const SuggestedCategory = ({headerStyle}) => {

return (
<>
<div className="bg-dark my-4 d-flex justify-content-between" style={headerStyle.BorderStyle}>
                <h4 className="text-light p-3">Suggested Category</h4>
                <h4 className="p-3">
                    {/* <Dropdown>
                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                            <FilterListIcon />
                        </Dropdown.Toggle>

                        <Dropdown.Menu >
                            <Dropdown.Item onClick={() => setData(mainData)} className="text-warning">Show all</Dropdown.Item>
                            <Dropdown.Item onClick={() => setData(data.filter((item) => {
                                return item.follow === true;
                            }))} className="text-warning">Following</Dropdown.Item>
                            <Dropdown.Item onClick={() => setData(mainData.filter((item) => {
                                return item.block === true;
                            }))} className="text-warning">Blocked</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}

                </h4>
            </div>

    <div className="col-md-12 mt-3">
        <div className="row">

            <div className="containerSa col-md-4 mb-3">

                <div id="carouselExampleCaptions" className="carousel w-100 " data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={EventImg} className="ImgCat" alt={EventImg} />
                            <div className="carousel-caption">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={EventImg} className="ImgCat" alt={EventImg} />
                            <div className="carousel-caption">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={EventImg} className="ImgCat" alt={EventImg} />
                            <div className="carousel-caption">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to='category-view'>
                <div className='CatBgS '>
                    <div className="text-success fw-bold ">
                        <h4 className='centeredASd fw-bold text-warning'>
                            <i className="fas fa-film"></i>&nbsp;
                            Entertainment
                        </h4>
                    </div>
                </div>
                </Link>

            </div>

            <div className="containerSa col-md-4 mb-3">

                <div id="carouselExampleCaptions" className="carousel w-100 " data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Comics} className="ImgCat" alt={Comics} />
                            <div className="carousel-caption">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Comics} className="ImgCat" alt={Comics} />
                            <div className="carousel-caption">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Comics} className="ImgCat" alt={Comics} />
                            <div className="carousel-caption">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to='category-view'>
                <div className='CatBgS '>
                    <div className="text-success fw-bold ">
                        <h4 className='centeredASd fw-bold text-warning'>
                            <i className="fas fa-praying-hands"></i>&nbsp;
                            Religion
                        </h4>
                    </div>
                </div>
                </Link>

            </div>

            <div className="containerSa col-md-4 mb-3">

                <div id="carouselExampleCaptions" className="carousel w-100 " data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={tvNatok} className="ImgCat" alt={tvNatok} />
                            <div className="carousel-caption">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={tvNatok} className="ImgCat" alt={tvNatok} />
                            <div className="carousel-caption">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={tvNatok} className="ImgCat" alt={tvNatok} />
                            <div className="carousel-caption">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to='category-view'>
                <div className='CatBgS '>
                    <div className="text-success fw-bold ">
                        <h4 className='centeredASd fw-bold text-warning'>
                            <i className="fas fa-futbol"></i>&nbsp;
                            Sport
                        </h4>
                    </div>
                </div>
                </Link>

            </div>

        </div>
    </div>
</>
)
}

export default SuggestedCategory;