import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "../pages/1. AdminPage"
import HomePage from "../pages/2. HomePage";
import ErrorPage from "../pages/3. ErrorPage";

const Router = () =>{
    return(
        <BrowserRouter>
          <Routes>
            <Route path = {"/"} element = {<HomePage/>}/>
            <Route path = {"/admin"} element = {<AdminPage/>}/>
            <Route path = {"*"} element = {<ErrorPage/>}/>
          </Routes>
        </BrowserRouter>
    )
}

export default Router;

