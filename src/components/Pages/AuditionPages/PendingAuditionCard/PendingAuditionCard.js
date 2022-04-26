import React from "react";
import Spinner from "react-bootstrap/Spinner";
const PendingAuditionCard = () => {
  return (
    <div>
      <div className="card bg-dark">
        <div className="card-body d-flex justify-content-center align-items-center">
          <div className="p-5">
            <Spinner
              animation="border"
              variant="warning"
              style={{ height: "90px", width: "90px" }}
            />
            <h2 className="text-warning fw-bold text-center ">Pending</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingAuditionCard;
