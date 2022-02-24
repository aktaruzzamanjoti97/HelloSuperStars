import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import Shakib from "../../images/sakib.jpg";

const MobileSide = () => {
return (
<>


    <div className="row">

        <div className="col-6 mt-2">
            <Link to='/category'>
            <div className="d-flex btn CatBlock">
                <div className='text-warning col-3'><i className="fas fa-layer-group mx-2 mt-2"></i></div>
                <div className='Cat-Title col-9'>Category <br />
                    <small className="category-size-chat"> 5 Selected</small>
                </div>
            </div>
            </Link>
        </div>

        <div className="col-6 mt-2">
            <Link to='/following'>
            <div className="d-flex btn CatBlock">
                <div className='text-warning col-3'><i className="fas fa-star mx-2 mt-2"></i></div>
                <div className='Cat-Title col-9'>Following <br />
                    <small className="category-size-chat"> 25 star</small>
                </div>
            </div>
            </Link>
        </div>

        <div className="col-6 mt-2">
            <Link to=''>
            <div className="d-flex btn CatBlock">
                <div className='text-warning col-3'><i className="fas fa-id-card mx-2 mt-2"></i></div>
                <div className='Cat-Title col-9'>Wallet <br />
                    <small className="category-size-chat">25 star</small>
                </div>
            </div>
            </Link>
        </div>

        <div className="col-6 mt-2">
            <Link to='/wallet'>
            <div className="d-flex btn CatBlock">
                <div className='text-warning col-3'><i className="fas fa-star mx-2 mt-2"></i></div>
                <div className='Cat-Title col-9'>Enrolled audition <br />
                    <small className="category-size-chat">3 Pending</small>
                </div>
            </div>
            </Link>
        </div>

        <div className="col-6 mt-2">
            <Link to='/enrolled-auditions'>
            <div className="d-flex btn CatBlock">
                <div className='text-warning col-3'><i className="fas fa-id-card mx-2 mt-2"></i></div>
                <div className='Cat-Title col-9'>Activities <br />
                    <small className="category-size-chat">4 activities recently</small>
                </div>
            </div>
            </Link>
        </div>

        <div className="col-6 mt-2">
            <Link to='/'>
            <div className="d-flex btn CatBlock">
                <div className='text-warning col-3'><i className="fas fa-cog mx-2 mt-2"></i></div>
                <div className='Cat-Title col-9'>Setting <br />
                    <small className="category-size-chat">3 Pending</small>
                </div>
            </div>
            </Link>
        </div>
    </div>

</>
)
}

export default MobileSide