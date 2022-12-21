import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, loadProducts } from "../../redux/slices/ProductSlice";
import SingleProduct from "./SingleProduct";
import "./ProductList.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

function ProductList() {
  const dispatch = useDispatch();
  // access whatever is there in the state of the productreducer
  // the inititalState constains products,error,status can be accessed using useSelector
  const products = useSelector((state) => state.productReducer.products);
  const status = useSelector((state) => state.productReducer.status);
  const error = useSelector((stateE) => stateE.productReducer.error);

  useEffect(() => {
    // fetchdata();
    // after moving fetchdata to redux async thunk
    // passing an input value into redux-thunk via fetch data
    // dispatch(fetchData(params or `hello`))
    dispatch(fetchData());
  }, []);

  // when the thunk is being called , thunk will send  or dispatch three actions ,
  // which are pending , fullfiled, rejected,
  // 1st dispatch action pending, 2nd fullfilled, 3rd -> rejected
  // thunk generally dispatch the  action ->pending , when it is out there to fetch
  // the data from the internet or server, and you can update the store you want
  // with this pending info or data
  // when thunk receives the data from the internet or from the server it dispatch
  // the action->fullfil, so update the store with this data
  // if any error occurs link api error then thunk will dispatch the action rejected

  // fetching the data inside the component in the view is not an recommended practice
  //   in order to fetch the data view should npt work for it

  //   moving async function fetchdata to redux-thunk productSlice

  //   async function fetchdata() {
  //     const response = await fetch("https://api.escuelajs.co/api/v1/products");
  //     const data = await response.json();
  //     dispatch(loadProducts(data));
  //   }
  if (status === "loading") {
    return <Spin style={{ marginBlock: `10rem` }} size="large" />;
  }
  if (status === "failed") {
    return (
      <>
        <h1>oops!... Something went wrong!....</h1>
        <h2>{error}</h2>
      </>
    );
  }
  return (
    <div className="product-list">
      {products.map((product, id) => {
        return (
          // in order to differentiate between the products use key prop
          <div key={id} className="each-product">
            {/* <h3>{product.title}</h3> */}
            <SingleProduct product={product} />
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
