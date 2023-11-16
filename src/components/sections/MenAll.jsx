import React from "react";
import NewProducts from "../parts/NewProducts";
import ProductsCard from "../cards/ProductsCard";
import product_data from "../../assets/data/products.json";

//  $$ Style $$ \\
import "../../assets/styles/sections/menAll.scss";

const MenAll = () => {
  return (
    <div>
      <div className="containers">
        <div className="newProduct_items_title  my-[60px]">
          <div className="text">
            <p>Последние поступления</p>
          </div>
          <div className="title mt-5">
            <div className="sort flex justify-between">
              <h3>Новые рисунки </h3>
              <span className="flex items-center gap-5">
                <p>Сортировать:</p>
                <select className=" rounded-2xl" name="prices" id="prices">
                  <option value="price" selected>
                    Цена повозрастанию
                  </option>
                  <option value="cheap">дешево</option>
                  <option value="expensive">дорогой</option>
                </select>
              </span>
            </div>
          </div>
        </div>
        <div className="card_box flex flex-wrap justify-around">
          {product_data.map((data, index) => (
            <ProductsCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenAll;
