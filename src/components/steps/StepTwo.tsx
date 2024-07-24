import arcade from "../../assets/images/icon-arcade.svg"
import advanced from "../../assets/images/icon-advanced.svg"
import pro from "../../assets/images/icon-pro.svg"

const StepTwo = () => {
    return (
        <>
        <div className="d-flex flex-column gap-3">
            <label htmlFor="arcade" className="d-flex flex-row">
                <img src={arcade} alt="" />
                <div>
                    <p>Arcade</p>
                    <p>$9/mo</p>
                </div>
                <input type="radio" name="plan" id="arcade" value="arcade" />
            </label>
            <label htmlFor="advanced" className="d-flex flex-row">
                <img src={advanced} alt="" />
                <div>
                    <p>Advanced</p>
                    <p>$12/mo</p>
                </div>
                <input type="radio" name="plan" id="advanced" value="advanced" />
            </label>
            <label htmlFor="pro" className="d-flex flex-row">
            <img src={pro} alt="" />
                <div>
                    <p>Pro</p>
                    <p>$15/mo</p>
                </div>
                <input type="radio" name="plan" id="pro" value="pro" />
            </label>
        </div>
        <div>
            <input type="checkbox" name="yearly" id="yearly" />
        </div>
        </>
    )
}

export default StepTwo