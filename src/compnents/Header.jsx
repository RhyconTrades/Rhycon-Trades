import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header--content">
            <h1 className="header--content__title">
              Master the Art of <span className="purple">Investing:</span>
              <br /> <span className="purple">Professional</span> Tools for{" "}
              <span className="purple">Wealth</span> Building
            </h1>
            <p className="header--content__para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus temporibus explicabo optio repudiandae possimus dolorem repellat atque, soluta, ex ratione officiis et! Quibusdam, numquam accusamus. Laudantium voluptate ratione et exercitationem doloremque eveniet debitis, autem quod quam, libero illum ut.
            </p>
            <div className="header--btns">
              <Link to='/products'>
                <button>
                  Check Products
                </button>
              </Link>
            </div>
            <figure className="header--img">
                <img src="https://cdn.discordapp.com/attachments/1088531111942037534/1090683077010919494/image.png"/>
              </figure>
          </div>
        </div>
    </header>
  );
}

export default Header;
