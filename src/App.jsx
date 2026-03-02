import Dashboard from "./Assignment1/DashBoard";
import ProductCard from "./Assignment1/ProductCard";
import Toggle from "./Assignment1/Toggle";
import UserList from "./assignment2/Api-fetching";
import Counter from "./assignment2/CounterApp";
import Livesearch from "./assignment2/LiveSearch";

function App() {
  // return (
  //   <>
  //     <div className="flex flex-row">
  //       <ProductCard productName={"Iphone"} price={90000} />
  //       <ProductCard productName={"laptop"} price={75000} />
  //       <ProductCard productName={"Fridge"} price={13000} />
  //     </div>

  //     <Toggle />

  //     <Dashboard/>
  //   </>
  // );
  return(
    <>
    <div>
      <Counter/>
      <Livesearch/>
      <UserList/>
      </div></>
  )
}

export default App;