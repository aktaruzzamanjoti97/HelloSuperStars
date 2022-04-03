import React, { useState, useEffect } from "react";
import { Link, useHistory} from 'react-router-dom';
import "../../../../CSS/Profile/starProfile/starPost.css";
// import profilePhoto from "../../../../../images/Profile/azhari-profile.jpg";
import ReactPlayer from "react-player";
import CardComponent from "./StarCardComponent/CardComponent";
import WazContent from "../../../../../images/Shakib/3.jpg";
// import Children from "../../../../../images/starProfile/starPostLeftContent/children.jpg";
// import Jainamaj from "../../../../../images/starProfile/starPostLeftContent/jainamaz.jpg";
// import Topi from "../../../../../images/starProfile/starPostLeftContent/Cap.jpg";
// import Habibi from "../../../../../images/starProfile/starPostLeftContent/Habibi.jpg";
// import Vector1 from "../../../../../images/starProfile/starPostLeftContent/Card3/1.jpg";
// import Vector2 from "../../../../../images/starProfile/starPostLeftContent/Card3/2.jpg";

import SkeletonArticle from "../../../Home/Body/Post_skaliton/SkeletonArticle";
import PostContent from "../../../Home/Body/Post/PostContent";

// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import StarProfileRightContent from "./StarCardComponent/StarProfileRightContent/StarProfileRightContent";
import axios from "axios";
function StarPost(props) {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [status, setstatus] = useState(true);


  useEffect(() => {
    let isMounted = true;

    console.log(props.starId)

    
    axios.get(`api/user/getStarPost/${props.starId}`).then((res) => {
      if (isMounted) {
        if (res.data.status === 200) {
          //   setLiveChat(res.data.livechats);
          setInterval(() => {
            setPosts(res.data.livechats);
            setstatus(false);
          }, 300);
          //console.log(res.data.livechats);
        }
      }
    });

  }, [props.starId]);



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {status &&
              [1, 2, 3, 4].map((valu) => <SkeletonArticle theme="dark" />)}

            {posts &&
              posts.map((data) => <PostContent key={data.id} post={data} />)}
          </div>

          <div className="col-md-4">
            <StarProfileRightContent/>
          </div>
        </div>
      </div>
    </>
  );
}
export default React.memo(StarPost);