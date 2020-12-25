import React from 'react';
import {Switch} from 'react-router-dom';
import Route from './Route';
import Property from "../main/apps/property/property";
import PersonalDetail from "../main/apps/personalDetails/PersonalDetail";
import FinancialDetails from "../main/apps/financialDetails/FinancialDetails";


export default function Routes() {

    return (
        <Switch>

            <Route path="/" exact component={PersonalDetail}/>

            <Route path="/property" exact component={Property}/>

            <Route path="/financialDetail" exact component={FinancialDetails}/>

        </Switch>
    );
}
