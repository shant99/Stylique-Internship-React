import { Provider } from "react-redux";
import "./App.scss";
import Stylique from "./components/Stylique";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Stylique />
      </div>
    </Provider>
  );
}

export default App;
