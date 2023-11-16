import React from "react";

import { Link } from "react-router-dom";

//  $$ Images $$ \\
import heroWomen from "../../assets/images/heroWomen.svg";
import heroChild from "../../assets/images/heroChild.svg";
import arrow_right from "../../assets/images/arrow-right.svg";
import line from "../../assets/images/line.svg";

//  $$ Styles $$ \\
import "../../assets/styles/sections/hero.scss";

const HeroChild = () => {
  return (
    <div>
      <section className="hero">
        <div className="containers">
          <div className="hero_items">
            <div className="hero_items_contentBox flex bg-[#EFF0F2]">
              <div className="hero_items_contentBox_images">
                <img src={heroChild} alt="hero" />
              </div>

              <div className="hero_items_contentBox_text">
                <h2>
                  Универсальное решение <br /> для ваших нужд в <br /> одежде
                </h2>
                <p>
                  Все, что вам нужно, чтобы найти идеальный предмет одежды, есть
                  в <br />
                  Lode X. Мы предлагаем одежду ведущих брендов и редактирование{" "}
                  <br />
                  изображений на ней.
                </p>

                <span className="flex items-center ">
                  <div className="link_box">
                    <Link className="link flex gap-1">
                      читать далее
                      <img src={arrow_right} alt="arrow_right" />
                    </Link>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroChild;
