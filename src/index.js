import React, { Component, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Items from "./product/items.js";
import Cart from "./product/Cart.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Index() {
  const [prod, one] = useState({
    a: [
      { id: 1, name: "Apachi", rate:"1,50,000", qty: 1 },
      { id: 2, name: "Rc", rate:"1,50,000", qty: 1 },
      { id: 3, name: "GT", rate:"1,50,000", qty: 1 },
    ],
    cart: [],
  });

  function adding(info) {
    var x = prod.cart;
    var y = info.id;
    console.log(x);
    var n = x.some((p) => p.id == y);
    console.log(y);
    if (n == false) {
      prod.cart.push(info);
      one({ ...prod, info });
      console.log(prod.cart);
    } else {
      info.qty += 1;
      one({ ...prod, info });
      console.log(prod.cart);
    }
  }

  function remove(prods) {
    var x = prod.cart;
    var y = prods.id;
    console.log(x);
    var n = x.some((p) => p.id == y);
    console.log(n);
    if (n == true) {
      let index = x.indexOf(prod);
      prods.qty = 1;
      console.log(index);

      x.splice(index, 1);
      one({ ...prod, prods });
      console.log(x);
    } else {
      console.log("not present");
    }
  }
  function qtyadd(data) {
    adding(data);
  }

  function minus(data) {
    if (data.qty == 1) {
      remove(data);
    } else {
      data.qty--;
      one({ ...prod });
    }
  }

  return (
    <div className="cont">
     <div className="cont1">
     {prod.a.map((data) => (
        <Items obj={data} key={data.id} add={adding} />
      ))}
     </div>
      <div className="cont2">
      {prod.cart.map((data) => (
        <Cart
          objs={data}
          key={data.id}
          push={remove}
          adds={qtyadd}
          minus={minus}
        />
      ))}
      </div>
    </div>
  );
}

export default Index;
root.render(<Index />);