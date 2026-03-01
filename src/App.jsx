import Dashboard from "./Assignment1/DashBoard";
import ProductCard from "./Assignment1/ProductCard";
import Toggle from "./Assignment1/Toggle";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <ProductCard productName={"Iphone"} price={90000} />
        <ProductCard productName={"laptop"} price={75000} />
        <ProductCard productName={"Fridge"} price={13000} />
      </div>

      <Toggle />

      <Dashboard/>
    </>
  );
}

export default App;