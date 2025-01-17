import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function Header({products}) {

  const [checked , setChecked] = useState(1)
  let product = null

  if(products !== null){
    if(checked === 1){
      product = products.find((item) => item.nameInUrl === 'RhyconCyclone')
    }else if(checked === 2){
      product = products.find((item) => item.nameInUrl === 'badge')
    }else if(checked === 3){
      product = products.find((item) => item.nameInUrl === 'signals')
    }
  }

  return (
    <header>
      <div className="container">
        <div className="header--content">
            <h1 className="header--content__title">
              Master the Art of <span className="purple">Investing:</span>
              <br /> <span className="purple">Professional</span> Tools for{" "}
              <span className="purple">Wealth</span> Building
            </h1>
            <div className="buy-container">
        <div className="buy--content">
          <div className="buy__table">
            <div className="buy__table--bar">
              <button onClick={() => setChecked(1)} className={`table--bar__btn ${checked != 1 && "low-lighted"}`}>Indicator</button>
              <button onClick={() => setChecked(2)} className={`table--bar__btn ${checked != 2 && "low-lighted"}`}>Blue badge</button>
              <button onClick={() => setChecked(3)} className={`table--bar__btn ${checked != 3 && "low-lighted"}`}>Signals</button>
            </div>
            <div className="buy__table--content">
            {
              product !== null && product.description
            }
            </div>
          </div>
          <Link className="buy__link" to="/products">
            <button className="buy__btn">buy now</button>
          </Link>
        </div>
        <div className="buy--img">
          <img src="https://cdn.discordapp.com/attachments/1088531111942037534/1093574216592408676/IMG_1457_1.png" />
        </div>
      </div>
          </div>
        </div>
    </header>
  );
}

export default Header;
