import React from "react";
import "../product/item.css";

const Items = (props) => {
  function adding() {
    props.add(props.obj);
    console.log(props.obj);
  }

  return (
    <div className="c1">
       
      <h1>{props.obj.name}</h1>
      <button onClick={() => adding()}>Add to cart</button>
       
    </div>
  );
};

export default Items;