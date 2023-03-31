import React from "react";
import Product from '../ui/Product'

function Prodcuts() {
  return (
    <>
      <main>
        <div className="container products-container">
          <div className="products--bar">
            <h2 className="products-title">Products</h2>
            <div className="products--func">
              <div className="products__filter">
                <select className="products__filter-sort" name="filter">
                  <option value="All">type ,All</option>
                  <option value="Courses">type ,Courses</option>
                  <option value="Indicators">type ,Indicators</option>
                </select>
              </div>
              <div className="products__sort">
                <select className="products__filter-sort" name="sort">
                  <option value="sort" disabled selected>
                    sort
                  </option>
                  <option value="low-to-high">Price ,Low To High</option>
                  <option value="high-to-low">Price ,High To Low</option>
                </select>
              </div>
            </div>
          </div>
          <div className="products">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />

          </div>
        </div>
      </main>
    </>
  );
}

export default Prodcuts;
