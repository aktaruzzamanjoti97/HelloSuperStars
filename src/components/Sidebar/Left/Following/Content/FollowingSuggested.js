import React ,{ useState }  from 'react'
import EventImg from '../../../../../images/FootbalImage.jpg';
const FollowingSuggested = () => {
    
const [data, setData] = useState([
    {
        id: 1,
        name:'Sakib All Hasan',
        bgImg: EventImg,
        categoryName: 'Cricket',
        follow: true,
        block: false,
        
        },
        {
        id: 2,
        name:'Ayman Sadiq',
        bgImg: EventImg,
        categoryName: 'FootBall',
        follow: false,
        block: true,
        },
        {
        id: 3,
        name:'Shaharukh Khan',
        bgImg: EventImg,
        categoryName: 'Tennes',
        follow: true,
        block: true,
        
        },
        {
            id: 4,
            name:'Ayman Sadiq',
            bgImg: EventImg,
            categoryName: 'FootBall',
            follow: false,
            block: true,
            },
    ])
    
    const [value, setValue] = useState(true);
    const [btn, setBtn] = useState(" + Follow");
    const headerStyle = {
    BorderStyle: {
    borderRadius: '5px',
    }
    }
  return (
    <>
     <div className="bg-dark my-2 d-flex justify-content-center SuggestedCat">
        <h5 className="text-light p-2">Suggested</h5>
    </div>
    <div className="col-md-12 mt-3">
        <div className="row">
            {data.map((singleData) => {
            return (
            <div className="containerSa col-md-3 mb-3">

                <div id="carouselExampleCaptions" className="carousel w-100 " data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={singleData.bgImg} className="ImgFollowView" alt={EventImg} />

                            <div className="FollowingCatBG"></div>

                            <div className="FollowingCatText">{singleData.name}</div>

                            <button className="btn FollowingCat py-1" type="button" onClick={()=> {
                                setValue(!value);
                                if (value === true) {
                                setBtn("✅ Following");
                                }
                                else {
                                setBtn("+ Follow");
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
            )
            })}

        </div>
    </div>


    </>
  )
}

export default FollowingSuggested
