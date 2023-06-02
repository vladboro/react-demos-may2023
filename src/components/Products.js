import { useGetProductsQuery } from "../api/shopApi";
import Product from "./Product";

const Products = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  return isLoading ? (
    <div>Loading products...</div>
  ) : (
    products.map((p) => (
        <Product key={p.id} productId={p.id}/>
    ))
  );
};

export default Products;
