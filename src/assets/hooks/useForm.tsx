import {useState} from "react"
import StepOne from "../../components/steps/StepOne"
import StepTwo from "../../components/steps/StepTwo"
import StepThree from "../../components/steps/StepThree"
import StepFour from "../../components/steps/StepFour"

const useForm = () => {

    const [stepCount, setStepCount] = useState(0)

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

    const steps = [<StepOne/>, <StepTwo/>, <StepThree/>, <StepFour/>]

    return {stepCount, setStepCount, stepInfo, steps}
}

export default useForm

