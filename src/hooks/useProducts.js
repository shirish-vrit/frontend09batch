import React, { useEffect, useState } from "react";
import { fetchProducts } from "../apiLayer";

function useProducts() {
  const [productList, setProductList] = useState([]); // 3

  useEffect(() => {
    fetchProducts()
      .then((networkData) => {
        setProductList(
          networkData?.map((items, index) => {
            return {
              ...items,
              checked: index === 2 ? true : false,
            };
          })
        );
      })
      .catch((err) => console.log(err));
  }, []); // 1

  return [productList];
}

export default useProducts;

// Business loggic layer
