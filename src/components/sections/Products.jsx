import React, { useState } from "react";
import NewProductsCard from "../parts/NewProducts";
import PopularProductsCard from "../parts/PopularProductsCard";
import EditProductsCard from "../parts/EditProducts";

//  $$ Style $$ \\
import "../../assets/styles/sections/products.scss";

const Products = () => {
  const [openNew, setOpenNew] = useState(true);
  const [openPopular, setOpenPopular] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const newProduct = () => {
    console.log("i am working new");

    setOpenNew(true);
    setOpenPopular(false);
    setOpenEdit(false);
  };
  const popular = () => {
    console.log("i am working Popular");

    setOpenNew(false);
    setOpenPopular(true);
    setOpenEdit(false);
  };
  const edit = () => {
    setOpenNew(false);
    setOpenPopular(false);
    setOpenEdit(true);
  };

  return (
    <section className="products">
      <div className="containers">
        <div className="products_items mt-14">
          <div className="products_items_productsSortButton flex gap-12 ml-12">
            <button
              onClick={newProduct}
              className={` px-3 py-2 ${openNew ? "active" : ""}`}
            >
              Новинки
            </button>
            <button
              onClick={popular}
              className={` px-3 py-2 ${openPopular ? "active" : ""}`}
            >
              Популярние
            </button>
            <button
              onClick={edit}
              className={` px-3 py-2 ${openEdit ? "active" : ""}`}
            >
              Редактировать
            </button>
          </div>
          <div className="hrLine mt-3"></div>

          <div className="cards_box mt-8">
            {openNew && <NewProductsCard />}
            {openPopular && <PopularProductsCard />}
            {openEdit && <EditProductsCard />}
          </div>

          <div className="hrLine mt-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Products;
