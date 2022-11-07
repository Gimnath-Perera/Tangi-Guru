import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";

export default function Header(props) {
  const navigate = useHistory();
  const goBack = () => {
    navigate.push("/");
  };
  return (
    <div>
      <div
        className="point-counter"
        key={props.randomKeyforPoints}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 50px",
        }}
      >
        <div style={{ cursor: "pointer" }} onClick={goBack}>
          <img
            src="https://i.ibb.co/chMfPHj/back-arrow.png"
            alt="Back Arrow"
            width="50"
            height="50"
          />
        </div>

        <p className="animated points">Points : {props.points}</p>
      </div>
      <div className="travel-image-container" key={props.randomKeyForImage}>
        {" "}
        <img
          alt=""
          className="animated travel-image"
          src={props.pickedWordUrl}
        ></img>
      </div>
    </div>
  );
}
