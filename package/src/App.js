import {useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
// import FullLayout from "./layouts/FullLayout";
import LandingPage from "./authpages/LandingPage";
import AdminLogin from "./authpages/AdminLogin";
import {Route, Routes } from "react-router-dom";


const App = () => {
 const token = localStorage.getItem('token')
  const routing = useRoutes(Themeroutes);

  return (<>{ token ?
    <div className="dark">{routing}</div> : 
    
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/adminlogin" element={<AdminLogin />}/>
    </Routes>

  }</>);

  // return <div className="dark">{routing}</div>
};

export default App;
