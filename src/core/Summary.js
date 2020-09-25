import React from 'react'
import Menu from "../Layouts/Menu";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
function Summary() {
    return (
        <div>
        <Header/>
       <Menu/>
       <div className="content-wrapper">
            <h1>Summary Page</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Summary
