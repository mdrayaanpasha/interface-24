import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./home"
import EndPoint1 from "./endpoint1";
import EndPoint2 from "./endpoint2";
import EndPoint3 from "./endpoint3";
import EndPoint4 from "./endpoint4";
import EndPoint5 from "./endpoint5";


function App(){
  return(
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/am-i-breached" element={<EndPoint1 />}/>
      <Route path="/email-exposed" element={<EndPoint2 />}/>
      <Route path="/password-strenght" element={<EndPoint3 />}/>
      <Route path="/check-breaches" element={<EndPoint4 />}/>
      <Route path="/breaches" element={<EndPoint5 />}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App