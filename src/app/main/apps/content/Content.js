import React, {useEffect, useState} from "react";
import "./Content.css";
import {NavLink} from "react-router-dom";

function Content() {

    const initialValues = {
        propertyValue: "",
        downPayment: "",
        downPaymentPercentage: "",
        selectPurpose: {
            1: 1,
            2: 2,
            3: 3
        },
        selectProperty: {
            1: 'Single Family House',
            2: 'Multi Family House',
            3: 'Condominium'
        }
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitForm = () => {
        console.log(formValues);
    };

    const handleChange = (e) => {
        console.log("value of element:===", e.target.value);
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    };

    const validate = (values) => {
        let errors = {};
        if (!values.propertyValue) {
            errors.propertyValue = "Required field!";
        }else if (values.propertyValue <= 10000000000) {
            errors.propertyValue = "property Value must be more than $10000000000";
        }

        if (!values.downPayment) {
            errors.downPayment = "Required field!";
        }else if (values.downPayment > values.propertyValue) {
            errors.downPayment = "Invalid DownPayment";
        }

        if (!values.downPaymentPercentage) {
            errors.downPaymentPercentage = "Required field!";
        }else if (values.downPaymentPercentage > 100) {
            errors.downPaymentPercentage = "enter valid percentage";
        }
        return errors;
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submitForm();
        }
    }, [formErrors]);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 bg-light " style={{height: "85vh"}}>
                        <div className="content w-100">
                            <NavLink style={{color: 'black'}} to="/">
                                Personal Details
                            </NavLink>
                        </div>
                        <div className="content w-100">
                            <NavLink style={{color: 'black'}} to="/" >
                                Property Details
                            </NavLink>
                        </div>
                        <div className="content">
                            <NavLink style={{color: 'black'}} to="/">
                                Financial Details
                            </NavLink>
                        </div>
                        <div className="content">
                            <NavLink style={{color: 'black'}} to="/">
                                Demographics
                            </NavLink>
                        </div>
                        <div className="content">
                            <NavLink style={{color: 'black'}} to="/">
                                Declarations
                            </NavLink>
                        </div>
                        <div className="content">
                            <NavLink style={{color: 'black'}} to="/">
                                Summary
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="row">
                                <div className="col-md-6 mt-4 mb-4">
                                    {Object.keys(formErrors).length === 0 && isSubmitting && (
                                        <span className="success-msg" style={{color: 'green'}}>Submited Data</span>
                                    )}
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Property Value"
                                        name="propertyValue"
                                        value={formValues.propertyValue}
                                        onChange={handleChange}
                                    />
                                    {formErrors.propertyValue && (
                                        <span className="error text-danger">{formErrors.propertyValue}</span>
                                    )}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="DownPayment-$"
                                        name="downPayment"
                                        value={formValues.downPayment}
                                        onChange={handleChange}
                                    />
                                    {formErrors.downPayment && (
                                        <span className="error text-danger">{formErrors.downPayment}</span>
                                    )}
                                </div>
                                <div className="col">

                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="DownPayment-%"
                                        name="downPaymentPercentage"
                                        onChange={handleChange}
                                        value={formValues.downPaymentPercentage}
                                        max="100" accuracy="2" min="0"
                                        style={{textAlign: 'left'}}

                                    />


                                    {formErrors.downPaymentPercentage && (
                                        <span className="error text-danger">{formErrors.downPaymentPercentage}</span>
                                    )}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mt-4 mb-4">
                                    <div className="dropdown d-flex align-items-start">
                                        <select className="w-100 select-dropdown" name="selectPurpose"
                                                onChange={handleChange} value={formValues.selectPurpose}>
                                            <option name="selectPurpose" value="N/A">Purpose</option>
                                            <option name="selectPurpose" value={formValues.selectPurpose["1"]}>1
                                            </option>
                                            <option name="selectPurpose" value={formValues.selectPurpose["2"]}>2
                                            </option>
                                            <option name="selectPurpose" value={formValues.selectPurpose["3"]}>3
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6" style={{width: '100%'}}>
                                    <div className="dropdown d-flex align-items-start">
                                        <select name="selectProperty" onChange={handleChange}
                                                value={formValues.selectProperty}
                                                className="w-100 select-dropdown">
                                            <option name="selectProperty" value="N/A">Type of Property</option>
                                            <option name="selectProperty"
                                                    value={formValues.selectProperty["Single Family House"]}>Single
                                                Family House
                                            </option>
                                            <option name="selectProperty"
                                                    value={formValues.selectProperty["Multi Family House"]}>Multi
                                                Family House
                                            </option>
                                            <option name="selectProperty"
                                                    value={formValues.selectProperty["Condominium"]}>Condominium
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="align-items-start d-flex"
                                style={{marginTop: "20%"}}
                            >
                                <button
                                    type="submit"
                                    className="btn"
                                >
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;