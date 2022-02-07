
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import axios from "axios";
import moment from 'moment';
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import ReactPlayer from 'react-player';
import swal from "sweetalert";
import StarProfileRightContent from "../../StarCardComponent/StarProfileRightContent/StarProfileRightContent";
import "./Greeting.css";
import { Markup } from 'interweave';


const Greeting = ({ star_id }) => {
  // const [check, setcheck] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [greeting, setGreeting] = useState(null);

  const [GreetingInfo, setGreetingInfo] = useState({});

  const [status, setStatus] = useState({
    action: true,
    msg : ''
  });


  useEffect(() => {
  
    // setcheck(true)

    GreetingsRegStatus()
    
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios.get('/api/user/greetings_star_status/'+star_id).then((res) => {
          if (res.data.status === 200) {
        

              setGreetingInfo(res.data.greeting);
          } else {
            swal("error", "Data base Error", "error");
          }
        });
      });
      


  }, []);
  
  let GreetingsRegStatus = () => {

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.get("/api/user/greetings_registaion_status").then((res) => {
        if (res.data.status === 200) {
     
          setGreeting(res.data.greeting);
          // setcheck(res.data.action)


        

          if (res.data.greeting.status == 0) {
            setStatus({
             ...status,
              msg: 'Pending'
            })
            // setcheck(true)
          } else {
            setStatus({
              ...status,
              msg: 'Appreoved'
            })
       
          }
    
        } else {
          swal("error", "Data base Error", "error");

        }
      });
      });
  }


  function handelTimeSubmit(e) {
    // setcheck(true)
    e.preventDefault();

    let Form_data = new FormData(e.target)
    Form_data.append('time', moment(startTime));
    Form_data.append('greetings_id', GreetingInfo.id);

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`api/user/greetings_registaion`, Form_data).then((res) => {
        if (res.data.status === 200) {
        
          setGreeting(res.data.greeting);
          // setcheck(true)

          //document.getElementById('input_form').reset();
          swal("Success", res.data.message, "success");

          if (res.data.greeting.status == 0) {
            setStatus({
              ...status,
              msg: 'Pending'
            })
          }
      


        } else {
          swal("error", "hello", "error");

        }
      });
    });


  }

  /**
   * delete register grettings 
   */
  let handelGreetingsRegDelete = () => {
    swal({
      title: "Are you sure?",
      text: "You Want to Delete your Greetings",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
          axios.get("/sanctum/csrf-cookie").then((response) => {
          axios.get("api/user/greetings_reg_delete/"+greeting.id).then((res) => {
            if (res.data.status === 200) {
            GreetingsRegStatus()
            swal("Your Greetings is Delete", {
              icon: "success",
            });

            } else {
              swal("error", "hello", "error");

            }
          });
        });
      
      } else {
        // swal("Your Greetings is safe!");
      }
    });
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-3">
            <div class="card live-card-bg my-4 mx-auto">
              <div class="card-body">
                <div className="d-flex justify-content-between">
                  <h5 class="card-title text-warning">Greeting request</h5>
                  <p className="btn-warning btn-sm">Demo video</p>
                </div>
                <div className="star-line"></div>


                <div className="container-fluid my-2">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=3CaBNtaTrbo"
                    playing={false}
                    volume={1}
                    width="100%"
                    height="320px"
                    style={{ margin: "0 auto" }}
                    onReady={() => console.log("ready now")}
                  />
                </div>


              </div>
            </div>
            {GreetingInfo ?
       
            <div className="text-warning">
              <div class="card live-card-bg my-4 mx-auto">
                <div class="card-body">
                  <h5 class="card-title text-warning">Instructions</h5>
                  <div className="star-line"></div>
                  <div className="instruct">
                      <Markup content={GreetingInfo.description}/>
                  </div>
                </div>
              </div>
            </div>
          :""}

          {GreetingInfo ?
       
            <div class="card live-card-bg my-4 mx-auto">
              <div class="card-body">
                <h5 class="card-title text-warning">Cost</h5>
                <div className="star-line"></div>
                <div className="instruct">
                    <h5 className='my-2 text-light'>{GreetingInfo.cost} BDT</h5>
                </div>
              </div>
            </div>

          :""}

            <div class="card live-card-bg my-4 mx-auto">
              <div class="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title text-warning">Apply</h5>
                  {greeting ? 
                  
                
                  <div className="dropdown me-2 buttonBorderNone">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fas fa-info text-warning mx-2"></i>
                    </button>
                    <div className="dropdown-menu upperSideNotification" aria-labelledby="dropdownMenuButton1">
                      <div className="p-2">
                        <h4 className="text-white fw-bold ms-3  my-2">Greeting Pending</h4>
                        <ul className="d-flex my-3">
                          <div className="">
                            <li>Applied on</li>
                            <li>Target date</li>
                            <li>Status</li>
                          </div>
                          <div className="ms-5">
                            <li>{moment(greeting.created_at).format('LL')}</li>
                            <li>{moment(greeting.request_time).format('LL')}</li>
                            <li>
                                 {status.msg} 
                            </li>
                          </div>
                          </ul>
           
                          {status.action ?
                            
                          <div className="d-flex justify-content-between mt-4 mb-3">
                            <button className="btn btn-warning ms-4" onClick={handelGreetingsRegDelete}>
                              <i className="fas fa-redo-alt"></i> Retry
                            </button>
                            <button className="btn btn-warning me-4" onClick={handelGreetingsRegDelete}>
                              <i class="fas fa-trash-alt"></i> Delete
                            </button>
                          </div>
                          :
                            ""}
                  
                        
                      </div>
                    </div>
                  </div>
                :
                    ""
                }

                </div>

                <div className="star-line"></div>
                <h5 className='my-3 text-light'>Greet receiving date and time</h5>

                <div className="row mt-3">
                  <Form onSubmit={handelTimeSubmit}>
                    <div className="col-6 p-3">


                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                          renderInput={(props) => <TextField {...props} />}
                          label="Start Time"
                          value={startTime}
                          onChange={(getStartTime) => {
                            setStartTime(getStartTime);
                          }}
                        />
                      </LocalizationProvider>
                    </div>
                    <div className="col-6 px-3">
                      {greeting ?

                        <button className='my-3 btn btn-success px-4 py-2' disabled>Applied <i class="fas fa-check-circle mx-1"></i></button>
                        :
                        <button className='my-3 btn btn-warning px-4 py-2' type="submit" >Apply Now!</button>
                      }

                    </div>
                  </Form>
                </div>


              </div>
            </div>
          </div>
          <div className="col-md-4  mt-3">
            <StarProfileRightContent star_id={star_id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Greeting;