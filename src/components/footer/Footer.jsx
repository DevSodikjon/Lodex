import React from "react";
import { Link } from "react-router-dom";

//  $$ Styles $$ \\
import "../../assets/styles/footer/footer.scss";

//  $$ Icons $$ \\
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const footer = () => {
  return (
    <div>
      <footer>
        <div className="hrline mt-3"></div>
        <div className="containers">
          <div className="footer_items flex justify-between mt-8">
            <div className="navbar flex gap-16">
              <div className="div flex gap-[120px]">
                <div className="catagory">
                  <ul>
                    <h4>Категории </h4>
                    <li>
                      <Link to={"/  "} className="catagory_link">
                        Мужское
                      </Link>
                    </li>
                    <li>
                      <Link to={"/women"} className="catagory_link">
                        Женское
                      </Link>
                    </li>
                    <li>
                      <Link to={"/childeren"} className="catagory_link">
                        Детское
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="catagory">
                  <ul>
                    <h4>О нас </h4>
                    <li>
                      <Link className="catagory_link">Контакты </Link>
                    </li>
                    <li>
                      <Link className="catagory_link">О компании </Link>
                    </li>
                    <li>
                      <Link className="catagory_link">
                        Правила пользования{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="catagory">
                <ul>
                  <h4>Мой аккаунт </h4>
                  <li>
                    <Link to={"/"} className="catagory_link">
                      Войти{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="catagory_link">Заказы</Link>
                  </li>
                  <li>
                    <Link className="catagory_link">Список желаний</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="contact">
              <p className="tel">+998 ( 99 ) 280 75 76</p>
              <div className=" mb-4">
                <Link className="email">example@gmail.com</Link>
              </div>
              <Link className="email">example@mail.ru</Link>

              <div className="social flex mt-4 mb-4 gap-5">
                <div className="insta">
                  <Link>
                    <FaInstagram className=" text-[32px] text-[#33CAFF] hover:text-[#33c9ffa5]" />
                  </Link>
                </div>
                <div className="facebook">
                  <Link>
                    <FaFacebook className=" text-[32px] text-[#33CAFF] hover:text-[#33c9ffa5]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footer;
