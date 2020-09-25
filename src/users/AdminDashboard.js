import React, {useEffect, useState} from "react";
import $ from "jquery";
import Menu from "../Layouts/Menu";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
$.DataTable = require('datatables.net');

const AdminPanel = () =>{
    
    useEffect(() => {
    
      
      $(function () {
        // Datatable
        $('table').DataTable({
          "paging": true,
          "lengthChange": false,
          "searching": true,
          "ordering": true,
          "info": true,
          "autoWidth": true,
          "responsive": true,
        });
      });
      // Navbar Active
        $(".nav-link").on("click", function() {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
      });

      // navbar hack
    if ($(".sidebar-collapse")[0])
    document.getElementById("nbar").style.display = "none";
    if ($(".sidebar-collapse")[0])
    document.getElementById("nbar").style.display = "none";

      }, []);

    return (



 <div>

<div className="wrapper">
  {/* Navbar */}

      <Header/>
  {/* /.navbar */}


  {/* sidebar*/}
  {/* Main Sidebar Container */}
      <Menu/>
  {/* /.sidebar */}
  {/* Content Wrapper. Contains page content */}
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      {/*




</div>*/}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <a id="information" className="anchor" />
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            {/* /.col */}
            {/* row and container*/}
          </div>
        </div>
        {/* Boxes */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" />
                  <div className="row">
                    {/* Boxes columns */}
                    <div className="col-12 col-sm-6 col-md-3">
                      {/* small box */}
                      <div className="small-box bg-info">
                        <div className="inner">
                          <h3>39</h3>
                          <p>ACTIVITIES</p>
                        </div>
                        <div className="icon">
                          <i className="fa fa-language" />
                        </div>
                        <a href="#activities" className="small-box-footer">View <i className="fas fa-arrow-circle-down" /></a>
                      </div>
                    </div>
                    {/* ./col */}
                    <div className="col-12 col-sm-6 col-md-3">
                      {/* small box */}
                      <div className="small-box bg-success">
                        <div className="inner">
                          <h3>18</h3>
                          <p>SERVICES</p>
                        </div>
                        <div className="icon">
                          <i className="fa fa-cogs" />
                        </div>
                        <a href="#services" className="small-box-footer">View <i className="fas fa-arrow-circle-down" /></a>
                      </div>
                    </div>
                    {/* ./col */}
                    <div className="col-12 col-sm-6 col-md-3">
                      {/* small box */}
                      <div className="small-box bg-warning">
                        <div className="inner">
                          <h3>15</h3>
                          <p>RECEIVERS</p>
                        </div>
                        <div className="icon">
                          <i className="fa fa-assistive-listening-systems" />
                        </div>
                        <a href="#receivers" className="small-box-footer">View <i className="fas fa-arrow-circle-down" /></a>
                      </div>
                    </div>
                    {/* ./col */}
                    <div className="col-12 col-sm-6 col-md-3">
                      {/* small box */}
                      <div className="small-box bg-danger">
                        <div className="inner">
                          <h3>5</h3>
                          <p>PROVIDERS</p>
                        </div>
                        <div className="icon">
                          <i className="fa fa-database" />
                        </div>
                        <a href="#providers" className="small-box-footer">View <i className="fas fa-arrow-circle-down" /></a>
                      </div>
                      {/* /.row */}
                    </div>{/* /.container-fluid */}
                    <div className="col-12 col-sm-6 col-md-3">
                      <div className="info-box">
                        <span className="info-box-icon bg-info elevation-1"><i className="fas fa-language" /></span>
                        <div className="info-box-content">
                          <span className="info-box-text">Exported <br />Activities</span>
                          <span className="info-box-number">
                            3
                          </span>
                        </div>
                        {/* /.info-box-content */}
                      </div>
                      {/* /.info-box */}
                    </div>
                    {/* /.col */}
                    <div className="col-12 col-sm-6 col-md-3">
                      <div className="info-box mb-3">
                        <span className="info-box-icon bg-success elevation-1"><i className="fas fa-cogs" /></span>
                        <div className="info-box-content">
                          <span className="info-box-text">Exported <br />Services</span>
                          <span className="info-box-number">2</span>
                        </div>
                        {/* /.info-box-content */}
                      </div>
                      {/* /.info-box */}
                    </div>
                    {/* /.col */}
                    {/* fix for small devices only */}
                    <div className="clearfix hidden-md-up" />
                    <div className="col-12 col-sm-6 col-md-3">
                      <div className="info-box mb-3">
                        <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-assistive-listening-systems" /></span>
                        <div className="info-box-content">
                          <span className="info-box-text">Exported <br />Receivers</span>
                          <span className="info-box-number">3</span>
                        </div>
                        {/* /.info-box-content */}
                      </div>
                      {/* /.info-box */}
                    </div>
                    {/* /.col */}
                    <div className="col-12 col-sm-6 col-md-3">
                      <div className="info-box mb-3">
                        <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-database" /></span>
                        <div className="info-box-content">
                          <span className="info-box-text">Exported <br />Providers</span>
                          <span className="info-box-number">0</span>
                        </div>
                        {/* /.info-box-content */}
                      </div>
                      {/* /.info-box */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></section>
    {/* =========================end information==================================== */}
    <a id="certificate" className="anchor" />
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <p>
                  <strong><i className="fa fa-certificate" /> SIGNER CERTIFICATE</strong>
                </p>
                {/*Cert status*/}
                <div className="table-responsive">
                  <table id="table_cert" className="table table-bordered table-hover table-striped">
                    <thead>
                      <tr>
                        <th>STATUS</th>
                        <th>DESCRIPTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span className="badge bg-success">secure</span>
                        </td>
                        <td>Application is signed with a code signing certificate</td>
                      </tr>
                      <tr>
                        <td>
                          <span className="badge bg-warning">warning</span>
                        </td>
                        <td>Application is signed with v1 signature scheme, making it vulnerable to Janus vulnerability on Android &lt;7.0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>{/* /.card */}
          </div>
          {/* end row */}
        </div>
      </div>
    </section>
    {/* ===========================end cert ================================== */}
    
    {/* end of contents */}
  </div>
  {/* /.content-wrapper */}

    <Footer/>
  {/* Control Sidebar */}
  <aside className="control-sidebar control-sidebar-dark">
    {/* Control sidebar content goes here */}
  </aside>
  {/* /.control-sidebar */}
</div>

</div>
   
   
   );
};

export default AdminPanel;


  