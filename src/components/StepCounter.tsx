import styles from "./StepCounter.module.scss"

interface StepProps {
    count: number,
    name: string,
    isCurrent: boolean
}

const Step = ({count, name, isCurrent} : StepProps) => {
    return (
        <li className="d-md-flex gap-3">
            <p className={`rounded-circle border border-2 ${styles.counter} ${isCurrent ? styles.activeCounter : styles.idleCounter}`}>{count}</p>
            <div className="d-none d-md-flex flex-column">
                <span className={styles.step}>STEP {count}</span>
                <span className={styles.stepName}>{name}</span>
            </div>
        </li>
    )
}

interface Step {
    name: string,
    legend: string,
    description: string
}

interface StepCounterProps {
    stepInfo: Step[],
    stepCount: number
}

const StepCounter = ({stepInfo, stepCount} : StepCounterProps) => {
    return (
        <div className={styles.aside}>
            <ul className="list-unstyled d-flex flex-row flex-md-column justify-content-center justify-content-md-start align-items-md-start gap-3 pt-4">
                {stepInfo.map((step, key) => <Step key={key + 1} count={key + 1} name={step.name} isCurrent={key === stepCount}/>)}
            </ul>
        </div>
    )
}

export default StepCounter