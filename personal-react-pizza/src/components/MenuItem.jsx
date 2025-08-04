import Button from "./UI/Button";

function MenuItem({ pizza, inCart }) {
  const { id, name, ingredients, unitPrice, soldOut, imageUrl } = pizza;

  return (
    <li className="flex items-center border-b border-b-slate-300 pb-4">
      <img
        src={imageUrl}
        alt={name}
        className={`w-28 h-28 object-cover rounded ${
          soldOut ? "grayscale" : ""
        }`}
      />

      <div className="ml-6 flex-1">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm italic capitalize text-gray-600 mb-9">
          {ingredients.join(", ")}
        </p>
        {soldOut ? (
          <p className="mt-1 text-gray-400 text-lg font-semibold ">SOLD OUT</p>
        ) : (
          <p className="mt-1  text-sm font-medium">{`€${unitPrice.toFixed(2)}`}</p>
        )}
      </div>

      {/* Cart Controls */}
      {!soldOut && (
        <div className="flex items-center gap-2">
          {inCart ? (
            <>
              <Button type={"decrease"} arg={id}>
                -
              </Button>
              <span className="font-medium">{inCart.qty}</span>
              <Button type={"increase"} arg={id}>
                +
              </Button>
              <Button type={"deleteItem"} arg={id}>
                DELETE
              </Button>
            </>
          ) : (
            <Button type={"addToCart"} arg={pizza}>
              ADD TO CART
            </Button>
          )}
        </div>
      )}
    </li>
  );
}

export default MenuItem;
