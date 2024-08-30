import styles from "./Step.module.scss"
import planOptions from "../../assets/planOptions.json"
import { ChangeEvent, Dispatch, SetStateAction } from "react"

interface PlanOption {
    name: string,
    icon: string,
    price: {
        monthly: number,
        yearly: number
    }
}

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

interface LabelProps {
    planOption: PlanOption,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
    isYearly: boolean,
    isSelected: boolean
}

interface StepTwoProps {
    formData: FormData,
    setFormData: Dispatch<SetStateAction<FormData>>,
}

const Label = ({planOption, handleChange, isYearly, isSelected} : LabelProps) => {

    const planLabel = `${styles.divLabel} d-flex flex-row align-items-center`
    const planInfo = "mx-3 d-flex flex-column gap-1"
    const iconPath = new URL(`/src/assets/${planOption.icon}`, import.meta.url).href
    const price = isYearly ? `$${planOption.price.yearly}/yr` : `$${planOption.price.monthly}/mo`

    return (
        <label htmlFor={planOption.name} className={planLabel}>
            <img src={iconPath} alt={`${planOption.name} plan icon`} />
            <div className={planInfo}>
                <span className={styles.planName}>
                    {planOption.name}
                </span>
                <span className={styles.planPrice}>
                    {price}
                </span>
            </div>
            <input type="radio" name="plan" id={planOption.name} value={planOption.name}
            checked={isSelected} onChange={handleChange} required/>
        </label>
    )
}

const StepTwo = ({formData, setFormData} : StepTwoProps) => {

    const switchContainer = `${styles.switchContainer} d-flex flex-row justify-content-center mt-2`

    const isYearly = formData.yearly;
    const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
            setFormData(prev => ({
                ...prev, 
                plan: {
                    name: e.target.value,
                    price: prev.plan.price
                }
            }))
    }
    const handleSwitch = (e: ChangeEvent<HTMLInputElement>) => {
        const yearlyInput = e.target.checked
        setFormData(prev => ({
        ...prev, 
        yearly: yearlyInput
    }))}
    

    return (
        <>
        {
            planOptions.map((planOption, index) => {
                const isSelected = formData.plan.name === planOption.name
                return <Label key={index} planOption={planOption} handleChange={handleSelect} isYearly={isYearly} isSelected={isSelected}/>
            })
        }
        <div className={switchContainer}>       
            <label className={styles.switch} htmlFor="yearly">
                <span>Monthly</span>
                <input type="checkbox" name="yearly" id="yearly" checked={formData.yearly}
                onChange={handleSwitch}/>
                <span>Yearly</span>
            </label>
        </div>
        </>
    )
}

export default StepTwo