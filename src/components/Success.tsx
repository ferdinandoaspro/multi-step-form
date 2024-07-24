import thankYou from "../assets/images/icon-thank-you.svg"

const Success = () => {
    return (
        <div>
            <img src={thankYou} alt="Thank you" />
            <h1>Thank you!</h1>
            <p>
                Thank you for confirming your subscription!
                We hope you have fun using our platform.
                If you ever need support, please feel free to
                email us at support@loremgaming.com.
            </p>
        </div>
    )
}

export default Success