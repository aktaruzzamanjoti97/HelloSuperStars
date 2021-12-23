import  { React, useState}  from "react";
import Football from "../../../../images/Market/Football.jpg";

const FollowingContent = () => {
  const [buttonText, setButtonText] = useState("+Follow"); 
  const changeText = (text) => setButtonText(text);

  return (
    <>
          <div className="ProMain row col-md-4">
            <div className="Follow-Category-div">
              <img src={Football} className="Follow-Category-Img" alt="" />
              <span className="Follow-Category-text">Dwane Johnson</span>
            </div>
            <button className="Follow-Category-text bt-cat-fol" type="button" onClick={() => changeText("+Unfollow")}>{buttonText}</button>
          </div>

    </>
  );
};

export default FollowingContent;


