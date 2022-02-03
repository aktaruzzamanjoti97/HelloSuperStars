import React from "react";
import { Following } from "../../../../../DummyData";
import './FollowingCat.css'

import FollowingSuggested from "./FollowingSuggested";

const FollowingSuggestedMap = () => {

return (
<>

    <div className="col-md-12 mt-3 ">
        <div className="row">
            {Following.map((u) => (
            <FollowingSuggested key={u.id} user={u} />
            ))}
        </div>
    </div>


</>
)
}

export default FollowingSuggestedMap