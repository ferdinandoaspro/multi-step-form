import { Dispatch, SetStateAction } from "react"
import styles from "./Step.module.scss"

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

interface PlanProps {
    plan: Plan,
    isYearly: boolean,
    onClick: () => void,
}

interface AddonProps {
    addonList: Addon[],
    isYearly: boolean
}

interface StepFourProps {
    formData: FormData,
    setStepCount: Dispatch<SetStateAction<number>>
}

const PlanSection = ({plan, isYearly, onClick} : PlanProps) => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
                <span className={styles.chosenPlanName}>{plan.name} ({isYearly ? "Yearly" : "Monthly"})</span>
                <button onClick={onClick}>
                    Change
                </button>
            </div>
            <span className={styles.chosenPlanPrice}>${plan.price}/{isYearly ? "yr" : "mo"}</span>
        </div>
    )
}

const AddonSection = ({addonList, isYearly}: AddonProps) => {
    return (
        <div>
            {addonList.map((addon: Addon, index: number) => 
                <div key={index} className="d-flex justify-content-between pb-2">
                    <span>{addon.name}</span>
                    <span className={styles.chosenAddonPrice}>+${addon.price}/{isYearly ? "yr" : "mo"}</span>
                </div>
            )}
        </div>
        
    )
}

const StepFour = ({formData, setStepCount} : StepFourProps) => {

    const isYearly = formData.yearly
    const currentPlan = formData.plan
    const planPrice = currentPlan.price || 0
    const handleClick = (step: number) => () => setStepCount(step)
    const totalPrice = planPrice + formData.addons.reduce((acc, addon) => acc + (addon.price || 0), 0)

    const breakdownContainer = `${styles.breakdownContainer}`
    const breakdownDetails = `${styles.breakdownDetails}`
    const breakdownTotal = `${styles.breakdownTotal} d-flex justify-content-between align-items-center`
    const finalPrice =`${styles.finalPrice}`

    return (
        <div className={breakdownContainer}>
            <div className={breakdownDetails}>
                <PlanSection plan={formData.plan} isYearly={isYearly} onClick={handleClick(1)}/>
                <hr/>
                <AddonSection addonList={formData.addons} isYearly={isYearly}/>
            </div>
            <div className={breakdownTotal}>
                <label>Total (per {isYearly ? "year" : "month"})</label>
                <label className={finalPrice}>+${totalPrice}/{isYearly ? "yr" : "mo"}</label>
            </div>
        </div>
    )
}

export default StepFour