import "./App.css";
import React from "react";
import Header from "./app/main/apps/header/Header";
import Content from "./app/main/apps/content/Content";
import {BrowserRouter} from "react-router-dom";
function App() {
    return (
        <>
            <BrowserRouter>
            <div className="App">
                <div className="container mt-4" >
                    <div>
                        <Header />
                    </div>
                    <div>
                        <Content />
                    </div>
                </div>
            </div>
            </BrowserRouter>
        </>
    );
}

export default App;