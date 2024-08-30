import {useState, useEffect} from "react"
import StepOne from "../../components/steps/StepOne"
import StepTwo from "../../components/steps/StepTwo"
import StepThree from "../../components/steps/StepThree"
import StepFour from "../../components/steps/StepFour"
import planOptions from "../../assets/planOptions.json";
import addons from "../../assets/addons.json";

const useForm = () => {

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

    const [stepCount, setStepCount] = useState(0)
    const [success, setSuccess] = useState(false)
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        plan: {
            name: "",
            price: 0
        },
        yearly: false,
        addons: []
    })

    const getPrice = (itemName: string, yearly: boolean): number => {
        const selectedOption = planOptions.find(option => option.name === itemName) || addons.find(addon => addon.name === itemName);
        if (!selectedOption) return 0;
        return yearly ? selectedOption.price.yearly : selectedOption.price.monthly;
    };

    const hook = () => {
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
        }));
    }

    useEffect(hook, [formData.plan.name, formData.yearly])    

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

    const steps = [<StepOne formData={formData} setFormData={setFormData}/>,
        <StepTwo formData={formData} setFormData={setFormData}/>,
        <StepThree formData={formData} setFormData={setFormData}/>,
        <StepFour formData={formData} setStepCount={setStepCount}/>]

    return {stepCount, success, setStepCount, setSuccess, stepInfo, steps}
}

export default useForm

