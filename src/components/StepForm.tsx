import StepButtons from "./StepButtons"
import useForm from "../assets/hooks/useForm"
import StepCounter from "./StepCounter"
import styles from "./StepForm.module.scss"
import Success from "./Success"

const StepForm = () => {

    const {stepInfo, stepCount, setStepCount, success, setSuccess, steps} = useForm()

    const handleSubmit = (e: { preventDefault: () => void }) => e.preventDefault()

    const styleForm = `${styles.form} d-flex flex-column gap-2`
    return (
        <>
        <StepCounter stepInfo={stepInfo} stepCount={stepCount}/>
        {success ? <Success/> 
        : <form onSubmit={handleSubmit} className={styleForm}>
            <div>
                <h1 className={styles.legend}>{stepInfo[stepCount].legend}</h1>
                <p className={styles.description}>{stepInfo[stepCount].description}</p>
            </div>
            {steps[stepCount]}
            <StepButtons stepCount={stepCount} setStepCount={setStepCount} setSuccess={setSuccess} stepNumber={stepInfo.length}/>
        </form>}
        </>
        
    )
}

export default StepForm