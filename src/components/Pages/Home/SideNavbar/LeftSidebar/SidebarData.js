import React from 'react'
import SubCatData from './SubCategory/SubCatData'

const SidebarData = () => {
    return (
        <> 
        
            <div className="accordion-item left-bottom-ap">

                <h className="accordion-header " id="headingOne">
                    <button className="accordion-button profile-accordion-button-icon left-bottom-ap collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                        aria-controls="collapseOne">
                        <span>
                            <i className="fas fa-layer-group mx-2 profile-font-color fa-2x"></i>
                        </span>{" "}
                        <span className="mx-2 profile-font-color">
                            Category <br></br>
                            <small className="category-size-chat"> 5 selectd</small>
                        </span>
                    </button>
                </h>

                {/* Sub Category*/}
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <SubCatData/>
                    </div>
                </div>

            </div>

            <div className="accordion-item mt-1 left-bottom-ap">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button profile-accordion-button left-bottom-ap collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                        aria-controls="collapseTwo">

                        <span>
                            <i className="fas fa-star mx-2 profile-font-color fa-2x"></i>
                        </span>{" "}

                        <span className="mx-2 profile-font-color">Following<br></br>
                            <small className="category-size-chat"> 200 star</small>
                        </span>

                    </button>
                </h2> 
            </div>

            <div className="accordion-item mt-1 left-bottom-ap">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button profile-accordion-button left-bottom-ap collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                        aria-controls="collapseTwo">
                        <span>
                            <i className="fas fa-wallet mx-2 profile-font-color fa-2x"></i>
                        </span>{" "}
                        <span className="mx-2 profile-font-color">
                            Wallet <br></br>
                            <small className="category-size-chat"> 200 star</small>
                        </span>
                    </button>
                </h2>
            </div>

            <div className="accordion-item mt-1 left-bottom-ap">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button profile-accordion-button left-bottom-ap collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                        aria-controls="collapseTwo">
                        <span>
                            <i className="fas fa-id-card mx-2 profile-font-color fa-2x"></i>
                        </span>{" "}
                        <span className="mx-2 profile-font-color">
                            Enrolled audition <br></br>
                            <small className="category-size-chat"> 1 pending</small>
                        </span>
                    </button>
                </h2>
            </div>

            <div className="accordion-item mt-1 left-bottom-ap">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button profile-accordion-button left-bottom-ap collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                        aria-controls="collapseTwo">
                        <span>
                            <i className="fas fa-cog mx-2 profile-font-color fa-2x"></i>
                        </span>{" "}
                        <span className="mx-2 profile-font-color">Setting</span>
                    </button>
                </h2>
            </div>  
        </>
    )
}

export default SidebarData
