import StepButtons from "./StepButtons"
import useForm from "../assets/hooks/useForm"
import StepCounter from "./StepCounter"
import styles from "./StepForm.module.scss"
import Success from "./Success"

const StepForm = () => {

    const {stepInfo, stepCount, buttonControls, success, handleSuccess, steps, formRef} = useForm()

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        handleSuccess()
    }

    const styleForm = `${styles.form} d-flex flex-column gap-2`
    return (
        <>
        <StepCounter stepInfo={stepInfo} stepCount={stepCount}/>
        {success ? <Success/> 
        : <form onSubmit={handleSubmit} className={styleForm} ref={formRef}>
            <div>
                <h1 className={styles.legend}>{stepInfo[stepCount].legend}</h1>
                <p className={styles.description}>{stepInfo[stepCount].description}</p>
            </div>
            {steps[stepCount]}
            <StepButtons buttonControls={buttonControls}/>
        </form>}
        </>
        
    )
}

export default StepForm