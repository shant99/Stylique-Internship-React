import { Provider } from "react-redux";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import "./App.scss";
import Card from "./components/allProducts/card/Card";
import Stylique from "./components/Stylique";
import store from "./redux/store";


function App() {
  

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Stylique />}></Route>
            <Route path='/card' element={<Card  /> } />
            <Route  path="*" element={<Stylique />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
