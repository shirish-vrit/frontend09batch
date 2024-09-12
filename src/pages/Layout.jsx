import React from "react";
import { Outlet } from "react-router";
import { useCart } from "../store/centralStore";

function Layout() {
  const count = useCart((everything) => everything.itemsInCart);

  return (
    <div
      style={
        {
          // display: "flex",
          // gap: "10px",
          // justifyContent: "flex-start",
          // alignItems: "center",
        }
      }
    >
      <div
        style={{
          border: "1px solid red",
          padding: "10px",
          height: "100%",
        }}
      >
        Navbar
        {count}
      </div>
      <Outlet />

      {/* <div
        style={{
          border: "1px solid red",
          padding: "10px",
          height: "100%",
        }}
      >
        Footer
      </div> */}
    </div>
  );
}

export default Layout;
