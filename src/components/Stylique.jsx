import { useEffect } from "react";
import "./stylique.scss";
import AllProducts from "./allProducts/AllProducts";
import { useDispatch } from "react-redux";
import { setProducts, setTagname } from "../redux/slice/reducerOne";
import { CARDS_API, TAGNAMES_API } from "../config/actions";
import { TransitionGroup } from 'react-transition-group'

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
      {/* <div className="parent"></div> */}
      <AllProducts />
      
    </>
  );
}

export default Stylique;
