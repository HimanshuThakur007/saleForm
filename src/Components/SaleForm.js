import React from "react";
import GridTable from "./GridTable";
import LegendTag from "./LegendTag";
import "./SaleForms.css";

const SaleForm = () => {
  return (
    <>
      <div className="container-fluid acc-ct ">
        <div className="Heading-top d-flex justify-content-center pt-2 pb-2">
          <h5 className="head-txt px-4"> Add Sales Voucher</h5>
        </div>
        <form>
        <div className="col-7">
          <div className="row">
            <div className="col-3 d-flex justify-content-end">
              <label>Series</label>
              <input className="textColor" type="text" name="name" id="name" />
            </div>
            <div className="col-3 d-flex justify-content-end">
              <label>Date</label>
              <input className="textColor" type="Date" name="date" id="date" />
            </div>
            <div className="col-3 d-flex justify-content-end">
              <label>Vch No.</label>
              <input className="textColor" type="text" name="vehicle" id="vehicle" />
            </div>
            <div className="col-3 d-flex justify-content-end">
              <label>Sale Type</label>
              <input className="textColor" type="text" name="sale" id="sale" />
            </div>
          </div>
        </div>
        <div className="col-7 pt-0">
                      <div className="row">
                        <div className="col-3 d-flex justify-content-center">
                          <label className="party">Party</label>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                          <input
                            className = "textColor"
                            type="text"
                            name="party"
                            id="party"
                          />
                        </div>
                        <div className="col-3 d-flex justify-content-left">
                          <label className="Mat">Mat Center</label>
                        </div>
                        <div className="col-3 d-flex justify-content-left">
                          <input
                            className = "textColor"
                            type="text"
                            name="Mat"
                            id="Mat"
                          />
                        </div>
                        </div>
        </div>
        </form>
        <br/>
        <div className="col-12">
            <div className="row">
        <GridTable/>
        <div className="col-3 legend">
        <LegendTag  
        title = "Item Info"
        textarea="Himanshu"/>
        </div>
        </div>
        </div>
      </div>
      
    </>
  );
};

export default SaleForm;
