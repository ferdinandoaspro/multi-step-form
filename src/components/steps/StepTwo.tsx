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

type Errors = {
    [key: string] : string
}

interface StepTwoProps {
    formData: FormData,
    setFormData: Dispatch<SetStateAction<FormData>>,
    errors: Errors,
    setErrors: Dispatch<SetStateAction<Errors>>,
}

const Label = ({planOption, handleChange, isYearly, isSelected} : LabelProps) => {

    const planLabel = `${styles.divLabel} d-flex flex-row align-items-start gap-3 flex-lg-column gap-lg-0 align-items-lg-start`
    const planInfo = `d-flex flex-column gap-1 mt-lg-4`
    const iconPath = new URL(`/src/assets/${planOption.icon}`, import.meta.url).href
    const price = isYearly ? `$${planOption.price.yearly}/yr` : `$${planOption.price.monthly}/mo`

    return (
        <label htmlFor={planOption.name} className={planLabel}>
            <img src={iconPath} alt={`${planOption.name} plan icon`} className="pt-1 pb-2"/>
            <div className={planInfo}>
                <span className={styles.planName}>
                    {planOption.name}
                </span>
                <span className={styles.planPrice}>
                    {price}
                </span>
                {
                isYearly && <span className={styles.planDiscount}>
                    2 months free
                </span>
                }
            </div>
            <input
                type="radio"
                name="plan"
                id={planOption.name}
                value={planOption.name}
                checked={isSelected}
                onChange={handleChange}
                required/>
        </label>
    )
}

const StepTwo = ({formData, setFormData, errors, setErrors} : StepTwoProps) => {

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
        if (e.target.checkValidity()) {
            setErrors(currentErrors => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const {[e.target.name]:_, ...rest} = currentErrors
                return rest
            })
        }
    }
    const handleSwitch = (e: ChangeEvent<HTMLInputElement>) => {
        const yearlyInput = e.target.checked
        setFormData(prev => ({
        ...prev, 
        yearly: yearlyInput
    }))}
    

    return (
        <>
        <div className="d-flex flex-column flex-lg-row gap-2 gap-lg-0 my-lg-3 justify-content-lg-between">
        {
            planOptions.map((planOption, index) => {
                const isSelected = formData.plan.name === planOption.name
                return <Label key={index} planOption={planOption} handleChange={handleSelect} isYearly={isYearly} isSelected={isSelected}/>
            })
        }
        </div>
        {errors.plan && <span className={styles.errorPlan}>{errors.plan}</span>}
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