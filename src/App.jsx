import { Route, Routes } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import About from "./routes/About";

import Home from "./routes/Home";
import Recipes from "./routes/Recipes";

function App() {
  return (
    <div className="App">
      <Navigation/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/recipes" element={<Recipes/>}></Route>
        <Route path="/about" element={<About/>}></Route>

      </Routes>

    </div>
  );
}

export default App;
