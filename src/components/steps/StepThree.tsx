import styles from "./Step.module.scss"
import addons from "../../assets/addons.json"
import { Dispatch, SetStateAction } from "react"

interface AddonOption {
    name: string,
    description: string,
    price: {
        monthly: number,
        yearly: number
    }

}

interface LabelProps {
    addon: AddonOption,
    isYearly: boolean,
    isChecked: boolean,
    onChange: () => void
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

interface StepThreeProps {
    formData: FormData,
    setFormData: Dispatch<SetStateAction<FormData>>
}

const Label = ({addon, isYearly, isChecked, onChange} : LabelProps) => {

    const nameTag = addon.name.replace(" ", "-")
    const addonLabel = `${styles.divLabel} d-flex align-items-center`
    const addonInfo = "ms-3 d-flex flex-column gap-1"
    const price = isYearly ? `$${addon.price.yearly}/yr` : `$${addon.price.monthly}/mo`

    return (
    <label htmlFor={nameTag} className={addonLabel}>
        <input type="checkbox" name={nameTag} id={nameTag} checked={isChecked} onChange={onChange}/>
        <div className={addonInfo}>
            <span className={styles.addonName}>{addon.name}</span>
            <span className={styles.addonDesc}>{addon.description}</span>
        </div>
        <span className={styles.addonPrice}>{price}</span>
    </label>
    )
}

const StepThree = ({formData, setFormData} : StepThreeProps) => {

    const isYearly = formData.yearly
    const formAddons = formData.addons.map(addon => addon.name)

    const handleCheck = (addonName: string) => {
        const selectedAddon = addons.find(addon => addon.name === addonName)
        if (!selectedAddon) return
        const addonPrice = isYearly ? selectedAddon.price.yearly : selectedAddon.price.monthly

        const addonsList = !formAddons.includes(addonName)
            ? formData.addons.concat({ name: addonName, price: addonPrice})
            : formData.addons.filter((obj: Addon) => obj.name !== addonName)

        setFormData((prev: FormData) => ({ ...prev, addons: addonsList }))
    }
    
    return (
        <>
        
        {addons.map((addon, index) => {
            const isChecked = formAddons.includes(addon.name)
            return <Label key={index} addon={addon} isYearly={isYearly} isChecked={isChecked} onChange={() => handleCheck(addon.name)}/>
        })}
        </>
    )
}

export default StepThree