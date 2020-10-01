import React from 'react'
import Menu from "../Layouts/Menu";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import { Link } from 'react-router-dom'
// import Body from "../Layouts/Body";
 const customStyle = {
     margin: "0 auto",
     textAlign: "center",
    
 }

function Introduction() {

    return (
        <div>
            
        <Header/>
       <Menu/>
       
       <div className="content-wrapper" style={customStyle}>
            <h1 style={{color: "green"}}>BIBLE TOPIC HERE</h1>
            {/* <Body/> */}
            <button className="btn-primary"> <i className="fa fa-download"></i> Study</button>
            <button className="btn-danger"> <i className="fa fa-download"></i> Notes</button>
            <button className="btn-success"> <i className="fa fa-question-circle"></i> Questions & Answers</button>
            <button className="bg-dark"> <i className="fa fa-question-circle"></i> Quiz</button>
       </div>
        <Footer/>
        </div>

        
    )
}

export default Introduction;
