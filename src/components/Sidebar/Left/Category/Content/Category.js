import React from 'react';
import { Link } from 'react-router-dom';
import EntertainmentImg from '../../../../../images/entertainmentImg.jpg';
import EventImg from '../../../../../images/FootbalImage.jpg';
import religionImg from '../../../../../images/religionImage.jpg';
import sportImg from '../../../../../images/sports.jpg';
import politicsImg from '../../../../../images/politics.jpg';
import educationImg from '../../../../../images/education.jpeg';
import musicImg from '../../../../../images/music.jpeg';
import './CategoryJs.css';

const Category = () => {

    return (
        <>

            <div className="col-md-12 mt-3">
                <div className="row">

                    <div className="containerSa col-md-6 mb-3">

                        <div id="carouselExampleCaptions" className="carousel w-100 " data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={EntertainmentImg} className="ImgCat" alt={EntertainmentImg} />
                                    <div className="carousel-caption">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                {/* <div className="carousel-item">
                            <img src={EntertainmentImg} className="ImgCat" alt={EntertainmentImg} />
                            <div className="carousel-caption">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={EntertainmentImg} className="ImgCat" alt={EntertainmentImg} />
                            <div className="carousel-caption">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div> */}
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

                    <div className="containerSa col-md-6 mb-3">

                        <div id="carouselExampleCaptions" className="carousel w-100 " data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={religionImg} className="ImgCat" alt={religionImg} />
                                    <div className="carousel-caption">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                {/* <div className="carousel-item">
                            <img src={religionImg} className="ImgCat" alt={religionImg} />
                            <div className="carousel-caption">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={religionImg} className="ImgCat" alt={religionImg} />
                            <div className="carousel-caption">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div> */}
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

                    <div className="containerSa col-md-6 mb-3">

                        <div id="carouselExampleCaptions" className="carousel w-100 " data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={sportImg} className="ImgCat" alt={EventImg} />
                                    <div className="carousel-caption">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                {/* <div className="carousel-item">
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
                        </div> */}
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



                    <div className="containerSa col-md-6 mb-3">

                        <div id="carouselExampleCaptions" className="carousel w-100 " data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={politicsImg} className="ImgCat" alt={politicsImg} />
                                    <div className="carousel-caption">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                {/* <div className="carousel-item">
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
        </div> */}
                            </div>
                        </div>

                        <Link to='category-view'>
                            <div className='CatBgS '>
                                <div className="text-success fw-bold ">
                                    <h4 className='centeredASd fw-bold text-warning'>
                                        <i className="fas fa-futbol"></i>&nbsp;
                                        Politics
                                    </h4>
                                </div>
                            </div>
                        </Link>

                    </div>

                    
                    <div className="containerSa col-md-6 mb-3">

                        <div id="carouselExampleCaptions" className="carousel w-100 " data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={educationImg} className="ImgCat" alt={educationImg} />
                                    <div className="carousel-caption">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                {/* <div className="carousel-item">
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
        </div> */}
                            </div>
                        </div>

                        <Link to='category-view'>
                            <div className='CatBgS '>
                                <div className="text-success fw-bold ">
                                    <h4 className='centeredASd fw-bold text-warning'>
                                        <i className="fas fa-futbol"></i>&nbsp;
                                        Education
                                    </h4>
                                </div>
                            </div>
                        </Link>

                    </div>


                         
                    <div className="containerSa col-md-6 mb-3">

                        <div id="carouselExampleCaptions" className="carousel w-100 " data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={musicImg} className="ImgCat" alt={musicImg} />
                                    <div className="carousel-caption">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                {/* <div className="carousel-item">
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
        </div> */}
                            </div>
                        </div>

                        <Link to='category-view'>
                            <div className='CatBgS '>
                                <div className="text-success fw-bold ">
                                    <h4 className='centeredASd fw-bold text-warning'>
                                        <i className="fas fa-futbol"></i>&nbsp;
                                        Education
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

export default Category