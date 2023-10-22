import EmergenceContact from "@/app/components/forms/form-components/emergency-contact";
import LargeTextInput from "@/app/components/forms/form-components/large-text-input";

interface Props {
    handleForm3Validation: (isValid: boolean | ((prevState: boolean) => boolean)) => void
}

const Form3 = (props:Props) => {
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        props.handleForm3Validation(true);
    };

    return (
        <div className="transition ease-in-out delay-150">
            <div className="text-3xl">
                Stage III: Health and Safety
            </div>
            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <fieldset>
                                <legend className="text-xl font-semibold leading-6 text-gray-900">Health Declaration*</legend>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Do you require a health declaration for your travels?</p>
                                <div className="mt-6 space-y-6">
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="yes"
                                            name="health-declaration"
                                            type="radio"
                                            required={true}
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-[#95684c]"
                                        />
                                        <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="no"
                                            name="health-declaration"
                                            type="radio"
                                            required={true}
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-[#95684c]"
                                        />
                                        <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className=" text-xl font-semibold leading-7 text-gray-900">Emergency Contact Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            In case you become star dust by accident, please give us your emergency contact information so we can inform your loved ones.
                        </p>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <EmergenceContact></EmergenceContact>
                        </div>
                    </div>
                    <div className="mt-10 space-y-10">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-xl font-semibold leading-7 text-gray-900">Medical Conditions (if applicable)</h2>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-full">
                                    <LargeTextInput label="Medical Conditions" content="Tell us your medical conditions here" handleInputChange={() => console.log("input changed")}></LargeTextInput>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">Do you have any medical conditions, or is there anything health-related we should be aware of before your journey?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        className="btn btn-neutral btn-wide text-xl text-white bg-[#95684c]">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form3;