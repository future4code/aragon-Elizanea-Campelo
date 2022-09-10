import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';

function Router() {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path={"/home"} element={<HomePage />} />
                <Route path={"/signup"} element={<SignUpPage />} />                
                <Route path={"*"} element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;