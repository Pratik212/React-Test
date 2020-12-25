import "./App.css";
import React from "react";
// import Header from "./app/main/apps/header/Header";
// import Content from "./app/main/apps/content/Content";
// import Sidebar from "./app/main/apps/sidebar/Sidebar";
import {BrowserRouter} from "react-router-dom";
import Content from "./app/main/apps/content/Content";
import Sidebar from "./app/main/apps/sidebar/Sidebar";


function App() {
    return (
        <BrowserRouter>
                <div className="container-fluid mt-4" >
                    <div>
                        <Content/>
                    </div>
                </div>
        </BrowserRouter>
    );
}

export default App;