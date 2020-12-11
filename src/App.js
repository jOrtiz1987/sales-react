import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Producto from './components/Producto';
import {BrowserRouter as Router, Route} from "react-router-dom";
import AgregarProducto from './components/Producto/AgregarProducto';
import AgregarCategoria from './components/Categoria/AgregarCategoria';
import {Provider} from "react-redux"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Producto} />
          <Route exact path="/agregarProducto" component={AgregarProducto} />
          <Route exact path="/agregarCategoria" component={AgregarCategoria} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
