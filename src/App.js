import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";

//PAGES
import Home from "./pages/home.page";
import Pricing from "./pages/pricing.page";
import SignUp from "./pages/sign-up.page";

function App() {
  return (
    <Router>
      <GlobalStyle />
      
      <Routes>  
        <Route exact path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/pricing" element={<Pricing/>}/>

      </Routes>
    </Router>
  );
}

export default App;
