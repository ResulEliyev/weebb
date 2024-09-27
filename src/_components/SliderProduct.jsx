import "./productslider.css";
import products from "../_components/DataProduuct/products.json";
import Product from "./Product";

export default ({ item }) => {
  return (
    <>
      {products.map((item) => (
        <Product product={item} key={item.id} />
      ))}
    </>
  );
};
