import styles from "./Step.module.scss"

const StepThree = () => {

    const addonLabel =  `${styles.divLabel} d-flex align-items-center`
    const addonInfo = "ms-3 d-flex flex-column gap-1"

    return (
        <fieldset>
            <label htmlFor="online-service" className={addonLabel}>
                <input type="checkbox" name="online-service" id="online-service" />
                <div className={addonInfo}>
                    <span className={styles.addonName}>Online service</span>
                    <span className={styles.addonDesc}>Access to multiplayer games</span>
                </div>
                <span className={styles.addonPrice}>+$1/mo</span>
            </label>
            <label htmlFor="larger-storage" className={addonLabel}>
                <input type="checkbox" name="larger-storage" id="larger-storage" />
                <div className={addonInfo}>
                    <span className={styles.addonName}>Larger storage</span>
                    <span className={styles.addonDesc}>Extra 1TB of storage space</span>
                </div>
                <span className={styles.addonPrice}>+$2/mo</span>
            </label>
            <label htmlFor="custom-profile" className={addonLabel}>
                <input type="checkbox" name="custom-profile" id="custom-profile" />
                <div className={addonInfo}>
                    <span className={styles.addonName}>Customizable profile</span>
                    <span className={styles.addonDesc}>Custom theme on your profile</span>
                </div>
                <span className={styles.addonPrice}>+$2/mo</span>
            </label> 
        </fieldset>
    )
}

export default StepThree