import React from "react";
import "../../../CSS/Packages/BuyPackages.css";
import Bkash from "../../../../images/Payment-img/BKash-bKash-Logo.wine.png";
import Payoneer from "../../../../images/Payment-img/Payoneer-Logo.wine.png";
import PayPal from "../../../../images/Payment-img/PayPal-Logo.wine.png";
import { Link } from "react-router-dom";

export const Payment = () => {
  return (
    <>
      <div class="accordion payment-container "  id="accordionPanelsStayOpenExample">
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
            <div class="accordion-body">
              <div className="BuyPackages">
                <div className="container max-auto">
                  <div className="row max-auto">
                    <div className="buy-packages-header">
                      <p className="text-center col-md-12">Payment Method</p>
                    </div>

                    <form>
                      <div className="row payment-pak payment-scroll col-md-12 ">
                        <ul className="car-pak col-ms-12">
                          <li className="car-pak-li"> <img src={Bkash} alt="Bkash" /> </li>
                          <li className="car-pak-li"> <img src={Payoneer} alt="Payoneer" /> </li>
                          <li className="car-pak-li"> <img src={PayPal} alt="PayPal" /> </li>
                          <li className="car-pak-li"> <img src={Bkash} alt="bkash" /> </li>
                          <li className="car-pak-li"> <img src={PayPal} alt="PayPal" /> </li>
                          <li className="car-pak-li"> <img src={Payoneer} alt="Payoneer" /> </li>
                          <li className="car-pak-li"> <img src={PayPal} alt="PayPal" /> </li>
                        </ul>
                      </div>

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
                        <Link to="/"  className="btn btn-outline-warning  px-4 btn-pak">
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
