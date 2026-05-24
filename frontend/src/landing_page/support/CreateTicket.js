import React from "react";
import { Link } from "react-router-dom";

function SupportLink({ children }) {
  return (
    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>
      {children}
    </Link>
  );
}

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <SupportLink>Online Account Opening</SupportLink>
          <br />
          <SupportLink>Offline Account Opening</SupportLink>
          <br />
          <SupportLink>Company, Partnership and HUF Account</SupportLink>
          <br />
          <SupportLink>Opening</SupportLink>
          <br />
          <SupportLink>NRI Account Opening</SupportLink>
          <br />
          <SupportLink>Charges at Zerodha</SupportLink>
          <br />
          <SupportLink>Zerodha IDFC FIRST Bank 3-in-1 Account</SupportLink>
          <br />
          <SupportLink>Getting Started</SupportLink>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <SupportLink>Online Account Opening</SupportLink>
          <br />
          <SupportLink>Offline Account Opening</SupportLink>
          <br />
          <SupportLink>Company, Partnership and HUF Account</SupportLink>
          <br />
          <SupportLink>Opening</SupportLink>
          <br />
          <SupportLink>NRI Account Opening</SupportLink>
          <br />
          <SupportLink>Charges at Zerodha</SupportLink>
          <br />
          <SupportLink>Zerodha IDFC FIRST Bank 3-in-1 Account</SupportLink>
          <br />
          <SupportLink>Getting Started</SupportLink>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <SupportLink>Online Account Opening</SupportLink>
          <br />
          <SupportLink>Offline Account Opening</SupportLink>
          <br />
          <SupportLink>Company, Partnership and HUF Account</SupportLink>
          <br />
          <SupportLink>Opening</SupportLink>
          <br />
          <SupportLink>NRI Account Opening</SupportLink>
          <br />
          <SupportLink>Charges at Zerodha</SupportLink>
          <br />
          <SupportLink>Zerodha IDFC FIRST Bank 3-in-1 Account</SupportLink>
          <br />
          <SupportLink>Getting Started</SupportLink>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <SupportLink>Online Account Opening</SupportLink>
          <br />
          <SupportLink>Offline Account Opening</SupportLink>
          <br />
          <SupportLink>Company, Partnership and HUF Account</SupportLink>
          <br />
          <SupportLink>Opening</SupportLink>
          <br />
          <SupportLink>NRI Account Opening</SupportLink>
          <br />
          <SupportLink>Charges at Zerodha</SupportLink>
          <br />
          <SupportLink>Zerodha IDFC FIRST Bank 3-in-1 Account</SupportLink>
          <br />
          <SupportLink>Getting Started</SupportLink>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <SupportLink>Online Account Opening</SupportLink>
          <br />
          <SupportLink>Offline Account Opening</SupportLink>
          <br />
          <SupportLink>Company, Partnership and HUF Account</SupportLink>
          <br />
          <SupportLink>Opening</SupportLink>
          <br />
          <SupportLink>NRI Account Opening</SupportLink>
          <br />
          <SupportLink>Charges at Zerodha</SupportLink>
          <br />
          <SupportLink>Zerodha IDFC FIRST Bank 3-in-1 Account</SupportLink>
          <br />
          <SupportLink>Getting Started</SupportLink>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <SupportLink>Online Account Opening</SupportLink>
          <br />
          <SupportLink>Offline Account Opening</SupportLink>
          <br />
          <SupportLink>Company, Partnership and HUF Account</SupportLink>
          <br />
          <SupportLink>Opening</SupportLink>
          <br />
          <SupportLink>NRI Account Opening</SupportLink>
          <br />
          <SupportLink>Charges at Zerodha</SupportLink>
          <br />
          <SupportLink>Zerodha IDFC FIRST Bank 3-in-1 Account</SupportLink>
          <br />
          <SupportLink>Getting Started</SupportLink>
          <br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;