import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "../../config/ProductBaseApi";

const validationSchema = Yup.object({
    fullname: Yup.string().required("Your Name is required"),
    contact_no: Yup.string()
        .required("Phone number is required")
        .test(
            'valid-phone',
            'Invalid phone number format',
            function (value) {
                if (!value) return false;

                // Check for: +[country code][6-15 digits]
                const phoneRegex = /^\+\d{1,4}\d{6,15}$/;

                // Basic length check (country code + number)
                const isValidFormat = phoneRegex.test(value);
                const hasMinimumDigits = value.replace(/\D/g, '').length >= 10; // Adjust as needed

                return isValidFormat && hasMinimumDigits;
            }
        ),
    email: Yup.string().email("Invalid email format").required("Your Email is required"),
    city: Yup.string().required("Your City is required"),
    purpose_of_enquiry: Yup.string().required("Purpose of Enquiry is required"),
    pin_code: Yup.string().required("pin_code is required"),
    description: Yup.string().required("Message is required")
});
const lists = [
    { name: "Nepal", value: "+977" },
    { name: "USA", value: "+006" },
    { name: "India", value: "+987" }
];

const ApiUrl = `${API_BASE_URL}/contact`

type props = {
    brand_id: number
}
const GetTouchForm: React.FC<props> = ({ brand_id }) => {

    const initialValues = {
        "fullname": "",
        "firm_name": "new company",
        "pin_code": "",
        "contact_no": "",
        "email": "",
        "city": "",
        "purpose_of_enquiry": "",
        "category": brand_id,
        "description": "",
        "type_of_customer": "customer",
    }
    const [showDrop, setShowDrop] = useState<boolean>()
    const [selected, setSelected] = useState<string>(lists[0].value)

    const onSubmit = async (values: typeof initialValues, { setSubmitting, resetForm }: any) => {

        try {
            const payload = { ...values, "category": brand_id.toString() }
            console.log("Payload Being Sent:", payload);
            const response = await axios.post(ApiUrl, payload, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("Response:", response.data);
            alert("Form submitted successfully!");
            resetForm();
        } catch (error: unknown) {
            const axiosError = error as AxiosError; // Type assertion

            if (axiosError.response) {
                // Check if the error message contains "Email already exists"
                const errorMessage = (axiosError.response.data as any)?.message;

                if (errorMessage === "Email already exists") {
                    alert("This email is already registered. Please use another email.");
                } else {
                    alert("An error occurred: " + errorMessage);
                }

                console.error("Server Error:", axiosError.response.data);
            } else if (axiosError.request) {
                alert("Network error! Please check your connection.");
            } else {
                alert("Something went wrong. Please try again.");
            }
            setSubmitting(false);
        } finally {

            resetForm();
        }
    };

    return (
        <div className="outline outline-2 outline-[#404040] outline-offset-[16px] xs:outline-offset-8
        bg-CustomGrey px-10 py-5 3xl:max-w-[1100px] 2x-l:w-[900px] gl6:w-[750px] mlg:!w-[650px] m-d:!w-[550px] sl1:!w-[400px] xs:!max-w-[350px]">
            <h2 className="font-bold text-[25px] gl6:text-[22px] sm:!text-[20px] sm:leading-[32px] leading-[37.5px] tracking-4% mb-2">Contact Us</h2>
            <h3 className="font-normal text-sm gl6:text-[13px] sm:!text-[12px] leading-[21px] sm:leading-[18px]  tracking-4%">We are always ready to help you and answer your questions!</h3>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}

            >
                {({ setFieldValue, values, isSubmitting }) => (



                    <Form className='mt-16 gl6:mt-14 m-d:!mt-12'>
                        <div className="grid grid-cols-3 m-d:grid-cols-1 mlg:gap-8 sm:!gap-6 gap-x-[105px] gl6:gap-x-7 gap-y-16">
                            <div className="m-d:col-span-3">
                                <Field type="text" name="fullname" className="Input-Box" placeholder="Your Name*" />
                                <ErrorMessage name="fullname" component="div" className="text-red-500 text-xs" />
                            </div>
                            <div className="relative flex justify-start items-center m-d:col-span-3 m-d:w-full bg-gray-200 w-[302px] 3xl:w-[260px] 2x-l:w-[220px] mlg:w-[190px] sl1:w-full sm:!h-[30px]  3xl:h-[40px] 2x-l:h-[35px]  h-[45px] rounded-full px-4 2x-l:px-2 gl6:px-1"
                            >
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setShowDrop(!showDrop);
                                    }}
                                    className="bg-transparent outline-none pl-1 pr-1 text-Black70% font-medium text-[11px] 2x-l:!text-[10px] gl6:!text-[9px] border-r-[1.5px] border-r-black/70">
                                    {selected ? selected : 'Country'}
                                </button>
                                {/* <input
                                    type="text"
                                    placeholder="Your Phone Number*"
                                    className="bg-transparent outline-none text-gray-700 flex-1 Input-Box focus:ring-0"
                                /> */}

                                {
                                    showDrop && (
                                        <div className="absolute left-2 top-10 2x-l:top-9 sm:!top-7 mlg:w-14 text-black/70 font-medium text-[11px] 2x-l:!text-[10px] gl6:!text-[9px] w-16 bg-white border rounded-md shadow-lg z-30 overflow-hidden">
                                            {lists.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="px-4 py-2 mlg:py-1 hover:bg-gray-100 cursor-pointer"
                                                    onClick={() => {
                                                        setSelected(item.value);
                                                        setShowDrop(false);
                                                        setFieldValue("contact_no", item.value + values.contact_no.replace(/^\+\d+\s?/, ""));
                                                    }}
                                                >
                                                    {item.name}
                                                </div>
                                            ))}
                                        </div>
                                    )
                                }
                                <div className="relative m-d:col-span-3">
                                    <Field
                                        type="number"
                                        name="contact_no"
                                        className="appearance-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                                        relative bg-transparent outline-none m-d:w-full text-gray-700 flex-1 Input-Box focus:ring-0"
                                        placeholder="Your Phone Number*"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            const numbers = e.target.value.replace(/\D/g, "");
                                            setFieldValue("contact_no", `${selected}${numbers}`);
                                        }}
                                        value={values.contact_no.replace(selected, "")}
                                    />
                                </div>
                                <ErrorMessage name="contact_no" component="div" className="text-red-500 text-xs absolute -bottom-4" />
                            </div>


                            <div className="m-d:col-span-3">
                                <Field type="text" name="email" className="Input-Box" placeholder="Your Email*" />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                            </div>
                            <div className="m-d:col-span-3">
                                <Field type="text" name="city" className="Input-Box" placeholder="Your City*" />
                                <ErrorMessage name="city" component="div" className="text-red-500 text-xs" />
                            </div>
                            <div className="m-d:col-span-3">
                                <Field type="text" name="purpose_of_enquiry" className="Input-Box" placeholder="Purpose of Enquiry*" />
                                <ErrorMessage name="purpose_of_enquiry" component="div" className="text-red-500 text-xs" />
                            </div>
                            <div className="m-d:col-span-3 m-d:w-full">
                                <Field type="text" name="pin_code" className="Input-Box" placeholder="pin code*" />
                                <ErrorMessage name="pin_code" component="div" className="text-red-500 text-xs" />
                            </div>
                            <div className="col-span-3">
                                <Field as="textarea" name="description" className="Text-Area w-full" placeholder="Enter Message*" />
                                <ErrorMessage name="description" component="div" className="text-red-500 text-xs" />
                            </div>
                        </div>
                        <button type="submit" className="Submit-Btn Golden-Btn 3xl:!text-sm 2x-l:!text-[12px]"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}

                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
export default GetTouchForm