import React from "react";
import { Link } from "react-router-dom";
import ProductsCard from "../cards/ProductsCard";

//  $$ data $$ \\
import product_data from "../../assets/data/products.json";

//  $$ Styles $$ \\
import "../../assets/styles/parts/newProduct.scss";

const NewProducts = () => {
  const startIndex = 0;
  const endIndex = 6;
  const newData = product_data.slice(startIndex, endIndex);
  return (
    <div>
      <div className="newProduct">
        <div className="newProduct_items">
          <div className="newProduct_items_title mb-[60px]">
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

          <div className="newProduct_items_cardBox flex flex-wrap justify-around ">
            {newData.map((data, index) => (
              <ProductsCard key={data.id} data={data} />
            ))}
          </div>

          <div className="seeMoreNew">
            <Link to={"/menall"} className="newProduct_link">
              Показать Больше
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
