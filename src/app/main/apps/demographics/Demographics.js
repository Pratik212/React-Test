import React from 'react';
import history from "../@history/@history";

function Demographics() {
    return (
        <>
            <div className="container-fluid">
                <div className="justify-content-center d-flex">
                    <h3>"These are Demographics details."</h3>
                </div>
                <hr/>
                <div
                    className="align-items-start d-flex"
                    style={{marginTop: "20%"}}
                >
                    <button
                        type="submit"
                        className="btn"
                        onClick={() => {
                            history.push('/declaration')
                            window.location.reload()
                        }}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </>
    )
}

export default Demographics;