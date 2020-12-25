import React from "react";
import logo from "../../../../img/nature.jpg";

function Header() {
    return (
        <>
            <div className="justify-content-center">
                <nav className="navbar navbar-light" style={{backgroundColor: '#324AB3'}}>
                    <a className="navbar-brand" href="#">
                        <img
                            src={logo}
                            width= "100"
                            height="50"
                            className="d-inline-block align-top"
                            alt=""
                            loading="lazy"
                        />
                    </a>
                    <form className="form-inline">
                        <span className="navbar-toggler-icon" />
                    </form>
                </nav>
            </div>
        </>
    );
}

export default Header;