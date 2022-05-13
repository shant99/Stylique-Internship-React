import { useState } from "react";
import "./stylique.scss";
import AllProducts from "./allProducts/AllProducts";
import Button from "../UI/Button";

function Stylique() {
  const [openAllProducts, setOpenAllProducts] = useState(true);
  const allProductsHandler = () => setOpenAllProducts(prev => !prev);
  return (
    <>
      {/* {openAllProducts ? (
        <div className="stylique">
          <header className="main-header">

            <div className="subHeader1">
              <div className="logo">STYLIQUE</div>
              <div className='subHeader1-menu'>
                <div className="subHeader1-menu-nav">
                  <Button name='All Products' className="subHeader1-menu-button" onClick={allProductsHandler}/>
                  <Button name='Manufactures' className="subHeader1-menu-button"/>
                  <Button name='Blog' className="subHeader1-menu-button"/>
                </div>
                <div className="register">
                  <Button name={'Register'} className="register-button" />
                  <Button name={'Login'} className="register-button" />
                </div>
              </div>
            </div>

          </header>
        </div>
      ) : ( */}
        <AllProducts />
      {/* // )} */}
    </>
  );
}

export default Stylique;
