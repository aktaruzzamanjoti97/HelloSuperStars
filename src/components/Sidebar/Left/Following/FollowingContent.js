import { React, useState} from "react";
import Football from "../../../../images/Market/Football.jpg";
import Plus from '../../../../images/Normal-User/add.png'
const FollowingContent = () => {
const [value, setValue] = useState(true);
const [btn, setBtn] = useState("Follow");

return (
<>
  <div className="ProMain row col-md-4">
    <div className="Follow-Category-div">
      <img src={Football} className="Follow-Category-Img" alt="" />
      <span className="Follow-Category-text">Dwane Johnson</span>
    </div>

    <button className="Follow-Category-text bt-cat-fol" type="button" onClick={()=> {
      setValue(!value);
      if (value === true) {
      setBtn("Unfollow");
      }
      else {
      setBtn("Follow");
      }
      }}
      style={
      value ? { backgroundColor: "gray" } : { backgroundColor: "#FFAD00" }
      }
      >
      <img src={Plus} className="plus-cat" alt="" /> {btn}

    </button>
  </div>

</>
);
};

export default FollowingContent;