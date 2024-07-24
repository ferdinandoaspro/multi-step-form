const StepThree = () => {
    return (
        <>
        <label htmlFor="online-service" className="d-flex">
            <input type="checkbox" name="online-service" id="online-service" />
            <div>
                <p>Online service</p>
                <p>Access to multiplayer games</p>
            </div>
            <p>+$1/mo</p>
        </label>
        <label htmlFor="larger-storage" className="d-flex">
            <input type="checkbox" name="larger-storage" id="larger-storage" />
            <div>
                <p>Larger storage</p>
                <p>Extra 1TB of storage space</p>
            </div>
            <p>+$2/mo</p>
        </label>
        <label htmlFor="custom-profile" className="d-flex">
            <input type="checkbox" name="custom-profile" id="custom-profile" />
            <div>
                <p>Customizable profile</p>
                <p>Custom theme on your profile</p>
            </div>
            <p>+$3/mo</p>
        </label> 
        </>
    )
}

export default StepThree