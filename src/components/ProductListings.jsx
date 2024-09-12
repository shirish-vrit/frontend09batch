import useProducts from "../hooks/useProducts";

function ProductListings() {
  const [productList] = useProducts();

  if (productList?.length === 0) {
    return <div>No data</div>;
  }
  return (
    <div>
      {/* 4 */}
      {productList?.map((product, index) => {
        return (
          <div key={index}>
            <img src={product.image} height={50} width={50} />
            {product?.title}
          </div>
        );
      })}
    </div>
  );
}

export default ProductListings;

// UI Layer
