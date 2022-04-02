import axios from "axios";
import React, { useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import { useParams } from "react-router-dom";
import StarSla from "../../../../../images/salman.jpg";
const FanMember = () => {

  const [fanDetails, setFanDetails] = React.useState([]);
  const [myStar, setMyStar] = useState([]);

  // const [myAnotherStar, setMyAnotherStar] = React.useState('');
  const { slug } = useParams();
  console.log('slug fanDetails ', fanDetails);
  console.log('My olld myStar ', myStar);

  useEffect(() => {
    axios.get(`/api/user/fan/group/${slug}`).then(res => {
      console.log("res ", res);
      if (res.status === 200) {
        setFanDetails(res.data.fanDetails);
        
        setMyStar(res.data.my_user_join);
        
        // setMyAnotherStar(res.data.fanDetails.another_user_join);
      }

    });
  }, [slug]);

  return (
    <>
      <div className="MediaBG mt-3">
        <div className="row ms-1 me-1">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="pills" className="d-flex mx-2 mt-3">
              <Nav.Item>
                <Nav.Link eventKey="first" className="me-3 NavMember">
                  Members (230){" "}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className="me-3 NavMember">
                  {" "}
                  Admins (2)
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>

               {/*______________________ Member ___________________*/}
              <Tab.Pane eventKey="first">
                <div className="row justify-content-between mx-2 mt-3 mb-3">
                  <div className="col-md-6 px-2 MembersListFan">
                    <button className="btn w-100 ">
                      <img src={`http://localhost:8000/${fanDetails.my_superstar?.image}`} alt="" className="MemImgStar" />
                      {fanDetails.my_superstar?.first_name} {fanDetails.my_superstar?.last_name} - 130
                       {/* - 130 */}
                    </button>
                  </div>
                  <div className="col-md-6 px-2 MembersListFanAdmin">
                    <button className="btn w-100 ">
                      <img src={`http://localhost:8000/${fanDetails.another_superstar?.image}`} alt="" className="MemImgStar" />
                      {fanDetails.another_superstar?.first_name} {fanDetails.another_superstar?.last_name} - 132
                    </button>
                  </div>
                </div>

                {/*______________________ Admin List ___________________*/}

                <div className="row justify-content-between mx-2 mt-3  FanMemberScroll">
                  <div className="col-md-6 px-2 MembersListFanUser mb-3">

                    {/*____________ Salman Khan Admin ____________ */}
                  
                  

                  {/* {console.log(typeof(myStar))}
                   */}

                  {
                    myStar.map((fan, i)=>(
                      <button className="btn w-100 text-light FaNMemBerList mb-3">
                        <img src={StarSla} alt="" className="MemImgStar" />
                        {fan}
                      </button>
                    ))
                  }
                   

                    
                  </div>

                  <div className="col-md-6  px-2 MembersListFanUser mb-3">

                    {/*____________ Shahrukh Khan Admin ____________ */}
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={StarSla} alt="" className="MemImgStar" />
                      Afzal Karim
                    </button>


                  </div>
                  
                </div>
              </Tab.Pane>




              {/*______________________ Admin ___________________*/}

              <Tab.Pane eventKey="second">
                <div className="row justify-content-between mx-2 mt-3 mb-3">
                  <div className="col-md-6 px-2 MembersListFan">
                    <button className="btn w-100 MembersListFan ">
                      <img src={`http://localhost:8000/${fanDetails.my_superstar?.image}`} alt="" className="MemImgStar" />
                      {fanDetails.my_superstar?.first_name} {fanDetails.my_superstar?.last_name} - 1
                    </button>
                  </div>
                  <div className="col-md-6 px-2 MembersListFanAdmin">
                    <button className="btn w-100 ">
                      <img src={`http://localhost:8000/${fanDetails.another_superstar?.image}`} alt="" className="MemImgStar" />
                      {fanDetails.another_superstar?.first_name} {fanDetails.another_superstar?.last_name} - 1
                    </button>
                  </div>
                </div>

                {/*______________________ Admin List ___________________*/}

                <div className="row justify-content-between mx-2 mt-3  FanMemberScroll">
                  <div className="col-md-6 px-2 MembersListFanUser mb-3">

                    {/*____________ Salman Khan Admin ____________ */}
                    <button className="btn w-100 text-light FaNMemBerList mb-3">
                      <img src={`http://localhost:8000/${fanDetails.my_admin?.image}`} alt="" className="MemImgStar" />
                      {fanDetails.my_admin?.first_name} {fanDetails.my_admin?.last_name}
                    </button>
                    
                  </div>

                  <div className="col-md-6  px-2 MembersListFanUser mb-3">

                    {/*____________ Shahrukh Khan Admin ____________ */}
                    <button className="btn w-100 text-light FaNMemBerList">
                      <img src={`http://localhost:8000/${fanDetails.another_admin?.image}`} alt="" className="MemImgStar" />
                      {fanDetails.another_admin?.first_name} {fanDetails.another_admin?.last_name}
                    </button>

                  </div>
                  
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};

export default FanMember;
