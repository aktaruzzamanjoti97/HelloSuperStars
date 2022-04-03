import React from "react";
import "../../../CSS/Packages/BuyPackages.css";
import bKashLogo from "../../../../images/Payment-img/BKash-bKash-Logo.wine.png";
import payoneerLogo from "../../../../images/Payment-img/Payoneer-Logo.wine.png";
import payPalLogo from "../../../../images/Payment-img/PayPal-Logo.wine.png";
import visaLogo from '../../../../images/Payment-img/Visa_Inc._logo.svg.png';
import applePayLogo from '../../../../images/Payment-img/Apple_Pay_logo.png';
import { Link } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const Payment = () => {
  return (
    <>
      <div class="accordion payment-container " id="accordionPanelsStayOpenExample">
        <div class="accordion-item left-bottom-ap payment-bot">

          <h2 class="accordion-header " id="panelsStayOpen-headingThree">
            <button class="accordion-button collapsed Payment" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree" disabled>
            </button>
          </h2>

          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body ">
              <div className="BuyPackages">
                <div className="container max-auto">
                  <div className="row max-auto">
                    <div className="buy-packages-header">
                      <p className="text-center col-md-12 ">Payment Method</p>
                    </div>

                    <form >
                      <OwlCarousel className="owl-theme pay-carousel-xa fowl-carousel" loop margin={0} nav>
                        <div className="item">
                          <img
                            src={applePayLogo}
                            alt=""
                            className="img-fluid payment-img-xa"
                          />
                        </div>
                        <div className="item">
                          <img
                            src={bKashLogo}
                            alt=""
                            className="img-fluid payment-img-xa"
                          />
                        </div>
                        <div className="item">
                          <img
                            src={payoneerLogo}
                            alt=""
                            className="img-fluid payment-img-xa"

                          />
                        </div>
                        <div className="item">
                          <img
                            src={payPalLogo}
                            alt=""
                            className="img-fluid payment-img-xa"
                          />
                        </div>
                        <div className="item">
                          <img
                            src={visaLogo}
                            alt=""
                            className="img-fluid payment-img-xa"
                          />
                        </div>
                      </OwlCarousel>



                      <div class="row col-md-4">
                        <div class="col">
                          <label className="pak-s" For="colFormLabelSm">
                            Cardholder name
                          </label>
                          <input type="text" class="form-control pak-style" />
                        </div>
                      </div>

                      <div class="row col-md-8">
                        <div class="col">
                          <label className="pak-s" For="colFormLabelSm">
                            Cardholder number
                          </label>
                          <input type="text" class="form-control pak-style" />
                        </div>
                        <div class="col-md-3">
                          <label className="pak-s" For="colFormLabelSm">
                            Date
                          </label>
                          <input type="date" class="form-control pak-style" />
                        </div>
                        <div class="col-md-3">
                          <label className="pak-s" For="colFormLabelSm">
                            CCV
                          </label>
                          <input type="text" class="form-control pak-style" />
                        </div>
                      </div>

                      <div className=" Payment-Con mt-4">
                        <Link to="/" className="btn btn-outline-warning  px-4 btn-pak">
                          Confirm payment
                        </Link>
                      </div>

                    </form>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
