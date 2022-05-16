import { useEffect, useState } from "react";
import "./stylique.scss";
import AllProducts from "./allProducts/AllProducts";
import { useDispatch } from "react-redux";
import { setProducts, setTagname } from "../redux/slice/reducerOne";
import {
  useLocation
} from "react-router-dom";

function Stylique() {
  const dispatch = useDispatch();
  const URL = "https://api.jsonbin.io/b/627b6d5525069545a3322906";
  const URL_TAGNAME = "https://api.jsonbin.io/b/627b6f3a019db467969aa57e/2";


  useEffect(() => {
    fetch(URL)
      .then((data) => data.json())
      .then((res) => dispatch(setProducts({ products: res.products })));
    fetch(URL_TAGNAME)
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
