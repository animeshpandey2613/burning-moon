import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import PlayVideo from "./pages/PlayVideo";
import Started from "./pages/Started";
import ResetPassword from "./pages/ResetPassword";
import Protected from "./utils/Protected";
import Logout from "./pages/Logout";
import { Helmet } from "react-helmet";
// import Media from "react-media";
import Logo from "./images/Logo.png";
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Burning Moon</title>
        <link rel="icon" type="image/png" href={Logo} />
      </Helmet>
      {/* <Media query="(max-width:1200px)"> */}
        {/* {(matches) => {
          return matches ? (
            <h2 className="heading2">
              Mobile version of this site is under construction, please open it
              on your PC OR visit my linkedIn profile -
              https://www.linkedin.com/in/animesh-pandey-00a3bb228/
            </h2>
          ) : ( */}
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
                <Route
                  path="/resetpassword/:token"
                  element={<ResetPassword />}
                />
                <Route path="/logout" element={<Logout />} />
              </Routes>
            </Router>
          {/* );
        }} */}
      {/* </Media> */}
    </div>
  );
}

export default App;
