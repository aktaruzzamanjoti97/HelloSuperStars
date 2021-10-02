import React from "react";
import Packages from "../../../Pages/User/Packages/Packages";
import "../../../CSS/Packages/BuyPackages.css";

export const BuyPackages = () => {
  return (
    <>
      <Packages />

      <div className="BuyPackages">
        <div className="container max-auto">
          <div className="row max-auto">
            <div className="buy-packages-header">
              <p className="text-center col-md-12">Payment Method</p>
            </div>

            <form>
              <div class="row col-md-4">
                <div class="col">
                  <label className="pak-s" For="colFormLabelSm">Cardholder name</label>
                  <input type="text" class="form-control pak-style" />
                </div>
              </div>

              <div class="row col-md-8">
                <div class="col">
                  <label className="pak-s" For="colFormLabelSm">Cardholder number</label>
                  <input type="text" class="form-control pak-style" />
                </div>
                <div class="col-md-3">
                  <label className="pak-s" For="colFormLabelSm">Date</label>
                  <input type="date" class="form-control pak-style" />
                </div>
                <div class="col-md-3">
                  <label className="pak-s" For="colFormLabelSm">CCV</label>
                  <input type="text" class="form-control pak-style" />
                </div>
              </div>

              <div className=" mt-4">
              <button to='/' className='btn btn-outline-warning  px-4 mx-2 btn-pak'>Confirm Password</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
