import "./index.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
        <Link className="brand" to ='/'>
            amazona
            </Link>
        </div>
        <div>
          <a >Cart</a>
          <a >Sign In</a>
        </div>
      </header>
      <main>
       
        <Routes>
        <Route path= "/product/:id" element={<ProductScreen/>}/>
        <Route exact path = "/" element = {<HomeScreen/>}/>
        </Routes>
         
      </main>
      <footer className="row center">All right reserved</footer>
    </div>

    </BrowserRouter>
  );
}

export default App;
