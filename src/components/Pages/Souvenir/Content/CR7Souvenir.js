import React, { useEffect, useState, useContext } from "react";
import "./CR7Souvenir.css";
import UserPro from "../../../../images/Shakib/pro.jpg";
import BGImg from "../../../../images/Souvenir/fundo-floral-preto-png-2.png";
import Bid from "../../../../images/Souvenir/Icons/bid.png";
import Confirm from "../../../../images/Souvenir/Icons/auction.png";
import BiddingHistory from "../Content/RightSideSouvenir/BiddingHistory/BiddingHistory";
import RemainingTimeSouvenir from "../Content/RightSideSouvenir/RemainingTimeSouvenir/RemainingTimeSouvenir";
import SuperstarCard from "../Content/RightSideSouvenir/SuperstarCard/SuperstarCard";
import CR7Modal from "./CR7Modal";
import { Markup } from "interweave";
import axios from "axios";
import ReactImageMagnify from "react-image-magnify";
import { socketContext } from "../../../../App";

const CR7Souvenir = ({ data }) => {
  const socketData = useContext(socketContext);


  const [modalShow, setModalShow] = React.useState(false);
  const [priceAlert, setPriceAlert] = React.useState(false);
  const [passwordAlert, setPasswordAlert] = React.useState(false);
  const [liveBidding, setLiveBidding] = useState();
  const [bidHistory, setBidHistory] = useState([]);

  const bidingHistory = () => {
    axios.get(`/api/user/liveBidding/history/${data.id}`).then((res) => {
      if (res.data.status === 200) {
        setBidHistory(res.data.bidHistory);
        console.log("bid History", res.data.bidHistory);
      }
    });
  };

  useEffect(() => {
    socketData.emit("joinBiddingRoom", {room: data.id});
    socketData.emit("sendLiveBidding", data.id);
    socketData.on("getLiveBidding", (data) => {
      console.log("data from socket", data);
      setLiveBidding(data);
    });
    bidingHistory();
  }, []);

  const [auctionInput, setAuctionInput] = useState({
    auction_id: data.id,
    amount: "",
    password: "",
    error_list: [],
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setAuctionInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const auctionSubmit = (e) => {
    e.preventDefault();

    if (auctionInput.amount > data.base_price) {
      const fdata = {
        auction_id: auctionInput.auction_id,
        amount: auctionInput.amount,
        password: auctionInput.password,
      };

      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios.post(`/api/user/bidding/auction/product`, fdata).then((res) => {
          if (res.data.status === 200) {
            socketData.emit("joinBiddingRoom", {room: data.id});
            socketData.emit("sendLiveBidding", data.id);
            socketData.on("getLiveBidding", (sdata) => {
              console.log("data from socket", sdata);
              setLiveBidding(sdata);
            });
            setPriceAlert(false);
            setPasswordAlert(false);
            bidingHistory();
            console.log("200 alert", res.data);
          }
          if (res.data.status === 201) {
            setPasswordAlert(true);
          }
        });
      });
    } else {
      setPriceAlert(true);
    }
  };

  return (
    <>
      <div className="col-md-7">
        <h3 className="fw-bolder text-white mt-4">{data.name}</h3>

        <p className="text-white PText">
          <Markup content={data.details} /> <span>See more</span>
        </p>

        <h4 className="text-warning">
          Base Price: <small>{data.base_price.toLocaleString('en-US')}</small> BDT
        </h4>

        <div className="ReactCr7 bg-dark p-4 mb-3 ">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Image Not Found",
                isFluidWidth: true,
                src: `http://localhost:8000/${data.product_image}`,
              },
              largeImage: {
                src: `http://localhost:8000/${data.product_image}`,
                width: 1800,
                height: 1800,
              },
            }}
          />
        </div>

        <div className="bg-dark mb-3 ">
          <div className="row mx-3 CR7Scroll ">
            <p className="text-light mt-3 fw-bold">Live Bidding</p>

            {liveBidding?.map((bid) => (
              <>
                <div className="containerSa col-md-4 mb-3">
                  <div className="carousel w-100 ">
                    <img src={BGImg} className="Cr7img" alt={BGImg} />
                    <img
                      src={`http://localhost:8000/${bid.image}`}
                      alt={UserPro}
                      className="Cr7Pro "
                    />
                    <div className="Cr7View"></div>
                    <h1 className="btn Cr7s py-1 text-warning fw-bold">
                      {bid.amount.toLocaleString('en-US')}
                    </h1>
                    <h5 className="btn Cr7ss py-1 text-light ">
                      {bid.first_name} {bid.last_name}
                    </h5>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <form onSubmit={auctionSubmit}>
          <div className="bg-dark mb-3">
            <div className="row mx-3 justify-content-between ">
              <p className="text-light mt-3 fw-bold">Bid Now</p>

              <div className=" col-md-6 mb-3 ">
                <div>
                  <input
                    type="text"
                    onChange={handleInput}
                    value={auctionInput.amount}
                    name="amount"
                    className="p-3 mb-3 w-100 inputBgSA"
                    placeholder="$ Enter amount"
                  />
                </div>

                <div>
                  {passwordAlert ? (
                    <span className="text-warning">Password is Invalid!</span>
                  ) : (
                    ""
                  )}

                  <input
                    type="password"
                    onChange={handleInput}
                    value={auctionInput.password}
                    name="password"
                    className="p-3 mb-3 w-100 inputBgSA"
                    placeholder="Enter Password"
                  />
                </div>
              </div>

              <div className=" col-md-4 mb-3 ">
                {priceAlert ? (
                  <div className="d-flex justify-content-end">
                    <button className="btn Acquire fw-bold px-4 py-2 mb-3">
                      <i class="fas fa-id-card-alt"> </i> &nbsp; Minimum Bidding
                      Price {data.base_price} BDT
                    </button>
                  </div>
                ) : (
                  ""
                )}

                <img src={Bid} alt={Bid} className="img-fluid BibImg" />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <button
              type="submit"
              className="btn ConfirmS fw-bold px-4 py-2 mb-3"
            >
              {" "}
              <img src={Confirm} className="ConfirmCR7" alt={Confirm} />{" "}
              &nbsp;Bid Now
            </button>
          </div>
        </form>
        <div className="d-flex justify-content-end">
          <button
            className="btn Acquire fw-bold px-4 py-2 mb-3"
            onClick={() => setModalShow(true)}
          >
            <i class="fas fa-id-card-alt"> </i> &nbsp;Acquire application
          </button>

          <CR7Modal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>

      <div className="col-md-4">
        <RemainingTimeSouvenir AuctionData={data} />
        <SuperstarCard AuctionData={data} />
        <BiddingHistory AuctionData={bidHistory} />
      </div>
    </>
  );
};

export default CR7Souvenir;
