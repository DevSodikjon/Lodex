import React from "react";
import { Link } from "react-router-dom";
import DesignerCard from "../cards/DesignerCard";

//  $$ Styles $$ \\
import "../../assets/styles/sections/designer.scss";

//  $$ Data $$ \\
import designers_data from "../../assets/data/designers.json";

const Designer = () => {
  const data = designers_data.slice(0, 4);
  // console.log(data);
  return (
    <div className="designer">
      <div className="containers">
        <div className="designer_items">
          <div className="designer_items_title flex justify-between mt-5 mb-14">
            <div className="title">
              <h3>Популярные дизайнеры</h3>
            </div>

            <div className="designer_seeMore">
              <Link to={"/alldesigners"} className="seeMore">
                Все дизайнеры
              </Link>
            </div>
          </div>

          <div className="designer_items_cardBox flex justify-between mb-[75px]">
            {data.map((data, index) => (
              <DesignerCard key={data.id} data={data} />
            ))}
          </div>

          <div className="hrLine mt-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Designer;
