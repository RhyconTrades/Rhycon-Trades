import React, { useState } from "react";
import { Link } from "react-router-dom";

function Buy() {
  const [checked , setChecked] = useState(1)

  return (
    <section id="buy">
      <h1 className="buy-title">What are you waiting for ?</h1>
      <p className="buy__para">Don't let valuable opportunities slip away.</p>
      <div className="buy-container">
        <div className="buy--content">
          <div className="buy__table">
            <div className="buy__table--bar">
              <button onClick={() => setChecked(1)} className={`table--bar__btn ${checked != 1 && "low-lighted"}`}>Indicator</button>
              <button onClick={() => setChecked(2)} className={`table--bar__btn ${checked != 2 && "low-lighted"}`}>Indicator</button>
              <button onClick={() => setChecked(3)} className={`table--bar__btn ${checked != 3 && "low-lighted"}`}>Indicator</button>
            </div>
            <div className="buy__table--content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, accusantium. Ea fugit reiciendis magni laboriosam beatae vero. Numquam blanditiis delectus expedita architecto. Magnam facere dolor quas optio dolores obcaecati numquam?</div>
          </div>
          <Link className="buy__link" to="/products">
            <button className="buy__btn">buy now</button>
          </Link>
        </div>
        <div className="buy--img">
          <img src="https://cdn.discordapp.com/attachments/1088531111942037534/1093574216592408676/IMG_1457_1.png" />
        </div>
      </div>
    </section>
  );
}

export default Buy;
