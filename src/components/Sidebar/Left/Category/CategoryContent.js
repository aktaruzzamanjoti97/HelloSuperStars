import  { React, useState}  from "react";
import Football from "../../../../images/Market/Football.jpg"
import Plus from '../../../../images/Normal-User/add.png'


const CategoryContent = () => {

  const [buttonText, setButtonText] = useState("+Choose"); 
  const changeText = (text) => setButtonText(text);

    return (
        <>
          
                <div className="ProMain row col-md-4">

                    <div className="Follow-Category-div">
                        <img src={Football} className="Follow-Category-Img" alt="" />
                        <span className="Follow-Category-text">Dwane Johnson</span>
                    </div>
                    <button className="Follow-Category-text bt-cat-fol" type="button" onClick={() => changeText("+Unchoose")}><img src={Plus} className="plus-cat" alt="" />{buttonText}</button>
                </div>
            
           
        </>
    )
}

export default CategoryContent
