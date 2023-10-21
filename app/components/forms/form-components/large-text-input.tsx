interface Props {
    label: string;
    content: string;
    handleInputChange: (event: { target: { name: any; value: any; }; }) => void;
}
const LargeTextInput = (props:Props) => {

    const convertLabel = (input: string) => {
        const words = input.split(' ');
        words[0] = words[0].toLowerCase();
        return words.join('');
    }

    return (
        <div className="col-span-full">
            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                {props.label}
            </label>
            <div className="mt-2">
                                <textarea
                                    name={convertLabel(props.label)}
                                    value={props.content}
                                    onChange={props.handleInputChange}
                                    rows={10}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#95684c] sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
            </div>
        </div>
    );
}

export default LargeTextInput;