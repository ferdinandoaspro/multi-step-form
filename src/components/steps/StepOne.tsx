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

type Errors = {
    [key: string] : string
}

interface StepOneProps {
    formData: FormData,
    setFormData: Dispatch<SetStateAction<FormData>>,
    errors: Errors,
    setErrors: Dispatch<SetStateAction<Errors>>
}

const StepOne = ({formData, setFormData, errors, setErrors} : StepOneProps) => {

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
            }
        ))
        if (e.target.validity.valid) {
            setErrors(currentErrors => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const {[e.target.name]:_, ...rest} = currentErrors
                return rest
            })
        }
    }

    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value.trim()}))
    }

    const inputSection = "d-flex flex-column"
    const labelSection = `${styles.textLabel} d-flex justify-content-between align-items-center`

    return (
    <div className ="d-flex flex-column gap-2 gap-md-3 gap-lg-4">
        <div className={inputSection}>
            <label htmlFor="name" className={labelSection}>
                <span>Name</span>
                {errors.name && <span className={styles.errorLabel}>{errors.name}</span>}
            </label>
            <input 
                type="text"
                name="name"
                id="name"
                placeholder="e.g. Stephen King"
                className={styles.textInput}
                value={formData.name}
                onChange={handleInput}
                onBlur={handleBlur}
                minLength={2}
                required
                aria-required
            />
        </div>
        <div className={inputSection}>
            <label htmlFor="email" className={labelSection}>
                <span>Email Address</span>
                {errors.email && <span className={styles.errorLabel}>{errors.email}</span>}
            </label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="e.g. stephenking@lorem.com"
                className={styles.textInput}
                value={formData.email}
                onChange={handleInput}
                onBlur={handleBlur}
                required
                aria-required
            />
        </div>
        <div className={inputSection}>
            <label htmlFor="phone" className={labelSection}>
                <span>Phone Number</span>
                {errors.phone && <span className={styles.errorLabel}>{errors.phone}</span>}
            </label>
            <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="e.g. +1 234 567 890"
                className={styles.textInput}
                value={formData.phone}
                onChange={handleInput}
                onBlur={handleBlur}
                maxLength={16}
                required
                aria-required
            />
        </div>
    </div>
    )
}

export default StepOne