import thankYou from "../assets/images/icon-thank-you.svg"
import styles from "./Success.module.scss"

const Success = () => {

    const container = `${styles.container} d-flex flex-column justify-content-center gap-1 text-center`
    return (
        <div className={container}>
            <img src={thankYou} alt="Thank you" width={60} className="mx-auto mb-3"/>
            <h1 className={styles.thanks}>Thank you!</h1>
            <p className={styles.message}>
                Thanks for confirming your subscription!
                We hope you have fun using our platform.
                If you ever need support, please feel free to
                email us at support@loremgaming.com.
            </p>
        </div>
    )
}

export default Success