import arcade from "../../assets/images/icon-arcade.svg"
import advanced from "../../assets/images/icon-advanced.svg"
import pro from "../../assets/images/icon-pro.svg"
import styles from "./Step.module.scss"

const StepTwo = () => {

    const planLabel = `${styles.divLabel} d-flex flex-row align-items-center`
    const planInfo = "mx-3 d-flex flex-column gap-1"
    const switchContainer = `${styles.switchContainer} d-flex flex-row justify-content-center mt-2`

    return (
        <>
        <fieldset>
            <label htmlFor="arcade" className={planLabel}>
            <img src={arcade} alt="arcade plan icon" />
            <div className={planInfo}>
                <span className={styles.planName}>Arcade</span>
                <span className={styles.planPrice}>$9/mo</span>
            </div>
            <input type="radio" name="plan" id="arcade" value="arcade" />
            </label>
            <label htmlFor="advanced" className={planLabel}>
                <img src={advanced} alt="advanced plan icon" />
                <div className={planInfo}>
                    <span className={styles.planName}>Advanced</span>
                    <span className={styles.planPrice}>$12/mo</span>
                </div>
                <input type="radio" name="plan" id="advanced" value="advanced" />
            </label>
            <label htmlFor="pro" className={planLabel}>
                <img src={pro} alt="pro plan icon" />
                <div className={planInfo}>
                    <span className={styles.planName}>Pro</span>
                    <span className={styles.planPrice}>$15/mo</span>
                </div>
                <input type="radio" name="plan" id="pro" value="pro" />
            </label>
        </fieldset>
        <div className={switchContainer}>       
            <label className={styles.switch} htmlFor="yearly">
                <span>Monthly</span>
                <input type="checkbox" name="yearly" id="yearly" />
                <span>Yearly</span>
            </label>
        </div>
        </>
    )
}

export default StepTwo