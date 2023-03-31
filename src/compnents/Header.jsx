import React from "react";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header--content">
            <h1>
              Mastering the Art of <span className="purple">Investing:</span>
              <br /> <span className="purple">Professional</span> Tools for{" "}
              <span className="purple">Wealth</span> Building
            </h1>
            <div className="header--btns">
              <button>Indicators</button>
              <button className="lowlighted-btn">Courses</button>
            </div>
            <figure className="header--img">
              <img
                className="header--img__item"
                src="https://cdn.discordapp.com/attachments/1088531111942037534/1090683077010919494/image.png"
              />
            </figure>
          </div>
        </div>
    </header>
  );
}

export default Header;
