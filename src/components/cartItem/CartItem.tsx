import Button from "../../components/button/Button";

function CartItem() {
  return (
    <div className="flex flex-row-reverse mt-4 border-b pb-2">
      <img
        className="rounded w-28"
        src="https://cdn.nody.ir/files/2021/10/15/nody-%D8%A8%D9%87%D8%AA%D8%B1%DB%8C%D9%86-%D8%B9%DA%A9%D8%B3-%D8%B5%D9%81%D8%AD%D9%87-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-1634247622.jpg"
      />
      <div className="mr-4">
        <h3 className="text-right">عنوان محصول</h3>
        <div className="mt-2">
            <Button variant="primary">+</Button>
            <span className="mx-2">{2}</span>
            <Button variant="primary">-</Button>
            <Button variant="danger">remove</Button>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
