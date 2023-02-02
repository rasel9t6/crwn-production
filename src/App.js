import { Routes, Route } from "react-router-dom";
import Home from "./components/routers/Home/Home.component";
import Navigation from "./components/routers/Navigation/Navigation.component";
import SignIn from "./components/routers/Sign-in/Sign-in.component";
import Shop from "./components/routers/Shop/Shop.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}
export default App;
