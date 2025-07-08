import { useState } from "react";
import { useSubscribeEmailMutation } from "../../services/SubscribePost";

const Subscribe: React.FC = () => {

    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [subscribeEmail, { isLoading }] = useSubscribeEmailMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            setError("Email is required");
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Invalid email format");
            return;
        }

        setError("");

        try {
            const response = await subscribeEmail({ email }).unwrap();
            alert(response.message || "Thank you for subscribing!");
            setEmail("");
        } catch (err: any) {
            // Handle 404 and parsing errors
            if (err.status === 404 || err.originalStatus === 404) {
                alert("Subscription service is currently unavailable. Please try later.");
            } else if (err.error?.includes("Unexpected token '<'")) {
                alert("Server error: Invalid response. Contact support.");
            } else {
                alert("Failed to subscribe. Please try again.");
            }
        }
    };

    return (
        <section className="w-full h-[426px] md:h-[350px] xs:h-[300px] bg-CustomGrey Flex-Col-Justify-Around">
            {
                <div className="w-full h-full Flex-Col-Justify-Around">
                    <div className="text-center">
                        <h3 className="font-bold text-[25px] md:text-[22px] xs:text-[18px] leading-[60px] tracking-4% text-Golden">Subscribe For Getting Best Update</h3>
                        <h4 className="font-normal text-[20px] md:text-[18px] xs:text-[16px] leading-[40px] md:leading-[30px] xs:leading-[24px] tracking-4% w-[801px] md:w-[450px] xs:w-[350px]" >Get the latest updates, news, and insights delivered to your inbox. Subscribe now and stay connected!</h4>
                    </div>
                    <form className='h-[69px] md:h-[55px] xs:h-[45px] Flex-Center border-2 border-Golden'
                        autoComplete="off"
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <input type="email"
                            name='user_email'
                            id="user_email"
                            value={email}
                            placeholder="Enter your Email"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            className="Footer-Input h-full md:text-[12px] xs:text-[10px] xs:placeholder:text-[10px] md:placeholder:text-[12px] w-[414.55px] md:w-[300px] xs:w-[200px] outline-none px-4 border-Golden autofill:bg-transparent autofill:!text-white" />
                        <button className="Footer-Button md:text-[14px] xs:text-[12px] h-full w-[193.45px] md:w-[120px] xs:w-[100px] Golden-Btn">
                            {isLoading ? "Subscribing..." : "Subscribe"}
                        </button>
                    </form>
                    {error && <p className="text-red-500 text-sm font-semibold -mt-10">{error}</p>}
                </div>
            }
        </section>
    )
}
export default Subscribe;