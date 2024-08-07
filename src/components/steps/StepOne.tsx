import styles from "./Step.module.scss"

const StepOne = () => {

    const inputSection = "d-flex flex-column"

    return (
        <>
        <div className={inputSection}>
            <label htmlFor="name" className={styles.textLabel}>Name</label>
            <input type="text" name="name" id="name" placeholder="e.g. Stephen King" className={styles.textInput}/>
        </div>
        <div className={inputSection}>
            <label htmlFor="email" className={styles.textLabel}>Email Address</label>
            <input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" className={styles.textInput}/>
        </div>
        <div className={inputSection}>
            <label htmlFor="phone" className={styles.textLabel}>Phone Number</label>
            <input type="tel" name="phone" id="phone" placeholder="e.g. +1 234 567 890" className={styles.textInput}/>
        </div>
        </>
    )
}

export default StepOne