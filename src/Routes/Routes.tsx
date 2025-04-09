import React, { ReactElement } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashbord from '../pages/dashboard';
import Mytickects from '../pages/Mytickects';
import Favourite from '../pages/Favourite';
import Massege from '../pages/Massege';
import Transaction from '../pages/Transactions';
import Settings from '../pages/Settings';


const AppRoutes = (): ReactElement => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashbord/>} />
                <Route path="/tickets" element={<Mytickects/>} />
                <Route path="/favourite" element={<Favourite/>} />
                <Route path="/msg" element={<Massege/>} />
                <Route path="/pay" element={<Transaction/>} />
                <Route path="/hehe" element={<Settings/>} />
                
                
            </Routes>
        </BrowserRouter>

    );
};

export default AppRoutes
