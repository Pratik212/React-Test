import "./App.css";
import React from "react";
// import Header from "./app/main/apps/header/Header";
// import Content from "./app/main/apps/content/Content";
// import Sidebar from "./app/main/apps/sidebar/Sidebar";
import {BrowserRouter} from 'react-router-dom';
import Content from "./app/main/apps/content/Content";

function App() {
    return (
        <BrowserRouter >
            <div className="w-100" >
                <Content/>
            </div>
        </BrowserRouter>
    );
}

export default App;