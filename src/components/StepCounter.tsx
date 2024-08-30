import styles from "./StepCounter.module.scss"

interface StepProps {
    count: number,
    name: string,
    isCurrent: boolean
}

const Step = ({count, name, isCurrent} : StepProps) => {
    return (
        <li>
            <p className={`rounded-circle border border-2 ${styles.counter} ${isCurrent ? styles.activeCounter : styles.idleCounter}`}>{count}</p>
            <div className="d-none">
                <p>STEP {count}</p>
                <p>{name}</p>
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
        <aside>
            <ul className="list-unstyled d-flex flex-row justify-content-center gap-3 py-4">
                {stepInfo.map((step, key) => <Step key={key + 1} count={key + 1} name={step.name} isCurrent={key === stepCount}/>)}
            </ul>
        </aside>
    )
}

export default StepCounter