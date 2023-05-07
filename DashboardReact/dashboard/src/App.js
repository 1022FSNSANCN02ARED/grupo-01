import React from "react";
import Main from "./components/Main.jsx";
import SideBar from "./components/SideBar.jsx";
//import MainContent from "./components/MainContent.jsx";



import './styles.css';
import './styles_login.css';
import './admin.css';


function App() {
  return (
    <body className="dashboard">
      <SideBar />
      <div className="a-panel-dashboard">
      <Main/>
      </div> 
    </body>
  );
}

export default App;
