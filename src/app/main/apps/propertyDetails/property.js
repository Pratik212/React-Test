import React, {useCallback, useEffect, useRef, useState} from 'react';
import Select from 'react-select';
import './property.css'
import {useHistory} from 'react-router-dom'
import {Formik} from "formik";


// eslint-disable-next-line react-hooks/rules-of-hooks

const Property = () => {
    const history = useHistory();

    const cachedHits = localStorage.getItem('propertyDetails');

    const [initialValues, setInitialValues] = useState(
        JSON.parse(cachedHits || '""') ||{
            propertyValue: null,
            downPayment: null,
            downPaymentPercentage: null,
            selectPurpose: {
                "value": 0,
                "label": "1"
            },
            selectProperty: {
                "value": 0,
                "label": "Single Family House"
            },
        }
    );

    const formRef = useRef();
    const [formValues, setFormValues] = useState(initialValues);

    const validate = (values) => {
        let errors = {};
        if (!values.propertyValue) {
            errors.propertyValue = "Property field is required!";
        } else if (Number(values.propertyValue) >= 10000000000) {
            errors.propertyValue = "Property value must be $10000000000";
        }

        if (!values.downPayment) {
            errors.downPayment = "DownPayment field is required!";
        } else if (Number(values.downPayment) > Number(values.propertyValue)) {
            errors.downPayment = "The downPayment should be less than the property!";
        }

        if (!values.downPaymentPercentage) {
            errors.downPaymentPercentage = "Percentage field is required!";
        } else if (values.downPaymentPercentage > 100) {
            errors.downPaymentPercentage = "The value of Percentage should be 100 or less";
        }
        return errors;
    };

// eslint-disable-next-line react-hooks/rules-of-hooks
    const submitForm = useCallback((value) => {
        console.log(value);
        history.push('/financialDetail')
    }, [history]);

    const selectPurpose = [
        {value: 0, label: '1'},
        {value: 1, label: '2'},
        {value: 2, label: '3'},
    ]

    const selectProperty = [
        {value: 0, label: 'Single Family House'},
        {value: 1, label: 'Multi Family House'},
        {value: 2, label: 'Condominium'}
    ]



    useEffect(() => {
        localStorage.setItem('propertyDetails', JSON.stringify(formValues));
    }, [formValues]);

    const handleSelectChange = (e, name) => {
        const {value} = e;
        setFormValues({...formValues, [name]: value});
    };

    const handleInputChange = (e) => {
        const {value, name } = e.target;
        const { values } = formRef.current;
        formRef.current.handleChange(e);
        switch (name) {
            case 'downPaymentPercentage' :
                const newAmount = value / 100 * values.propertyValue // Assuming fullPrice set in state
                setFormValues({...formValues, [name]: value, downPayment: newAmount})
                formRef.current.setFieldValue('downPayment', newAmount);
                break
            case 'downPayment' :
                const newPercent = (value * 100) / values.propertyValue
                setFormValues({...formValues, [name]: value, downPaymentPercentage: newPercent})
                formRef.current.setFieldValue('downPaymentPercentage', newPercent);
                break
            default:
                setFormValues({...formValues, [name]: value});
                break
        }

    };

    return (

        <Formik
            initialValues={formValues}
            validate={validate}
            onSubmit={submitForm}
            innerRef={formRef}
            validateOnChange={true}

        >


            {(formik) => {
                const {
                    values,
                    handleChange,
                     handleSubmit,
                    errors,
                    touched,
                    handleBlur,
                } = formik;

                return (

                    <div className="col-md-12 bg-white" style={{height: '87vh'}}>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-4 mt-4 mb-2">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Property Value"
                                        name="propertyValue"
                                        value={values.propertyValue}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                    />

                                    {errors.propertyValue && touched.propertyValue && (
                                        <span className="error  text-danger">{errors.propertyValue}</span>
                                    )}

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4  mb-2 mt-4">
                                    <span>$</span> <input
                                        type="number"
                                        className="form-control"
                                        placeholder="DownPayment"
                                        name="downPayment"
                                        value={values.downPayment}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.downPayment && touched.downPayment && (
                                        <span className="error text-danger">{errors.downPayment}</span>
                                    )}
                                </div>
                                <div className="col-md-4 mb-2 mt-4">
                                    <span className="percent">%</span>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="DownPayment - "
                                        name="downPaymentPercentage"
                                        onChange={handleInputChange}
                                        value={values.downPaymentPercentage}
                                        style={{textAlign: 'left'}}
                                        onBlur={handleBlur}
                                    />
                                    {errors.downPaymentPercentage && touched.downPaymentPercentage && (
                                        <span className="error text-danger">{errors.downPaymentPercentage}</span>
                                    )}

                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-4 mt-4 mb-2">
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={values.selectPurpose ? selectPurpose[values.selectPurpose] : selectPurpose[0]}
                                        isDisabled={false}
                                        isLoading={false}
                                        isClearable={false}
                                        isRtl={false}
                                        isSearchable={true}
                                        // value={values.selectPurpose}
                                        name="selectPurpose"
                                        options={selectPurpose}
                                        onChange={selectedOption => {
                                            let event = { target : { name:'selectPurpose',value: selectedOption}}
                                            handleSelectChange(selectedOption, 'selectPurpose')
                                            handleChange(event)
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mt-4">
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={values.selectProperty ? selectProperty[values.selectProperty] : selectProperty[0]}
                                        isDisabled={false}
                                        isLoading={false}
                                        isClearable={false}
                                        isRtl={false}
                                        // value={values.selectProperty}
                                        isSearchable={true}
                                        name="selectPurpose"
                                        options={selectProperty}
                                        onChange={selectedOption => {
                                            let event = { target : { name:'selectProperty',value: selectedOption}}
                                            handleChange(event)
                                            handleSelectChange(selectedOption, 'selectProperty')
                                        }}
                                    />

                                </div>
                            </div>
                            {/*<pre>{JSON.stringify(values, null, ' ')}</pre>*/}
                            {/*<pre>{JSON.stringify(formValues, null, ' ')}</pre>*/}
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
                );
            }}
        </Formik>
    )
}

export default Property