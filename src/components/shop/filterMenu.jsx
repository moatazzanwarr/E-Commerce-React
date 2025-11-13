// Imports
import React from "react";

// Icons
import icons from "../../assets/icons";

function FilterMenu() {
  return (
    <div className="fillByPrice">
      <h1>Fill by price</h1>
      <div className="range">
        <input type="range" name="" id="" />
      </div>
      <div className="rangeValue">
        <p>
          from: <span>$500</span>
        </p>
        <p>
          to: <span>$1000</span>
        </p>
      </div>
      <div className="color">
        <h4>color</h4>
        <div>
          <input type="checkbox" name="" id="red" />
          <label htmlFor="red">Red(56)</label>
        </div>
        <div>
          <input type="checkbox" name="" id="green" />
          <label htmlFor="green">Green(78)</label>
        </div>
        <div>
          <input type="checkbox" name="" id="blue" />
          <label htmlFor="blue">Blue(54)</label>
        </div>
      </div>

      <div className="itemCondition">
        <h4>Item Condition</h4>
        <div>
          <input type="checkbox" name="" id="new" />
          <label htmlFor="new">New (1506)</label>
        </div>
        <div>
          <input type="checkbox" name="" id="refurbished" />
          <label htmlFor="refurbished">Refurbished (27)</label>
        </div>
        <div>
          <input type="checkbox" name="" id="used" />
          <label htmlFor="used">Used (45)</label>
        </div>
      </div>
      <button>
        <icons.FilterAltIcon className="i" /> Fillter
      </button>
    </div>
  );
}

export default FilterMenu;
