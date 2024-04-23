import Container from "../../components/container/Container";
import CartItem from "../../components/cartItem/CartItem";
import Button from "../../components/button/Button";

function Cart() {
  const [cartItems] = useShoppingCartContext();

  return (
    <div>
      <Container>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <div className="bg-gray-200 rounded" >
          <p className="text-right">قیمت کل:2000</p>
          <p className="text-right">قیمت شما:200</p>
          <p className="text-right">قیمت نهایی:8000</p>
        </div>
        <Button className="mt-2" variant="success">ثبت سفارش</Button>
      </Container>
    </div>
  );
}
export default Cart;
