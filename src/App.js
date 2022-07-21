import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";

//PAGES
import Home from "./pages/Home.page";
import Pricing from "./pages/Pricing.page";
import SignUp from "./pages/SignUp.page";

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
