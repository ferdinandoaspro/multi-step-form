import { ButtonHTMLAttributes, Dispatch, SetStateAction } from "react"
import styles from "./StepButtons.module.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    handleClick: () => void;
    hidden?: boolean
}

const Button = ({text, handleClick, type = "button", hidden = false}: ButtonProps) => {
    return <button onClick={handleClick} className={`${hidden ? "invisible" : styles.buttons}`} type={type} aria-hidden={hidden}>{text}</button>
}

interface StepButtonProps {
    stepCount: number;
    setStepCount: Dispatch<SetStateAction<number>>;
    stepNumber: number
}

const StepButtons = ({stepCount, setStepCount, stepNumber}: StepButtonProps) => {

    const isFirstStep = stepCount === 0
    const isLastStep = stepCount === stepNumber - 1

    const handlePrevious = () => isFirstStep ? null : setStepCount(prev => prev - 1)
    const handleNext = () => isLastStep ? null : setStepCount(prev => prev + 1)

    return (
        <div className={`fixed-bottom d-flex justify-content-between p-3 ${styles.buttonSection}`}>
            <Button text={"Go back"} handleClick={handlePrevious} hidden={isFirstStep}/>
            <Button text={isLastStep ? "Confirm" : "Next step"} handleClick={handleNext} type={isLastStep ? "submit" : "button"}/>
        </div>
    )
}

export default StepButtons