import React from "react";
import logo from "../../../../img/logo-small-with-name.png";

function Header() {
    return (
        <>
            <div className="justify-content-center">
                <nav className="navbar navbar-light" style={{backgroundColor: '#31B0D5'}}>
                    <a className="navbar-brand" href="#">
                        <img
                            src={logo}
                            width= "120"
                            height="30"
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