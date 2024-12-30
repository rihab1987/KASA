import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import About from "./pages/About"
import Logements from "./pages/Logements";
import Page404 from "./pages/Page404";


function App (){
  return (
    
    <BrowserRouter>
    <Header/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/logements/:id" element={<Logements/>}/>
        <Route path="*" element={<Page404/>}/>
       </Routes>
       
      <Footer/>
       
    </BrowserRouter>
   
  )
}
export default App;