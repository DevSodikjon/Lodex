import React from "react";

//  $$ Images $$ \\
import avatar from "../../assets/images/avatar.svg";
import stars from "../../assets/images/stars.svg";

//  $$ Style $$ \\
import "../../assets/styles/card/designerCard.scss";

const DesignerCard = (props) => {
  const newData = props.data;
  return (
    <div>
      <div className="cardDesigner mb-[75px]">
        <div className="card_items">
          <div className="card_items_avatar rounded-full">
            <img src={avatar} alt="avatar" />
          </div>

          <div className="card_items_name">
            <p className="text-center">{newData.name}</p>
          </div>

          <div className="card_items_stars flex justify-center">
            <img src={stars} alt="stars" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignerCard;
