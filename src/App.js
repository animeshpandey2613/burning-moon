import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import PlayVideo from "./pages/PlayVideo";
import Started from "./pages/Started";
import ResetPassword from "./pages/ResetPassword";
import Protected from "./utils/Protected";
import Logout from "./pages/Logout";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/user" element={<Protected />}>
            <Route path="home" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="play" element={<PlayVideo />} />
          </Route>
          <Route path="/" element={<Started />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
