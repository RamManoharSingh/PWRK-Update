import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import Router from "./routes/routes";
import { useEffect } from "react";
import routeNames from "./routes/routeName";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  let checkLogin = () => {
    let token = localStorage.getItem("token");
    console.log("check login ran ", token);
    if (token && token !== "") {
      navigate(routeNames.DASHBOARD);
    } else {
      //localStorage.clear()
      navigate(routeNames.LOGIN);
    }
  };
  useEffect(() => {
    function handleContextMenu(e) {
      e.preventDefault(); // prevents the default right-click menu from appearing
    }
    // add the event listener to the component's root element
    const rootElement = document.getElementById('my-component');
    rootElement.addEventListener('contextmenu', handleContextMenu);
    // remove the event listener when the component is unmounted

    return () => {
      rootElement.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
  useEffect(() => {
    let cuurrentRoute = location.pathname;
    if (
      !cuurrentRoute.includes(routeNames.RESETPASSWORD) &&
      !cuurrentRoute.includes(routeNames.USERRESETPASSWORD)
      && !cuurrentRoute.includes(routeNames.SIGNUP)
    ) {
      checkLogin();
    }
  }, []);

  return (<div id="mycomponent">
    <Router />
  </div>

  )
}

export default App;
