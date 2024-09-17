import { ButtonHTMLAttributes } from "react"
import styles from "./StepButtons.module.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    handleClick: () => void;
    hidden?: boolean
}

const Button = ({text, handleClick, type = "button", hidden = false}: ButtonProps) => {
    return <button
                onClick={handleClick}
                className={`${hidden ? "invisible" : styles.buttons}`}
                type={type}
                disabled={hidden}
                aria-hidden={hidden}>
                    {text}
            </button>
}

interface ButtonControls {
    isFirstStep: boolean;
    isLastStep: boolean;
    handlePrevious: () => void | null,
    handleNext: () => void
}

const StepButtons = ({buttonControls}: {buttonControls : ButtonControls}) => {

    const {isFirstStep, isLastStep, handlePrevious, handleNext} = buttonControls

    return (
        <div className={`fixed-bottom d-flex justify-content-between p-3 ${styles.buttonSection}`}>
            <Button text={"Go back"} handleClick={handlePrevious} hidden={isFirstStep}/>
            {isLastStep && <Button text={"Confirm"} handleClick={handleNext} type={"submit"}/>}
            {!isLastStep && <Button text={"Next step"} handleClick={handleNext} type={"button"}/>}
        </div>
    )
}

export default StepButtons