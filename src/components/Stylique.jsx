/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import "./stylique.scss";
import AllProducts from "./allProductsPage/AllProductsPage";
import { useDispatch } from "react-redux";
import { setProducts, setTagname } from "../redux/slice/allProductsPage_Slice";
import { CARDS_API,  TAGNAMES_API } from "../config/actions";

function Stylique() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(CARDS_API)
      .then((data) => data.json())
      .then((res) => dispatch(setProducts({ products: res.products })));
    fetch(TAGNAMES_API)
      .then((data) => data.json())
      .then((res) => dispatch(setTagname({ tagname: res })));
  }, []);
  return (
    <>
      <AllProducts />
    </>
  );
}

export default Stylique;
