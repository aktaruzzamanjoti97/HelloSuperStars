import React from "react";
import ReactPlayer from "react-player";
import ends from "../../../../images/Audition-images/ends.png";
import flag from "../../../../images/Audition-images/flag.png";
import auditionDescriptionIcon from "../../../../images/Audition-images/Group1177.png";
import youtube from "../../../../images/Audition-images/Group1178.png";
import "./AuditionDescription.css";

const AuditionDescription = () => {
  return (
    <div className="auditionDes">
      <div className="p-3">
        <p className="titleInstruction">Audition Instruction</p>
      </div>
      <div className="bottomLineGold"></div>
      <div className="p-3">
        <h2 className="fw-bold text-center audiHeadTitle mb-3">
          Guitar Audition Description
        </h2>
        <p className="text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab atque
          aperiam incidunt voluptate porro odit voluptas earum repellat eius
          eaque voluptatum asperiores ex nihil perspiciatis quis esse recusandae
          ratione aliquid ullam laudantium, eveniet et perferendis ipsa?
          Provident perspiciatis omnis rem!
        </p>
      </div>
      <div className="bottomLineGold"></div>

      <div className="p-3">
        <h2 className="fw-bold text-center audiHeadTitle my-3">
          Guitar Audition Instructions
        </h2>

        <div className="d-flex px-2 my-1">
          <img height="35px" src={auditionDescriptionIcon} alt="" />
          <p className="text-muted mx-2 descriptionPara">
            Your updated video must be upto 480P
          </p>
        </div>
        <div className="d-flex px-2 my-1">
          <img height="35px" src={auditionDescriptionIcon} alt="" />
          <p className="text-muted mx-2 descriptionPara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            esse est reiciendis accusamus voluptas temporibus libero natus
            itaque aut quod?
          </p>
        </div>
        <div className="d-flex px-2 my-1">
          <img height="35px" src={auditionDescriptionIcon} alt="" />
          <p className="text-muted mx-2 descriptionPara">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            sit itaque quibusdam doloribus in quaerat.
          </p>
        </div>
        <div className="d-flex px-2 my-1">
          <img height="35px" src={auditionDescriptionIcon} alt="" />
          <p className="text-muted mx-2 descriptionPara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            tempora.
          </p>
        </div>
        <div className="d-flex px-2 my-1">
          <img height="35px" src={auditionDescriptionIcon} alt="" />
          <p className="text-muted mx-2 descriptionPara">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident?
          </p>
        </div>
        <div className="d-flex px-2 my-1">
          <img height="35px" src={auditionDescriptionIcon} alt="" />
          <p className="text-muted mx-2 descriptionPara">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="bottomLineGold"></div>

      <div className="p-3 d-flex justify-content-center">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Z3gJKyGwP0Y"
          className="img-fluid"
          playing={false}
          volume={1}
        />
      </div>

      <div className="d-flex justify-content-between mediaQueryDiv p-3">
        <div className="startDiv d-flex p-2 my-2">
          <img height="40px" src={flag} alt="" />
          <div className="px-2">
            <span className="text-light">Starts</span>
            <h3 className="text-light fw-bold">2 April 2022</h3>
          </div>
        </div>
        <div className="endDiv d-flex p-2 my-2">
          <img height="40px" src={ends} alt="" />
          <div className="px-2">
            <span className="text-light">Ends</span>
            <h3 className="text-light fw-bold">16 April 2022</h3>
          </div>
        </div>
        <div className="startDiv d-flex p-2 my-2">
          <img height="40px" src={youtube} alt="" />
          <div className="px-2">
            <span className="text-light">User upload slot</span>
            <h3 className="text-light fw-bold">4 Video</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditionDescription;
