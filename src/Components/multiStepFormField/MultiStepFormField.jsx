import React, {useState, useCallback, useMemo, useEffect, useActionState} from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

/**
 * 
 * first_name: '',
        last_name: '',
        email: '',
        date_of_birth: '',
        phone_number: '',
        address: '',
        experience: ''
 */

const MultiStepFormField=() => {
    const defaultState={
        form: [
            {
                first_name: '',
                last_name: '',
                email: '',
                date_of_birth: '',
                phone_number: ''
            },
            {
                address: ''
            },
            {
                experience: ''
            }
        ],
        step: 1
    }

    const intitialState=useMemo(() => {
        if (localStorage.getItem("form")) {
            const data=JSON.parse(localStorage.getItem("form"))
            return data
        } else {
            return defaultState.form
        }
    }, [])

    const initialFormStep=useMemo(() => {
        if (localStorage.getItem("formStep")) {
            const data=JSON.parse(localStorage.getItem("formStep"))
            return data
        } else {
            return defaultState.step
        }
    }, [])

    const [step, setStep]=useState(initialFormStep)
    const [formData, updateFormDataAction]=useActionState((prevState, payload) => {
        const data=prevState
        data[payload.currentStep]={
            ...data[payload.currentStep],
            [payload.fieldName]: payload.fieldValue
        }
        return data
    }, intitialState)

    useEffect(() => {
        localStorage.setItem('form', JSON.stringify(formData))
        localStorage.setItem('formStep', JSON.stringify(step))
    }, [formData, step])

    const updateFormDataHandler=useCallback((fieldName, fieldValue, currentStep) => {
        updateFormDataAction({fieldName, fieldValue, currentStep})
    }, [updateFormDataAction])

    const prevBtnHandler=() => {
        setStep(step-1)
    }

    const nextBtnHandler=() => {
        setStep(step+1)
    }

    const submitHandler=() => {
        // make API call
    }
    return <div>
        <div>ProgressBar</div>
        <div style={{marginTop: 12}} >
            {step===1&&<Step1 currentStep={step-1} formData={formData[step-1]} updateFormData={updateFormDataHandler} />}
            {step===2&&<Step2 currentStep={step-1} formData={formData[step-1]} updateFormData={updateFormDataHandler} />}
            {step===3&&<Step3 currentStep={step-1} formData={formData[step-1]} updateFormData={updateFormDataHandler} />}
        </div>
        <div style={{marginTop: 12, display: "flex", justifyContent: "space-between"}} >
            {step>1&&<button onClick={prevBtnHandler} >Prev Step</button>}
            {step<3&&<button onClick={nextBtnHandler} >Next Step</button>}
            {step==3&&<button onClick={submitHandler}>Submit</button>}
        </div>
    </div>
}

export default MultiStepFormField
