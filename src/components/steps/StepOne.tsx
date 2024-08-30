import { ChangeEvent, Dispatch, SetStateAction} from "react"
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

interface StepOneProps {
    formData: FormData,
    setFormData: Dispatch<SetStateAction<FormData>>
}

const StepOne = ({formData, setFormData} : StepOneProps) => {

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => setFormData(prev => ({...prev, [e.target.name]: e.target.value}))

    const inputSection = "d-flex flex-column"

    return (
        <>
        <div className={inputSection}>
            <label htmlFor="name" className={styles.textLabel}>Name</label>
            <input type="text" name="name" id="name" placeholder="e.g. Stephen King" className={styles.textInput}
            value={formData.name} onChange={handleInput} required
            />
        </div>
        <div className={inputSection}>
            <label htmlFor="email" className={styles.textLabel}>Email Address</label>
            <input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" className={styles.textInput}
            value={formData.email} onChange={handleInput} required
            />
        </div>
        <div className={inputSection}>
            <label htmlFor="phone" className={styles.textLabel}>Phone Number</label>
            <input type="tel" name="phone" id="phone" placeholder="e.g. +1 234 567 890" className={styles.textInput}
            value={formData.phone} onChange={handleInput} required
            />
        </div>
        </>
    )
}

export default StepOne