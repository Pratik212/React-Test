import React, {useState} from "react";
import Sidebar from "../sidebarDetails/Sidebar";
import Property from "../propertyDetails/property";
import Route from "./Route";
import PersonalDetail from "../personalDetails/PersonalDetail";
import FinancialDetails from "../financialDetails/FinancialDetails";
import {Switch} from "react-router-dom";
import Demographics from "../demographicsDetails/Demographics";
import Declaration from "../declaration/Declartion";
import Summary from "../summaryDetails/Summary";

function Content() {
    const [sidebar, setSidebar] = useState(true);
    const activeStatus = (status) => {
        setSidebar(status);
    }

    return (
        <>
            <div className="w-full">
                <Sidebar sidebarActiveStatus={activeStatus}/>
                <div className="justify-content-end d-flex" style={{marginLeft: sidebar ? 250 : 0}}>
                    <Switch>
                        <Route path="/personalDetail" exact={true} component={PersonalDetail}/>

                        <Route path="/propertyDetail" exact={true} component={Property}/>

                        <Route path="/financialDetail" exact={true} component={FinancialDetails}/>

                        <Route path="/demographics" exact={true} component={Demographics}/>

                        <Route path="/declaration" exact={true} component={Declaration}/>

                        <Route path="/summary" exact={true} component={Summary}/>

                        <Route component={Property}/>
                    </Switch>
                </div>
            </div>
        </>
    );
}

export default Content;