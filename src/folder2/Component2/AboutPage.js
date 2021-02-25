import React from "react";
import "./aboutPage.css";
import photo1 from "./img/photo1.jpg";
import photo2 from "./img/photo2.jpg";
import photo3 from "./img/photo3.jpg";
import photo4 from "./img/photo4.jpg";
import photo5 from "./img/photo5.jpg";
import photo6 from "./img/photo6.png";

export default function AboutPage() {
  return (
    <div className="aboutContent">
      {/* <div className="hearderBlock">
        <h1>About Page</h1>
      </div> */}
      <div className="contentBlock">
        <div className="resHis">
          <div className="imgRes">
            <img src={photo1} alt="" />
            <img src={photo2} alt="" />
            <img src={photo3} alt="" />
            <img src={photo4} alt="" />
            <img src={photo5} alt="" />
            <img src={photo6} alt="" />
          </div>
          {/* <div className="iconRes">
            <span>
              <i class="fab fa-facebook-square"></i>
            </span>
            <span>
              <i class="fab fa-instagram-square"></i>
            </span>
            <span>
              <i class="fab fa-youtube-square"></i>
            </span>
            <span>
              <i class="fab fa-telegram"></i>
            </span>
          </div> */}
          <div className="textRes">
            <h6>
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              Samarkand, Bulvar
            </h6>
            <h6>
              <span>
                <i className="fas fa-phone-alt"></i>
              </span>
              Phone (+998 00) 000 00 00
            </h6>
          </div>
        </div>
        <div className="conBlock">
          <div className="userHistory">
            <div className="chefPhoto" id="user1"></div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              exercitationem inventore quaerat consequatur temporibus.
            </p>
          </div>
          <div className="userHistory">
            <div className="chefPhoto" id="user2"></div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              exercitationem inventore quaerat consequatur temporibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
