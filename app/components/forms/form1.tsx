import {useEffect, useState} from "react";

interface Props {
    handleForm1Validation: (isValid: boolean | ((prevState: boolean) => boolean)) => void
}

const Form1 = (props:Props) => {
    // @ts-ignore
    const storedData = JSON.parse( sessionStorage.getItem('form1Data'));

    const [form1Data, setform1Data] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        nationality: '',
        email: '',
        phone: '',
    });

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setform1Data({
            ...form1Data,
            [name]: value,
        });
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        props.handleForm1Validation(true);
        console.log(form1Data);
    };

    useEffect(() => {
        // Load stored data from sessionStorage on component mount
        if (storedData) {
            setform1Data(storedData);
        }
    }, []);

    useEffect(() => {
        // Store form1Data in sessionStorage whenever it changes
        console.log(form1Data);
         sessionStorage.setItem('form1Data', JSON.stringify(form1Data));
    }, [form1Data]);

    return (
        <div className="">
            <div className="text-3xl">
                Stage I: Personal Information
            </div>
            <div>
                * indicates this field is required.
            </div>
            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    First name*
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="first-name"
                                        value={form1Data.firstName}
                                        onChange={handleInputChange}
                                        autoComplete="given-name"
                                        required={true}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#95684c] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last name*
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="last-name"
                                        value={form1Data.lastName}
                                        onChange={handleInputChange}
                                        autoComplete="family-name"
                                        required={true}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#95684c] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Date of Birth*
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        value={form1Data.dateOfBirth}
                                        onChange={handleInputChange}
                                        required={true}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#95684c] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                    Nationality*
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="country"
                                        name="nationality"
                                        value={form1Data.nationality}
                                        onChange={handleInputChange}
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#95684c] sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>Limsa Lominsa</option>
                                        <option>Gridania</option>
                                        <option>Ul&apos;dah</option>
                                        <option>Ishgard</option>
                                        <option>Ala Mhigo</option>
                                        <option>Sharlayan</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className=" text-xl font-semibold leading-7 text-gray-900">Contact Information</h2>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address*
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        value={form1Data.email}
                                        onChange={handleInputChange}                                        type="email"
                                        placeholder="  xxxxx@xxx"
                                        autoComplete="email"
                                        required={true}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#95684c] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Phone*
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="tel"
                                        name="phone"
                                        value={form1Data.phone}
                                        onChange={handleInputChange}
                                        type="phone"
                                        placeholder="  xxx-xxx-xxxx"
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                        title="Please enter numbers in the format 'xxx-xxx-xxxx'"
                                        required={true}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#95684c] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
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

export default Form1;