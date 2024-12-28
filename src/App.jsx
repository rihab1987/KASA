import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import About from "./pages/About"
import Accomodation from "./pages/Accomodation";
import Page404 from "./pages/Page404";


function App (){
  return (
    
    <BrowserRouter>
    <Header/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/accomodation/:id" element={<Accomodation/>}/>
        <Route path="*" element={<Page404/>}/>
       </Routes>
       
      <Footer/>
       
    </BrowserRouter>
   
  )
}
export default App;