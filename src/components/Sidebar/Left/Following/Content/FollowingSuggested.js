import React ,{ useState } from 'react'

const FollowingSuggested = ({user}) => {
const [value, setValue] = useState(true);
const [btn, setBtn] = useState("➕ Follow");

return (
<>

    <div className="containerSa col-md-3 mb-3">
        <div id="carouselExampleCaptions" className="carousel w-100 " data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={user.FollowingPic} className="ImgFollowView" alt={user.FollowingPic} />

                    <div className="FollowingCatBG"></div>

                    <div className="FollowingCatText fw-bold">{user.username}</div>

                    <button className="btn FollowingCat py-1" type="button" onClick={()=> {
                        setValue(!value);
                        if (value === true) {
                        setBtn(" ✅ Following");
                        }
                        else {
                        setBtn("➕ Follow");
                        }
                        }}
                        // style={
                        // value ? { backgroundColor: "none" } : { backgroundColor: "" }
                        // }
                        >{btn}</button>
                </div>
            </div>
        </div>
    </div>
</>
)
}

export default FollowingSuggested