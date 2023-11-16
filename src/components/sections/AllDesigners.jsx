import React from "react";
import { Link } from "react-router-dom";
import DesignerCard from "../cards/DesignerCard";

//  $$ Styles $$ \\
import "../../assets/styles/sections/allDesigners.scss";
//  $$ Data $$ \\
import designers_data from "../../assets/data/designers.json";

const AllDesigners = () => {
  //   const data = designers_data.slice(0, 4);
  return (
    <div>
      <div className="containers">
        <div className="designer_items_title flex justify-between mt-5 mb-14">
          <div className="title">
            <h3>Популярные дизайнеры</h3>
          </div>
        </div>
        <div className="designer_items_cardBox flex justify-between flex-wrap mb-[75px]">
          {designers_data.map((data, index) => (
            <DesignerCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDesigners;
