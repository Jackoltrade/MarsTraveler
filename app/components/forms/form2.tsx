import LargeTextInput from "@/app/components/forms/form-components/large-text-input";
import {useEffect, useState} from "react";

interface Props {
    handleForm2Validation: (isValid: boolean | ((prevState: boolean) => boolean)) => void
}

const Form2 = (props:Props) => {
    const storedData = JSON.parse( sessionStorage.getItem('form2Data'));

    const [form2Data, setform2Data] = useState({
        departureDate: '',
        returnDate: '',
        spaceHotel: '',
        martianBase: '',
        specialRequests: '',
    });

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setform2Data({
            ...form2Data,
            [name]: value,
        });
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        props.handleForm2Validation(true);
        console.log(form2Data);
    };

    useEffect(() => {
        // Load stored data from  sessionStorage on component mount
        if (storedData) {
            setform2Data(storedData);
        }
    }, []);

    useEffect(() => {
        // Store form2Data in  sessionStorage whenever it changes
        console.log(form2Data);
        sessionStorage.setItem('form2Data', JSON.stringify(form2Data));
    }, [form2Data]);
    
    return (
        <div className="transition ease-in-out delay-150">
            <div className="text-3xl">
                Stage II: Travel Preferences
            </div>
            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Departure Date*
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="departureDate"
                                        value={form2Data.departureDate}
                                        onChange={handleInputChange}
                                        required={true}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#95684c] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Return Date*
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="returnDate"
                                        value={form2Data.returnDate}
                                        onChange={handleInputChange}
                                        required={true}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#95684c] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className=" text-xl font-semibold leading-7 text-gray-900">Accommodation Preference</h2>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <LargeTextInput label="Space Hotel" content={form2Data.spaceHotel} handleInputChange={handleInputChange}></LargeTextInput>
                                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your preference of space hotel.</p>
                            </div>

                            <div className="col-span-full">
                                <LargeTextInput label="Martian Base" content={form2Data.martianBase} handleInputChange={handleInputChange}></LargeTextInput>
                                <p className="mt-3 text-sm leading-6 text-gray-600">Tell us your choice of martian base (If remains empty, we wll choose martian base for you).</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className=" text-xl font-semibold leading-7 text-gray-900">Special Requests or Preferences</h2>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <LargeTextInput label="Special Requests" content={form2Data.specialRequests} handleInputChange={handleInputChange}></LargeTextInput>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        className="btn btn-neutral btn-wide text-xl text-white bg-[#95684c]">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form2;