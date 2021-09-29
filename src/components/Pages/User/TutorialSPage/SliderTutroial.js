import { Card, Container } from "react-bootstrap";

import TutorialCarousel3 from "../../../../images/Tutorial-Graphic_Web-04.png";
import Carousel from "react-bootstrap/Carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import "../../../CSS/Tutorial-page/Tutorial.css";
export const SliderTutroial = () => {
  return (
    <>
      <div className="tbg-img">
        <section id="header" className="d-flex align-items-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                    <div className="mt-3"></div>
                  </div>

                  <div className="col-lg-12 order-2 order-lg-2 header-img">
                    <Container
                      className="d-flex align-items-center justify-content-center"
                      style={{ minHeight: "100vh" }}
                    >
                      <div className="w-100" style={{ maxWidth: "480px" }}>
                        <Card className="logIn-bg">
                          <Card.Body>
                            <Carousel>
                              <Carousel.Item>
                                <img
                                  className="d-block w-75"
                                  src={TutorialCarousel3}
                                  alt="First slide"
                                />
                              </Carousel.Item>
                              <Carousel.Item>
                                <img
                                  className="d-block w-75 "
                                  src={TutorialCarousel3}
                                  alt="Second slide"
                                />
                              </Carousel.Item>
                              <Carousel.Item>
                                <img
                                  className="d-block w-75 "
                                  src={TutorialCarousel3}
                                  alt="Third slide"
                                />
                              </Carousel.Item>
                            </Carousel>
                          </Card.Body>
                        </Card>
                      </div>
                    </Container>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
