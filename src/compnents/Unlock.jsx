import React, { useState } from "react";

function Unlock() {

  const [checked , setChecked] = useState(1)

  function checkButton(value){
    setChecked(value)
  }
  return (
    <div className="unlock-container">
      <h1 className="section-title">
        Unlock&nbsp;<span className="purple"> Advanced </span>&nbsp;Trading
        Tools
      </h1>
      <div className="unlock">
        <div className="unlock--img">
          <img src="https://cdn.discordapp.com/attachments/1088531111942037534/1093577201401725030/RhyconTrades_A_cartoon_vault_door_with_a_chain_around_it_and_be_3025485f-4910-4337-aea6-4d2c8fefef8d__1_-removebg-preview.png" />
        </div>
        <ul className="unlock--content">
            <li onClick={() => checkButton(1)} className={`unlock--content__item ${checked != 1 && "low-lighted-list"}`}>
                <button className="content--item__btn" />
                <p className="content--item__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, enim!</p>
            </li>
            <li onClick={() => checkButton(2)} className={`unlock--content__item ${checked != 2 && "low-lighted-list"}`}>
                <button className="content--item__btn" />
                <p className="content--item__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, enim!</p>
            </li>
            <li onClick={() => checkButton(3)}className={`unlock--content__item ${checked != 3 && "low-lighted-list"}`}>
                <button className="content--item__btn" />
                <p className="content--item__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, enim!</p>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Unlock;
