import Button from "./UI/Button";

function CartItem({ item }) {
  const { id, name, qty, unitPrice } = item;

  function calculateTotalPrice(unitPrice, quantity) {
    return unitPrice * quantity;
  }

  return (
    <li
      key={id}
      className="flex justify-between items-center border-b border-b-gray-200"
    >
      <div>{`${qty}x ${name}`}</div>
      <div className="flex gap-7">
        <div>{`€${calculateTotalPrice(unitPrice, qty).toFixed(2)}`}</div>
        <div className="flex gap-4 items-center">
          <Button type="decrease" arg={id}>
            -
          </Button>
          <span>{qty}</span>
          <Button type="increase" arg={id}>
            +
          </Button>
        </div>
        <Button type="deleteItem" arg={id}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
