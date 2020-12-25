import React, {useEffect, useState} from 'react';
import './property.css'
import history from "../@history/@history";

function Property() {

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

            history.push('/financialDetail')
            window.location.reload()

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
        } else if (values.propertyValue >= 10000000000) {
            errors.propertyValue = "property Value must be $10000000000";
        }

        if (!values.downPayment) {
            errors.downPayment = "Required field!";
        } else if (values.downPayment > values.propertyValue) {
            errors.downPayment = "Invalid DownPayment";
        }

        if (!values.downPaymentPercentage) {
            errors.downPaymentPercentage = "Required field!";
        } else if (values.downPaymentPercentage > 100) {
            errors.downPaymentPercentage = "Enter valid percentage";
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
            <div className="bg-light justify-content-end col-md-10" style={{height:'87vh'}}>
                <h3>"These are Property details."</h3>
                <hr/>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="row">
                        <div className="col-md-4 mt-4 mb-4">
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
                        <div className="col-md-4">
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
                        <div className="col-md-4">

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
                        <div className="col-md-4 mt-4 mb-4">
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
                        <div className="col-md-4">
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
        </>
    )
}

export default Property