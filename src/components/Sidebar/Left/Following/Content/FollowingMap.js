import React, { useState } from "react";
import './FollowingCat.css'
import FollowingCarousel from "../FollowingCarousel";
import { Follow } from "../../../../../DummyData";
import FollowingContent from "./FollowingContent";
import FollowingSuggestedMap from "./FollowingSuggestedMap";

const FollowingMap = () => {

return (
<>
    <div className="bg-dark my-2 mt-3 d-flex justify-content-center SuggestedCat">
        <FollowingCarousel />
    </div>

    <div className="col-md-12 mt-3 ">
        <div className="row">
            {Follow.map((u) => (
            <FollowingContent key={u.id} user={u} />
            ))}
        </div>
    </div>

    <div className="bg-dark my-2 d-flex justify-content-center SuggestedCat">
        <h5 className="text-light p-2">Suggested</h5>
    </div>


    <FollowingSuggestedMap />

</>
)
}

export default FollowingMap