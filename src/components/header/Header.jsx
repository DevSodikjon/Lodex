import React from "react";
import { Link } from "react-router-dom";
import Men from "../men/Men";

//  $$ Images $$ \\
import logo from "../../assets/images/logo.svg";
import like from "../../assets/images/like.svg";
import user from "../../assets/images/user.svg";

//  $$ Style $$ \\
import "../../assets/styles/header/header.scss";

//  $$ React Icon $$ \\
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <header>
        <div className="containers">
          <div className="header_items flex items-center gap-10">
            <div className="header_items_logo">
              <Link to={"/"}>
                <img src={logo} alt="logo" />
              </Link>
            </div>

            <div className=" gap-14 flex">
              <div className="header_items_navbar flex gap-10">
                <ul className="ul flex gap-12 mt-2">
                  <li>
                    <Link to={"/"} className="NavbarLink">
                      Мужское
                    </Link>
                  </li>
                  <li>
                    <Link to={"/women"} className="NavbarLink">
                      Женское
                    </Link>
                  </li>
                  <li>
                    <Link to={"/childeren"} className="NavbarLink">
                      Детские{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to={"/transaction"} className="NavbarLink">
                      Безопасная Сделка{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="NavbarLink">Правило Пользование </Link>
                  </li>
                </ul>

                <div className="header_items_navbar_content flex gap-10 mt-2">
                  <div className="liked_products">
                    <img src={like} alt="user" />
                  </div>
                  <div className="profile">
                    <img src={user} alt="user" />
                  </div>
                </div>
              </div>

              <div className="header_items_contact mt-2">
                <Link className="contactLink">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="form-control bg-black">
        <div className="containers">
          <form className="">
            <span className="flex items-center gap-24">
              <BsSearch className=" text-4xl text-white" />
              <input
                className="search w-full"
                type="text"
                placeholder="Поиск продукта, бренда или продавца... Поиск продукта, бренда или продавца... Поиск продукта, бренда или продавца... "
              />
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
