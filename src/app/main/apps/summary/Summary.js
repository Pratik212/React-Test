import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom'

function Summary() {
    const history = useHistory();
    const onContinue = useCallback(() => history.push('/personalDetail'), [history]);
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
                        onContinue()
                    }}
                >
                    Continue
                </button>
            </div>
        </>
    )
}

export default Summary;