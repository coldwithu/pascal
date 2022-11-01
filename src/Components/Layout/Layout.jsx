import React from "react";
import Header from "../Header/Header";
import {Outlet} from 'react-router'
import './Layout.css'
import Footer from "../Footer/Footer";


const Layout = () => {
    return(
        <div className="layout">
            <Header/>
            <div className="outlet-container">
                <Outlet/>
            </div>
            <Footer/>

        </div>
    )
}

export default Layout;