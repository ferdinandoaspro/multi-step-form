import {useState, useEffect, useRef} from "react"
import StepOne from "../../components/steps/StepOne"
import StepTwo from "../../components/steps/StepTwo"
import StepThree from "../../components/steps/StepThree"
import StepFour from "../../components/steps/StepFour"
import planOptions from "../../assets/planOptions.json";
import addons from "../../assets/addons.json";

type Plan = {
    name: string,
    price: number
}

type Addon = Plan

interface FormData {
    name: string,
    email: string,
    phone: string,
    plan: Plan,
    yearly: boolean,
    addons: Addon[]
}

const useForm = () => {

    const initialFormData = {
        name: "",
        email: "",
        phone: "",
        plan: {
            name: "",
            price: 0
        },
        yearly: false,
        addons: []
    }
    
    const [stepCount, setStepCount] = useState(0)
    const [success, setSuccess] = useState(false)
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState<FormData>(initialFormData)

    const formRef = useRef<HTMLFormElement>(null)

    const getPrice = (itemName: string, yearly: boolean): number => {
        const selectedOption = planOptions.find(option => option.name === itemName) || addons.find(addon => addon.name === itemName)
        if (!selectedOption) return 0
        return yearly ? selectedOption.price.yearly : selectedOption.price.monthly
    };

    const effect = () => {
        setFormData(prev => ({
            ...prev,
            plan: {
                ...prev.plan,
                price: getPrice(prev.plan.name, prev.yearly)
            },
            addons: prev.addons.map(addon => ({
                ...addon,
                price: getPrice(addon.name, prev.yearly)
            }))
        }))
    }

    useEffect(effect, [formData.plan.name, formData.yearly])    

    const stepInfo = [
        {
            name: "YOUR INFO",
            legend: "Personal Info",
            description: "Please provide your name, email address, and phone number."
        },
        {
            name: "SELECT PLAN",
            legend: "Select your plan",
            description: "You have the option of monthly or yearly billing."
        },
        {
            name: "ADD-ONS",
            legend: "Pick add-ons",
            description: "Add-ons help enhance your gaming experience."
        },
        {
            name: "SUMMARY",
            legend: "Finishing up",
            description: "Double-check everything looks OK before confirming."
        }
    ]

    const validateSteps = () => {

        const errorList: {[key: string] : string} = {}
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        function isValidTel (value: number | bigint) {
            const local = window.navigator.language
            const formatter = new Intl.NumberFormat(local)
            const formattedNumber = formatter.format(value)
            const isValid = formattedNumber === formatter.format(Number(formattedNumber))
            return isValid
        }
 
        if (!formData.name) {
            errorList.name = "This field is required"
        } else if (formData.name.length < 2) {
            errorList.name = "Name is too short"
        }

        if (!formData.email) {
            errorList.email = "This field is required"
        } else if (!emailPattern.test(formData.email)) {
            errorList.email = "Invalid email format"
        }

        if (!formData.phone) {
            errorList.phone = "This field is required"
        } else if (!isValidTel(Number(formData.phone))) {
            errorList.phone = "Invalid number format"
        }

        if (stepCount === 1 && !formData.plan.name) {    
            errorList.plan = "Select a plan"
        }
        
        setErrors(prev => ({...prev, ...errorList}))
        if (Object.keys(errorList).length === 0) {
            return true
        } else {
            const firstInvalidInput = formRef.current?.querySelector(":invalid") as HTMLInputElement
            if (!(firstInvalidInput === formRef.current?.querySelector("[name=plan]"))) {
                firstInvalidInput.focus()
            }
            if (firstInvalidInput === formRef.current?.querySelector("#email")) {
                firstInvalidInput?.reportValidity()
            }
            return false
        }
    }

    const steps = [
        <StepOne
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
        />,
        <StepTwo
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
            />,
        <StepThree
            formData={formData}
            setFormData={setFormData}
        />,
        <StepFour
            formData={formData}
            setStepCount={setStepCount}
        />
    ]

    const buttonControls = {
        isFirstStep: stepCount === 0,
        isLastStep: stepCount === steps.length - 1,
        handlePrevious() {
            return buttonControls.isFirstStep ? null : setStepCount(prev => prev - 1)
        },
        handleNext() {
            if (!buttonControls.isLastStep && validateSteps()) {
                setStepCount(prev => prev + 1);
              }
        }
    }

    const handleSuccess = () => {
        if (buttonControls.isLastStep && validateSteps()) {
            setSuccess(true)
            setFormData({...initialFormData})
        }
    }

    return {stepCount, buttonControls, stepInfo, steps, success, handleSuccess, formRef}
}

export default useForm

