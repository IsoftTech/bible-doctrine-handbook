import React from 'react'
import Menu from "../Layouts/Menu";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";

function HolyBible() {
    return (
        <div>
        <Header/>
       <Menu/>
       <div className="content-wrapper">
            <h1>The Holy Bible</h1>
        </div>

        <Footer/>
        </div>
    )
}

export default HolyBible;
