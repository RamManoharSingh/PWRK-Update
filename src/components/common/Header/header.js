import { Button } from "@mui/material";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCog, faEnvelopeOpen, faSearch, faSignOutAlt, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { Row, Col, Nav, Form, Image, Navbar, Dropdown, Container, ListGroup, InputGroup } from '@themesberg/react-bootstrap';
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import Routes from "../../../routes/routeName";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import SettingsIcon from "@mui/icons-material/Settings";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import axios from "axios";
import { Modes } from "../../common/Constants/Modes";
import { useEffect, useState } from "react";
import { Login } from "../../dashboard/Login/login";
import Profile3 from "../../../assets/profile-picture-1.jpg"

export default function Header(props) {
  const navigate = useNavigate();
  let userName = localStorage.getItem("UserName");


  const handlePassword = () => {
    navigate(Routes.CHANGEPASSWORD)
  };



  const handleModal = async () => {
    let UserId = localStorage.getItem("UserId");
    console.log(UserId);
    if (UserId > 0) {
      let result = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}UserProfile/Get/${UserId}`
      );
      console.log(result, "Ram123");
      const option = {
        replace: true,
        state: {
          mode: Modes.edit,
          userData: result.data,
        },
      };
      navigate(Routes.CREATEUSER, option);
    }
  };

  function Logout() {
    Swal.fire({
      title:
        "Select 'Logout' below if you are ready to end your current session.?",
      showCancelButton: true,
      icon: "warning",
      confirmButtonText: "Logout",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigate(Routes.LOGIN).then((res) => {
          Swal.fire(res.data);
        });
      }
    });
  }

  return (
    <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
      <Container fluid className="px-0">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center">
            <Form className="navbar-search">
              <Form.Group id="topbarSearch">
                <InputGroup className="input-group-merge search-bar">
                  <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                  <Form.Control type="text" placeholder="Search" />
                </InputGroup>
              </Form.Group>
            </Form>
          </div>
          <Nav className="align-items-center">

            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                <div className="media d-flex align-items-center">
                  <Image src={Profile3} className="user-avatar md-avatar rounded-circle" />
                  <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                    <span className="mb-0 font-small fw-bold">Bonnie Green</span>
                  </div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faUserCircle} className="me-2" /> My Profile
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faCog} className="me-2" /> Settings
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faEnvelopeOpen} className="me-2" /> Messages
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faUserShield} className="me-2" /> Support
                </Dropdown.Item>

                <Dropdown.Divider />

                <Dropdown.Item className="fw-bold" as={Link} onClick={Logout}>
                  <FontAwesomeIcon icon={faSignOutAlt} className="text-danger me-2" /> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}
