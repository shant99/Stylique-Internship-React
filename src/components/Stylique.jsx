/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import "./stylique.scss";
import AllProducts from "./allProducts/AllProducts";
import { useDispatch } from "react-redux";
import { setProducts, setTagname } from "../redux/slice/reducerOne";
import { CARDS_API, TAGNAMES_API } from "../config/actions";


function Stylique() {
  const dispatch = useDispatch();

  let one = [ 'c'  , 'a'];
  let two = [{tags: ['a' , 'b']} , {tags:['b']} , {tags: ['c']} , {tags:[ 'a']}]


  let arr = two.filter((item) => {
    let a = one.map(i => {
      let s = item.tags.some(e => i === e)
      if(s) return s
    })
    if(a.every(e => e === true)) return item
  })


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
