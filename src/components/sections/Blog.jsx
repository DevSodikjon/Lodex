import React from "react";

//  $$ Styles $$ \\
import "../../assets/styles/sections/blog.scss";

//  $$ Styles $$ \\
import blogimg1 from "../../assets/images/blogImg1.svg";

const Blog = () => {
  return (
    <div className="blog">
      <div className="containers">
        <div className="hrLine mt-3"></div>
        <div className="blog_items">
          <div className="blog_items_title">
            <h3>Блог</h3>
          </div>

          <div className="blog_items_card_box flex justify-between flex-wrap">
            <div className="blog_card">
              <div className="card_items flex items-center gap-[50px]">
                <div className="card_items_img">
                  <img className="" src={blogimg1} alt="blog" />
                </div>

                <div className="card_items_text">
                  <p>
                    Эта рубашка спасет <br /> Вы сэкономите 40$ при себе
                    Следующая онлайн-покупка
                  </p>
                </div>
              </div>
            </div>
            <div className="blog_card">
              <div className="card_items flex items-center gap-[50px]">
                <div className="card_items_img">
                  <img className="" src={blogimg1} alt="blog" />
                </div>

                <div className="card_items_text">
                  <p>
                    Эта рубашка спасет <br /> Вы сэкономите 40$ при себе
                    Следующая онлайн-покупка
                  </p>
                </div>
              </div>
            </div>
            <div className="blog_card">
              <div className="card_items flex items-center gap-[50px]">
                <div className="card_items_img">
                  <img src={blogimg1} alt="blog" />
                </div>

                <div className="card_items_text">
                  <p>
                    Эта рубашка спасет <br /> Вы сэкономите 40$ при себе
                    Следующая онлайн-покупка
                  </p>
                </div>
              </div>
            </div>
            <div className="blog_card">
              <div className="card_items flex items-center gap-[50px]">
                <div className="card_items_img">
                  <img src={blogimg1} alt="blog" />
                </div>

                <div className="card_items_text">
                  <p>
                    Эта рубашка спасет <br /> Вы сэкономите 40$ при себе
                    Следующая онлайн-покупка
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
