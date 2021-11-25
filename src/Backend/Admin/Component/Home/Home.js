import React from 'react'
import SideNavbar from '../Siderbar/SideNavbar'
import '../../CSS/Home.css'

const Home = () => {
    return (
        <>

            <SideNavbar/>

            <div className="content ">

                <div className="container row  ">

                    <div class="card">
                          <div class="container text-center">
                            <span className="Card-icon-ad">q</span><b className="card-body-ad">00</b> 
                          </div>
                          <div className="card-footer-ad"><b>Live Now </b></div>
                    </div>

                    <div class="card">
                        <div class="container text-center">
                            <span className="Card-icon-ad">q</span><b className="card-body-ad">01</b> 
                        </div>
                        <div className="card-footer-ad"><b>Pending Session </b></div>
                    </div>

                    <div class="card">
                        <div class="container text-center">
                            <span className="Card-icon-ad">q</span><b className="card-body-ad">00</b> 
                        </div>
                        <div className="card-footer-ad"><b>Add Session </b></div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Home
