import React from 'react'
import HelloSuperStarLogo from '../../images/HelloSuperStarLogo.png'
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlayArrow from '@material-ui/icons/PlayArrow';
import '../../App.css';

const HelloSuperStarDemo = () => {
          return (
                    <div className="class-col col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                              <div className="logIm">
                                        <img src={HelloSuperStarLogo} alt="Hello Super Star Logo" />
                              </div>
                              <div>
                                     <button className='btn mt-3 text-light px-4 btn-warning'>
                                        
                                        <PlayArrow />
                                          <span className='mx-2'>Virtual Tour</span>
                                     </button>  
                              </div>

                    </div>
          )
}

export default HelloSuperStarDemo;

