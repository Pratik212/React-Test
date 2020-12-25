import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Property from "../property/property";
import Route from "../../../routes/Route";
import PersonalDetail from "../personalDetails/PersonalDetail";
import FinancialDetails from "../financialDetails/FinancialDetails";
import {Switch} from "react-router-dom";
import Demographics from "../demographics/Demographics";
import Declaration from "../declaration/Declartion";
import Summary from "../summary/Summary";

function Content() {
    return (
        <>
            <div className="container-fluid">
                <div className="w-full">
                    <Sidebar/>
                    <div className="justify-content-end d-flex">
                        <Switch>
                            <Route path="/personalDetail" component={PersonalDetail}/>

                            <Route path="/property" exact component={Property}/>

                            <Route path="/financialDetail" exact component={FinancialDetails}/>

                            <Route path="/demographics" exact component={Demographics}/>

                            <Route path="/declaration" exact component={Declaration}/>

                            <Route path="/summary" exact component={Summary}/>

                            <Route component={Property}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;