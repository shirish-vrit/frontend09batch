import React from "react";
import { useLocation, useParams } from "react-router";
import { useCart } from "../store/centralStore";

function ProfileDetail() {
  const params = useParams();
  console.log(params, "Params");

  const { itemsInCart, increaseCartItem } = useCart();

  return (
    <div>
      ProfileDetail of {params.name}
      {itemsInCart}
      <button
        onClick={() => {
          increaseCartItem();
        }}
      >
        Go to profile route/section
      </button>
    </div>
  );
}

export default ProfileDetail;
