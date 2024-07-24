import StepButtons from "./StepButtons"
import useForm from "../assets/hooks/useForm"
import StepCounter from "./StepCounter"
import styles from "./StepForm.module.scss"

const StepForm = () => {

    const {stepInfo, stepCount, setStepCount, steps} = useForm()

    const handleSubmit = (e: { preventDefault: () => void }) => e.preventDefault()

    return (
        <>
        <StepCounter stepInfo={stepInfo} stepCount={stepCount}/>
        <form onSubmit={handleSubmit} className={styles.form}>
            <h1 className={styles.legend}>{stepInfo[stepCount].legend}</h1>
            <p>{stepInfo[stepCount].description}</p>
            {steps[stepCount]}
            <StepButtons stepCount={stepCount} setStepCount={setStepCount} stepNumber={stepInfo.length}/>
        </form>
        </>
        
    )
}

export default StepForm