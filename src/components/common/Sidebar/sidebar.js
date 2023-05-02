import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import "./sidebar1.css";
import { RiHome2Line } from "react-icons/ri";
import ArchiveIcon from "@mui/icons-material/Archive";
import { Cases, Dashboard, Policy, Subject } from "@mui/icons-material";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import InsightsIcon from "@mui/icons-material/Insights";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ImageAspectRatioIcon from "@mui/icons-material/ImageAspectRatio";
import { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("home");
  const [RoleId, setRoleId] = useState("");
  useEffect(() => {
    const role = localStorage.getItem("RoleId");
    setRoleId(role);
    console.log(RoleId, role)
  }, []);

  let resiAdd = localStorage.getItem("ResiAdd");
  let address = localStorage.getItem("Address");
  const toggleSidebar = (sidebar) => {
    setActive(sidebar);

  };
  console.log(RoleId === "1")

  if (RoleId === "1") {
    return (
      <div className="sidebar">
        <ul
          className="navbar-nav bg-black sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to="/"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink" />
            </div>
            <div className="sidebar-brand-text mx-3">
              {resiAdd} {address}
            </div>
          </Link>
          <li
            onClick={() => toggleSidebar("home")}
            className={`nav-item ${active === "home" ? "active" : ""}`}
          >
            <Link to="/" className="nav-link px-0 align-middle">
              <Dashboard />
              <span className="ms-1 d-none d-sm-inline">Home</span>
            </Link>
          </li>
          <li
            onClick={() => toggleSidebar("title")}
            className={`nav-item ${active === "title" ? "active" : ""}`}
          >
            <Link to="/title" className="nav-link px-0 align-middle">
              <Cases />
              <span className="ms-1 d-none d-sm-inline">Title</span>
            </Link>
          </li>

          <li
            onClick={() => toggleSidebar("designation")}
            className={`nav-item ${active === "designation" ? "active" : ""}`}
          >
            <Link to="/designation" className="nav-link px-0 align-middle">
              <Cases />
              <span className="ms-1 d-none d-sm-inline">Designation</span>
            </Link>
          </li>

          <li
            onClick={() => toggleSidebar("district")}
            className={`nav-item ${active === "district" ? "active" : ""}`}
          >
            <Link to="/district" className="nav-link px-0 align-middle">
              <Cases />
              <span className="ms-1 d-none d-sm-inline">District</span>
            </Link>
          </li>
          <li
            onClick={() => toggleSidebar("officetype")}
            className={`nav-item ${active === "officetype" ? "active" : ""}`}
          >
            <Link to="/officetype" className="nav-link px-0 align-middle">
              <Cases />
              <span className="ms-1 d-none d-sm-inline">Office Type</span>
            </Link>
          </li>
          <li
            onClick={() => toggleSidebar("rtidesignation")}
            className={`nav-item ${active === "rtidesignation" ? "active" : ""}`}
          >
            <Link to="/rtidesignation" className="nav-link px-0 align-middle">
              <Cases />
              <span className="ms-1 d-none d-sm-inline">RTI Designation</span>
            </Link>
          </li>

          <li
            onClick={() => toggleSidebar("state")}
            className={`nav-item ${active === "state" ? "active" : ""}`}
          >
            <Link to="/state" className="nav-link px-0 align-middle">
              <Cases />
              <span className="ms-1 d-none d-sm-inline">State</span>
            </Link>
          </li>

          <li
            onClick={() => toggleSidebar("ddotype")}
            className={`nav-item ${active === "ddotype" ? "active" : ""}`}
          >
            <Link to="/ddotype" className="nav-link px-0 align-middle">
              <Subject />
              <span className="ms-1 d-none d-sm-inline">DDO Type</span>
            </Link>
          </li>

          <li
            onClick={() => toggleSidebar("officeunit")}
            className={`nav-item ${active === "officeunit" ? "active" : ""}`}
          >
            <Link to="/officeunit" className="nav-link px-0 align-middle">
              <InsertChartIcon />
              <span className="ms-1 d-none d-sm-inline">Office Unit</span>
            </Link>
          </li>
          <li
            onClick={() => toggleSidebar("module")}
            className={`nav-item ${active === "module" ? "active" : ""}`}
          >
            <Link to="/Module" className="nav-link px-0 align-middle">
              <InsertChartIcon />
              <span className="ms-1 d-none d-sm-inline">Module</span>
            </Link>
          </li>

          <li
            onClick={() => toggleSidebar("office")}
            className={`nav-item ${active === "office" ? "active" : ""}`}
          >
            <Link to="/office" className="nav-link px-0 align-middle">
              <InsertChartIcon />
              <span className="ms-1 d-none d-sm-inline">Office</span>
            </Link>
          </li>

          <li
            onClick={() => toggleSidebar("officelevel")}
            className={`nav-item ${active === "officelevel" ? "active" : ""}`}
          >
            <Link to="/officelevel" className="nav-link px-0 align-middle">
              <RiHome2Line />
              <span className="ms-1 d-none d-sm-inline">Office Level</span>
            </Link>
          </li>


          <li
            onClick={() => toggleSidebar("role")}
            className={`nav-item ${active === "role" ? "active" : ""}`}
          >
            <Link to="/role" className="nav-link px-0 align-middle">
              <Policy />

              <span className="ms-1 d-none d-sm-inline">Role</span>
            </Link>
          </li>
          <li
            onClick={() => toggleSidebar("Office Account Details")}
            className={`nav-item ${active === "Office Account Details" ? "active" : ""
              }`}
          >
            <Link
              to="/officeaccountdetails"
              className="nav-link px-0 align-middle"
            >
              <Policy />

              <span className="ms-1 d-none d-sm-inline">
                Office Account Details
              </span>
            </Link>
          </li>
          <li
            onClick={() => toggleSidebar("Other Office")}
            className={`nav-item ${active === "Other Office" ? "active" : ""}`}
          >
            <Link to="/otheroffice" className="nav-link px-0 align-middle">
              <Policy />

              <span className="ms-1 d-none d-sm-inline">Other Office</span>
            </Link>
          </li>
          <li
            onClick={() => toggleSidebar("user")}
            className={`nav-item ${active === "user" ? "active" : ""}`}
          >
            <Link to="/user" className="nav-link px-0 align-middle">
              <Policy />

              <span className="ms-1 d-none d-sm-inline">User</span>
            </Link>
          </li>

        </ul>
      </div>
    )
  }

  else if (RoleId === "2") {
    return (
      <div className="sidebar">
        <ul
          className="navbar-nav bg-black sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to="/"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink" />
            </div>
            <div className="sidebar-brand-text mx-3">
              User Module Office Gurugram
            </div>
          </Link>
          <li
            onClick={() => toggleSidebar("home")}
            className={`nav-item ${active === "home" ? "active" : ""}`}
          >
            <Link to="/" className="nav-link px-0 align-middle">
              <Dashboard />
              <span className="ms-1 d-none d-sm-inline">Home</span>
            </Link>
          </li>
          <li
            onClick={() => toggleSidebar("title")}
            className={`nav-item ${active === "title" ? "active" : ""}`}
          >
            <Link to="/title" className="nav-link px-0 align-middle">
              <Cases />
              <span className="ms-1 d-none d-sm-inline">Title</span>
            </Link>
          </li>

          <li
            onClick={() => toggleSidebar("designation")}
            className={`nav-item ${active === "designation" ? "active" : ""}`}
          >
            <Link to="/designation" className="nav-link px-0 align-middle">
              <Cases />
              <span className="ms-1 d-none d-sm-inline">Designation</span>
            </Link>
          </li>

          <li
            onClick={() => toggleSidebar("district")}
            className={`nav-item ${active === "district" ? "active" : ""}`}
          >
            <Link to="/district" className="nav-link px-0 align-middle">
              <Cases />
              <span className="ms-1 d-none d-sm-inline">District</span>
            </Link>
          </li>
          <li
            onClick={() => toggleSidebar("officetype")}
            className={`nav-item ${active === "officetype" ? "active" : ""}`}
          >
            <Link to="/officetype" className="nav-link px-0 align-middle">
              <Cases />
              <span className="ms-1 d-none d-sm-inline">Office Type</span>
            </Link>
          </li>
          <li
            onClick={() => toggleSidebar("rtidesignation")}
            className={`nav-item ${active === "rtidesignation" ? "active" : ""}`}
          >
            <Link to="/rtidesignation" className="nav-link px-0 align-middle">
              <Cases />
              <span className="ms-1 d-none d-sm-inline">RTI Designation</span>
            </Link>
          </li>

          <li
            onClick={() => toggleSidebar("state")}
            className={`nav-item ${active === "state" ? "active" : ""}`}
          >
            <Link to="/state" className="nav-link px-0 align-middle">
              <Cases />
              <span className="ms-1 d-none d-sm-inline">State</span>
            </Link>
          </li>

          <li
            onClick={() => toggleSidebar("ddotype")}
            className={`nav-item ${active === "ddotype" ? "active" : ""}`}
          >
            <Link to="/ddotype" className="nav-link px-0 align-middle">
              <Subject />
              <span className="ms-1 d-none d-sm-inline">DDO Type</span>
            </Link>
          </li>

          <li
            onClick={() => toggleSidebar("officeunit")}
            className={`nav-item ${active === "officeunit" ? "active" : ""}`}
          >
            <Link to="/officeunit" className="nav-link px-0 align-middle">
              <InsertChartIcon />
              <span className="ms-1 d-none d-sm-inline">Office Unit</span>
            </Link>
          </li>
          <li
            onClick={() => toggleSidebar("module")}
            className={`nav-item ${active === "module" ? "active" : ""}`}
          >
            <Link to="/Module" className="nav-link px-0 align-middle">
              <InsertChartIcon />
              <span className="ms-1 d-none d-sm-inline">Module</span>
            </Link>
          </li>



          <li
            onClick={() => toggleSidebar("officelevel")}
            className={`nav-item ${active === "officelevel" ? "active" : ""}`}
          >
            <Link to="/officelevel" className="nav-link px-0 align-middle">
              <RiHome2Line />
              <span className="ms-1 d-none d-sm-inline">Office Level</span>
            </Link>
          </li>


          <li
            onClick={() => toggleSidebar("role")}
            className={`nav-item ${active === "role" ? "active" : ""}`}
          >
            <Link to="/role" className="nav-link px-0 align-middle">
              <Policy />

              <span className="ms-1 d-none d-sm-inline">Role</span>
            </Link>
          </li>
          <li
            onClick={() => toggleSidebar("Office Account Details")}
            className={`nav-item ${active === "Office Account Details" ? "active" : ""
              }`}
          >
            <Link
              to="/officeaccountdetails"
              className="nav-link px-0 align-middle"
            >
              <Policy />

              <span className="ms-1 d-none d-sm-inline">
                Office Account Details
              </span>
            </Link>
          </li>
          <li
            onClick={() => toggleSidebar("Other Office")}
            className={`nav-item ${active === "Other Office" ? "active" : ""}`}
          >
            <Link to="/otheroffice" className="nav-link px-0 align-middle">
              <Policy />

              <span className="ms-1 d-none d-sm-inline">Other Office</span>
            </Link>
          </li>

        </ul>
      </div>
    )

  }
  else if (RoleId === "3") {
    return (
      <div className="sidebar">
        <ul
          className="navbar-nav bg-black sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to="/"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink" />
            </div>
            <div className="sidebar-brand-text mx-3">
              User Module Office Gurugram
            </div>
          </Link>
          <li
            onClick={() => toggleSidebar("home")}
            className={`nav-item ${active === "home" ? "active" : ""}`}
          >
            <Link to="/" className="nav-link px-0 align-middle">
              <Dashboard />
              <span className="ms-1 d-none d-sm-inline">Home</span>
            </Link>
          </li>
          <li
            onClick={() => toggleSidebar("title")}
            className={`nav-item ${active === "title" ? "active" : ""}`}
          >
            <Link to="/title" className="nav-link px-0 align-middle">
              <Cases />
              <span className="ms-1 d-none d-sm-inline">Title</span>
            </Link>
          </li>

          <li
            onClick={() => toggleSidebar("designation")}
            className={`nav-item ${active === "designation" ? "active" : ""}`}
          >
            <Link to="/designation" className="nav-link px-0 align-middle">
              <Cases />
              <span className="ms-1 d-none d-sm-inline">Designation</span>
            </Link>
          </li>

          <li
            onClick={() => toggleSidebar("district")}
            className={`nav-item ${active === "district" ? "active" : ""}`}
          >
            <Link to="/district" className="nav-link px-0 align-middle">
              <Cases />
              <span className="ms-1 d-none d-sm-inline">District</span>
            </Link>
          </li>
          <li
            onClick={() => toggleSidebar("officetype")}
            className={`nav-item ${active === "officetype" ? "active" : ""}`}
          >
            <Link to="/officetype" className="nav-link px-0 align-middle">
              <Cases />
              <span className="ms-1 d-none d-sm-inline">Office Type</span>
            </Link>
          </li>
          <li
            onClick={() => toggleSidebar("rtidesignation")}
            className={`nav-item ${active === "rtidesignation" ? "active" : ""}`}
          >
            <Link to="/rtidesignation" className="nav-link px-0 align-middle">
              <Cases />
              <span className="ms-1 d-none d-sm-inline">RTI Designation</span>
            </Link>
          </li>

          <li
            onClick={() => toggleSidebar("state")}
            className={`nav-item ${active === "state" ? "active" : ""}`}
          >
            <Link to="/state" className="nav-link px-0 align-middle">
              <Cases />
              <span className="ms-1 d-none d-sm-inline">State</span>
            </Link>
          </li>

          <li
            onClick={() => toggleSidebar("ddotype")}
            className={`nav-item ${active === "ddotype" ? "active" : ""}`}
          >
            <Link to="/ddotype" className="nav-link px-0 align-middle">
              <Subject />
              <span className="ms-1 d-none d-sm-inline">DDO Type</span>
            </Link>
          </li>

          <li
            onClick={() => toggleSidebar("office")}
            className={`nav-item ${active === "office" ? "active" : ""}`}
          >
            <Link to="/office" className="nav-link px-0 align-middle">
              <InsertChartIcon />
              <span className="ms-1 d-none d-sm-inline">Office</span>
            </Link>
          </li>

          <li
            onClick={() => toggleSidebar("officeunit")}
            className={`nav-item ${active === "officeunit" ? "active" : ""}`}
          >
            <Link to="/officeunit" className="nav-link px-0 align-middle">
              <InsertChartIcon />
              <span className="ms-1 d-none d-sm-inline">Office Unit</span>
            </Link>
          </li>
          <li
            onClick={() => toggleSidebar("module")}
            className={`nav-item ${active === "module" ? "active" : ""}`}
          >
            <Link to="/Module" className="nav-link px-0 align-middle">
              <InsertChartIcon />
              <span className="ms-1 d-none d-sm-inline">Module Office</span>
            </Link>
          </li>


          <li
            onClick={() => toggleSidebar("officelevel")}
            className={`nav-item ${active === "officelevel" ? "active" : ""}`}
          >
            <Link to="/officelevel" className="nav-link px-0 align-middle">
              <RiHome2Line />
              <span className="ms-1 d-none d-sm-inline">Office Level</span>
            </Link>
          </li>



        </ul>
      </div>
    )

  }


  return (
    <div></div>

  );
}
