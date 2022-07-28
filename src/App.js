import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./views/Home";
import Login from "./views/Login";
import List from "./views/List";
import Single from "./views/Single";
import Create from "./views/Create";
import { productInputs, userInputs } from "./views/Create/data";
import "./assets/style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/dark";

function App() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app" }>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="create"
                element={<Create inputs={userInputs} title={"Add New User"} />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="create"
                element={
                  <Create inputs={productInputs} title={"Add New Product"} />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
