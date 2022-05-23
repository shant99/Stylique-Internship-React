import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";

import CardDetailsPage from "./components/cardDetailsPage/CardDetailsPage";
import Stylique from "./components/Stylique";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Stylique />}></Route>
            <Route path="/card/:name" element={<CardDetailsPage />} />
            <Route exact path="/*" element={<Navigate to="/" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
