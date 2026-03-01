function ProductCard({ productName, price }) {

  function handleClick() {
    console.log(productName);
  }

  return (
    <div className="border rounded-lg p-4 m-4 w-64 shadow-sm">
      
      <p className="text-lg font-semibold">
        {productName}
      </p>

      <p className="text-gray-600 mb-3">
        ₹{price}
      </p>

      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={handleClick}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;