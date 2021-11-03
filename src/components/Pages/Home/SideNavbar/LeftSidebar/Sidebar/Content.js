import React from 'react'

const Content = props => {
    return (
        <>
            <div className="accordion-item left-bottom-ap">
                <h2 className="accordion-header " id="headingOne">
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
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="Select-home-category">
                            <div className="Select-text-home">Learning sessions</div>
                        </div>
                        <div className="Select-home-category">
                            <div className="Select-text-home">Live now</div>
                        </div>
                        <div className="Select-home-category">
                            <div className="Select-text-home">Upcoming auditions</div>
                        </div>
                        <div className="Select-home-category">
                            <div className="Select-text-home">Nothing to Hide </div>
                        </div>
                        <div className="Select-home-category">
                            <div className="Select-text-home">Upcoming live</div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Content
