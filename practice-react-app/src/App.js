import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import MenuList from "./component/MenuList";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <div>
      <Router>
        <MenuList />
        <GlobalStyles />
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/"} element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
