/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import "./stylique.scss";
import AllProducts from "./allProducts/AllProducts";
import { useDispatch } from "react-redux";
import { setProducts, setTagname } from "../redux/slice/reducerOne";
import { CARDS_API, TAGNAMES_API } from "../config/actions";


function Stylique() {
  const dispatch = useDispatch();

  // let tagname = ['b' , 'a' ];
  // let prodTags = [{tags: ['a' , 'b']} , {tags:['b']} , {tags: ['c']} , {tags:[ 'a']}]

  // let strP = prodTags[0].tags.sort().join('')
  // let strT = tagname.sort().join('')
  // console.log(strP === strT)
  
  // let arr = prodTags.filter((itm , ind , array) => {
  //   let arr =  array[ind].tags.every(e=> tagname.includes(e))
  //   if(arr) return itm
  // })

  // console.log(arr)
  
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
