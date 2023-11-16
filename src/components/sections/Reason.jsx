import React from "react";

//  $$ Style $$ \\
import "../../assets/styles/sections/reason.scss";

//  $$ Icons $$ \\
import { TbShoppingBag } from "react-icons/tb";

//  $$ Images $$ \\
import check from "../../assets/images/check.svg";
import choose from "../../assets/images/choose.svg";
import dollor from "../../assets/images/dollor.svg";

const Reason = () => {
  return (
    <div className="reason">
      <div className="containers">
        <div className="reason_items">
          <div className="reason_items_title mt-5 mb-10">
            <h3>Почему вибирают именно нас ?</h3>
          </div>

          <div className="reason_items_cardBox flex justify-between">
            <div className="card">
              <div className="card_items">
                <div className="card_items_image w-[150px] h-[150px] rounded-full">
                  <TbShoppingBag className="shoppingIcon" />
                </div>

                <div className="card_items_text">
                  <h4 className=" my-4">Маркетплейс</h4>
                  <p>
                    Компания Lode X - позволяет людям редактировать свою одежду.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card_items">
                <div className="card_items_image w-[150px] h-[150px] rounded-full">
                  <img src={check} alt="orginal" />
                </div>

                <div className="card_items_text">
                  <h4 className=" my-4">Оригинал </h4>
                  <p>Мы следим за оригинальностью продаваемых вещей</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card_items">
                <div className="card_items_image w-[150px] h-[150px] rounded-full">
                  <img src={choose} alt="choose" />
                </div>

                <div className="card_items_text">
                  <h4 className=" my-4">Подбор</h4>
                  <p>Удобный подбор одежды по всем параметрам</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card_items">
                <div className="card_items_image w-[150px] h-[150px] rounded-full">
                  <img src={dollor} alt="dollor" />
                </div>

                <div className="card_items_text">
                  <h4 className=" my-4">Безопасная сделка</h4>
                  <p>Безопасность платежей для покупателей и продавцов</p>
                </div>
              </div>
            </div>
          </div>

     
        </div>
      </div>
    </div>
  );
};

export default Reason;
