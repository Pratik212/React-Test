import React from 'react';
import history from '../@history/@history'

function Summary() {
    return (
        <>
            <div className="container-fluid">
                <div className="justify-content-center d-flex">
                    <h3>"These are Summary details."</h3>
                </div>
                <hr/>
            </div>

            <div
                className="align-items-start d-flex"
                style={{marginTop: "20%"}}
            >
                <button
                    type="submit"
                    className="btn"
                    onClick={() => {
                        history.push('/personalDetail')
                        window.location.reload()
                    }}
                >
                    Continue
                </button>
            </div>
        </>
    )
}

export default Summary;