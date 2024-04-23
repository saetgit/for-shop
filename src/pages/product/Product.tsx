import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/api.ts";

function Product() {
  const params = useParams<{ id: string }>();
  const [product, setProducts] = useState<Products[]>([]);
  useEffect(() => {
    getProduct(params.id as string).then((result) => {
      setProducts(result);
    });
  }, []);
  return (
    <div>
      <Container>
        <div className="h-96 shadow mt-4 grid grid-cols-12">
          <div className="col-span-10 p-4">
            <h1 className="text-right">{product.title} </h1>
            <div>
              <p className="text-right">{product.price}</p>
              <p className="text-right">{product.description}</p>
            </div>
          </div>
          <div className="bg-blue-400 col-span-2">
            <img className="rounded" src={product.image} />

            <Button
              variant="success"
              onClick={() => {
                alert("sara jooooooon");
              }}
              className="mt-2 w-full !py-3"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Product;
