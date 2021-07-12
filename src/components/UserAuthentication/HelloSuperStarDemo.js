import React from 'react'
import HelloSuperStarLogo from '../../images/HelloSuperStarLogo.png'
import {Button} from 'reactstrap';

const HelloSuperStarDemo = () => {
          return (
                    <>
                    <div>
                    <img src={HelloSuperStarLogo} alt="Hello Super Star Logo" />
                    </div>
                    <div>
                              <Button outline color="warning">warning</Button>
                    </div>
                              
                    </>
          )
}

export default HelloSuperStarDemo;

