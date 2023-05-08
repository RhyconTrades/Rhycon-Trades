import React, { useState } from "react";

function Unlock() {

  const [checked , setChecked] = useState(1)

  function checkButton(value){
    setChecked(value)
  }
  return (
    <section id="unlock">
    <div className="unlock-container">
      <h1 className="section-title">
        Unlock&nbsp;<span className="purple">Advanced</span>&nbsp;Trading
        Tools
      </h1>
      <div className="unlock">
        <div className="unlock--img">
          <img src="https://cdn.discordapp.com/attachments/1088531111942037534/1093577201401725030/RhyconTrades_A_cartoon_vault_door_with_a_chain_around_it_and_be_3025485f-4910-4337-aea6-4d2c8fefef8d__1_-removebg-preview.png" />
        </div>
        <ul className="unlock--content">
            <li onClick={() => checkButton(1)} className={`unlock--content__item ${checked != 1 && "low-lighted-list"}`}>
                <button className="content--item__btn" />
                <p className="content--item__para">Gain access to knowledge from our expert analysts who will help you go from day one to being a master at trading</p>
            </li>
            <li onClick={() => checkButton(2)} className={`unlock--content__item ${checked != 2 && "low-lighted-list"}`}>
                <button className="content--item__btn" />
                <p className="content--item__para">Access the tools tools used by some of the best traders out there</p>
            </li>
            <li onClick={() => checkButton(3)}className={`unlock--content__item ${checked != 3 && "low-lighted-list"}`}>
                <button className="content--item__btn" />
                <p className="content--item__para">Join a growing comunity of traders, who are taking their future into their own hands</p>
            </li>
        </ul>
      </div>
    </div>
    </section>
  );
}

export default Unlock;
