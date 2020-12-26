import React, {useEffect, useState, useCallback} from 'react';
import Select from 'react-select';
import './property.css'
import {useHistory} from 'react-router-dom'
function Property() {
    const history = useHistory();
    const initialValues = {
        propertyValue: "",
        downPayment: "",
        downPaymentPercentage: "",
    };
    const selectPurpose = [
        {value: 'purpose', label: 'Purpose'},
        {value: 'blue', label: 'Blue'},
        {value: 'purple', label: 'Purple'},
        {value: 'red', label: 'Red'},
        {value: 'orange', label: 'Orange'},
        {value: 'yellow', label: 'Yellow'},
        {value: 'green', label: 'Green'},
        {value: 'forest', label: 'Forest'},
        {value: 'slate', label: 'Slate'},
        {value: 'silver', label: 'Silver'},
    ]


    const selectProperty = [
        {value: 'SingleFamilyHouse', label: 'Single Family House'},
        {value: 'MultiFamilyHouse', label: 'Multi Family House'},
        {value: 'Condominium', label: 'Condominium'}
    ]

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submitForm();
        }
    }, [formErrors]);

    const submitForm = useCallback(() => history.push('/financialDetail'), [history]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleSelectChange = (e, name) => {
        const {value} = e;
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

    return (
        <>
            <div className="col-md-12 bg-white" style={{height: '87vh'}}>
                <h3>"These are Property details."</h3>
                <hr/>

                <form onSubmit={handleSubmit} noValidate>
                    <div className="row">
                        <div className="col-md-4 mt-4 mb-2">
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
                        <div className="col-md-4  mb-2 mt-2">
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
                        <div className="col-md-4 mb-2 mt-2">

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

                        <div className="col-md-4 mt-2 mb-2">
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                defaultValue={selectPurpose[0]}
                                isDisabled={false}
                                isLoading={false}
                                isClearable={false}
                                isRtl={false}
                                isSearchable={true}
                                name="selectPurpose"
                                options={selectPurpose}
                                onChange={(e) => handleSelectChange(e, 'selectPurpose')}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mt-2">
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                defaultValue={selectProperty[0]}
                                isDisabled={false}
                                isLoading={false}
                                isClearable={false}
                                isRtl={false}
                                isSearchable={true}
                                name="selectPurpose"
                                options={selectProperty}
                                onChange={(e) => handleSelectChange(e, 'selectProperty')}
                            />

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