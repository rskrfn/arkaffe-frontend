import React from "react";
import classes from "./ProductDescription.module.css";

function ProductDescription() {
  return (
    <>
      <main className={classes["productdesc-container"]}>
        <form className={classes["form-group"]}>
          <label className={classes["label"]}>Product Name :</label>
          <input
            className={classes["input"]}
            type="text"
            name="productname"
            placeHolder="Type product name min. 50 characters"
            // onChange={(e) => }
          />
          <label className={classes["label"]}>Category :</label>
          <select
            className={` ${classes["input"]} ${classes["category-picker"]}`}
          >
            <option>Coffee</option>
            <option>Non-Coffee</option>
            <option>Foods</option>
            <option>Add-On</option>
          </select>
          <label className={classes["label"]}>Price :</label>
          <input
            className={classes["input"]}
            type="number"
            name="productname"
            placeHolder="Type the price"
            // onChange={(e) => }
          />
          <label className={classes["label"]}>Description :</label>
          <textarea
            className={` ${classes["input"]} ${classes["text-area"]}`}
            type="text"
            name="productname"
            placeHolder="Describe your product min. 150 characters"
            // onChange={(e) => }
          />
          <label className={classes["label"]}>Input product size :</label>
          <label className={classes["sub-label"]}>
            Click size you want to use for this product
          </label>
          <div className={classes["product-size"]}>
            <div className={classes["drink-size"]}>
              <label className={`${classes["option"]}`}>
                <input type="checkbox" />
                <span className={classes["text-size"]}>R</span>
              </label>
              <label className={`${classes["option"]}`}>
                <input type="checkbox" />
                <span className={classes["text-size"]}>L</span>
              </label>
              <label className={`${classes["option"]}`}>
                <input type="checkbox" />
                <span className={classes["text-size"]}>XL</span>
              </label>
            </div>
            <div className={classes["food-size"]}>
              <label className={`${classes["option"]}`}>
                <input type="checkbox" />
                <span className={classes["text-size2"]}>250 gr</span>
              </label>
              <label className={`${classes["option"]}`}>
                <input type="checkbox" />
                <span className={classes["text-size2"]}>300 gr</span>
              </label>
              <label className={`${classes["option"]}`}>
                <input type="checkbox" />
                <span className={classes["text-size2"]}>500 gr</span>
              </label>
            </div>
          </div>
          <label className={classes["label"]}>Input delivery methods :</label>
          <label className={classes["sub-label"]}>
            Click methods you want to use for this product
          </label>
          <div className={classes["delivery-methods"]}>
            <label className={`${classes["option"]}`}>
              <input type="checkbox" />
              <span className={classes["text-methods"]}>Home Delivery</span>
            </label>
            <label className={`${classes["option"]}`}>
              <input type="checkbox" />
              <span className={classes["text-methods"]}>Dine in</span>
            </label>
            <label className={`${classes["option"]}`}>
              <input type="checkbox" />
              <span className={classes["text-methods"]}>Take away</span>
            </label>
          </div>
          <div className={classes["btn-group"]}>
              <button className={classes["btn-submit"]} type="submit">Save Product</button>
              <button className={classes["btn-cancel"]} type="">Cancel</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default ProductDescription;
