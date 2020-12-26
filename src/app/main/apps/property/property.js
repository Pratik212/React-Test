import React, {useCallback, useEffect, useState} from 'react';
import Select from 'react-select';
import './property.css'
import {useHistory} from 'react-router-dom'

function Property() {
    const history = useHistory();
    // const initialValues = {
    //     propertyValue: "",
    //     downPayment: "",
    //     downPaymentPercentage: "",
    //     selectPurpose: "",
    //     selectProperty: "",
    // };
    const selectPurpose = [
        {value: 0, label: '1'},
        {value: 1, label: '2'},
        {value: 2, label: '3'},
    ]
    const cachedHits = localStorage.getItem('propertyValue');
    const [initialValues, setInitialValues] = React.useState(
        JSON.parse(cachedHits) || {
            propertyValue: "",
            downPayment: "",
            downPaymentPercentage: "",
            selectPurpose: "",
            selectProperty: "",
        }
    );
    const selectProperty = [
        {value: 0, label: 'Single Family House'},
        {value: 1, label: 'Multi Family House'},
        {value: 2, label: 'Condominium'}
    ]

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            localStorage.setItem('propertyValue', JSON.stringify(formValues));
            submitForm();
        }
    }, [formErrors]);

    const submitForm = useCallback(() => {
        history.push('/financialDetail')
    }, [history]);

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
            errors.propertyValue = "Property field is required!";
        } else if (values.propertyValue >= 10000000000) {
            errors.propertyValue = "property Value must be $10000000000";
        }

        if (!values.downPayment) {
            errors.downPayment = "DownPayment field is required!";
        } else if (values.downPayment > values.propertyValue) {
            errors.downPayment = "The downPayment should be less than the property!";
        }

        if (!values.downPaymentPercentage) {
            errors.downPaymentPercentage = "Percentage field is required!";
        } else if (values.downPaymentPercentage > 100) {
            errors.downPaymentPercentage = "The value of Percentage should be 100 or less";
        }
        return errors;
    };

    return (
        <>
            <div className="col-md-12 bg-white" style={{height: '87vh'}}>
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
                                defaultValue={formValues.selectPurpose ? selectPurpose[formValues.selectPurpose] : selectPurpose[0]}
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
                                defaultValue={formValues.selectProperty ? selectProperty[formValues.selectProperty] : selectProperty[0]}
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