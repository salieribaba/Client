import { Fragment } from "react";
import CartTotals from "./components/carts/CartTotals";
import Category from "./components/categories/Category";
import Header from "./components/headers/Header";
import Product from "./components/products/Product";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24">
        <div className="categories overflow-auto max-h-[calc(100vh-_-112px)] md:pb-64 md:mr-0 -mr-[20px]">
          <Category />
        </div>
        <div className="products flex-[8]">
          <Product />
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px]  md:-mt-[24px] border">
          <CartTotals />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
