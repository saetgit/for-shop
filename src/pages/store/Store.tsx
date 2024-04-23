import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "../../services/api.ts";
function Store() {
  const [product, setProducts] = useState<Products[]>([]);
  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
  }, []);
  return (
    <div>
      <Container>
        <h1 className="text-right mt-5">جدید ترین محصولات</h1>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {product.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <ProductItem {...item}/>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
export default Store;
