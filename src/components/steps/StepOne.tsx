const StepOne = () => {
    return (
        <>
        <div className="d-flex flex-column mb-2">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="e.g. Stephen King"/>
        </div>
        <div className="d-flex flex-column mb-2">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com"/>
        </div>
        <div className="d-flex flex-column mb-2">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" name="phone" id="phone" placeholder="e.g. +1 234 567 890"/>
        </div>
        </>
    )
}

export default StepOne