import { Provider } from "react-redux";
import "./App.scss";
import Stylique from "./components/Stylique";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <div className="container">
          <div className="row">
            <button className="but">hello</button>
            <button className="but">hello</button>
            <button className="but">hello</button>
            <button className="but">hello</button>
            <button className="but">hello</button>
            <button className="but">hello</button>
            <button className="but">hello</button>
            <button className="but">hello</button>
          </div>
        </div> */}
        <Stylique />
      </div>
    </Provider>
  );
}

export default App;
