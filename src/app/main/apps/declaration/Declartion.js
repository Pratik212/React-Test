import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom'

function Declaration() {
    const history = useHistory();
    const onContinue = useCallback(() => history.push('/summary'), [history]);
    return (
        <>
            <div className="container-fluid">
                <div className="justify-content-center d-flex">
                    <h3>"These are Declaration details."</h3>
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

export default Declaration;