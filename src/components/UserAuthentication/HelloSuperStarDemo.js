import React from 'react'
import HelloSuperStarLogo from '../../images/HelloSuperStarLogo.png'
import { Button } from 'reactstrap';
import '../../App.css';
const HelloSuperStarDemo = () => {
          return (
                    <div className="class-col col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                              <div>
                                        <img src={HelloSuperStarLogo} alt="Hello Super Star Logo" />
                              </div>
                              <div>
                                        <Button outline color="warning"> <i><ion-icon name="videocam-outline"></ion-icon></i> Virtual Tour</Button>
                              </div>

                    </div>
          )
}

export default HelloSuperStarDemo;

