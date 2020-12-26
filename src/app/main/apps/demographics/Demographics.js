import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom'

function Demographics() {
    const history = useHistory();
    const onContinue = useCallback(() => history.push('/declaration'), [history]);
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
                            onContinue()
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