import Form1 from "@/app/components/forms/form1";
import Form2 from "@/app/components/forms/form2";
import Form3 from "@/app/components/forms/form3";
import {useEffect, useState} from "react";
import Dialog from "@/app/components/dialog/dialog";

interface Props {
    activeButton: number;
}

const FormContainer = (props: Props) =>  {
    const [isChange, setIsChange] = useState(false);
    const [isForm1Valid, setForm1Valid] = useState(false);
    const [isForm2Valid, setForm2Valid] = useState(false);
    const [isForm3Valid, setForm3Valid] = useState(false);

    const handleForm1Validation = (isValid: boolean | ((prevState: boolean) => boolean)) => {
        setForm1Valid(isValid);
    };
    const handleForm2Validation = (isValid: boolean | ((prevState: boolean) => boolean)) => {
        setForm2Valid(isValid);
    };
    const handleForm3Validation = (isValid: boolean | ((prevState: boolean) => boolean)) => {
        setForm3Valid(isValid);
    };

    let activeForm, form1, form2, form3;
    let submissionSuccess = false;

    form1 = <Form1 handleForm1Validation={handleForm1Validation}></Form1>
    form2 = <Form2 handleForm2Validation={handleForm2Validation}></Form2>
    form3 = <Form3 handleForm3Validation={handleForm3Validation}></Form3>

    useEffect(() => {
        setIsChange(true);
        setTimeout(() => {
            setIsChange(false);
        }, 500);
    }, [props.activeButton]);

    useEffect(() => {
        if (isForm1Valid || isForm2Valid) { // @ts-ignore
            document.getElementById('save').showModal();
        }
    }, [isForm1Valid, isForm2Valid]);
    
    useEffect(() => {
        if (isForm3Valid && isForm2Valid && isForm1Valid) {
            // @ts-ignore
            document.getElementById('submit').showModal();
        }
    }, [isForm1Valid, isForm2Valid, isForm3Valid]);

    if (props.activeButton === 1) {
        activeForm = form1
    } else if (props.activeButton === 2) {
        activeForm = form2
    } else if (props.activeButton === 3) {
        activeForm = form3
    }

    if (isForm3Valid && isForm2Valid && isForm1Valid) submissionSuccess = true;
    
    return (
        <div className={`place-items-center grid h-[100%] w-[100%] pt-16 md:pt-32 pb-20 md:pb-16 ${submissionSuccess && "animate-spin"}`}>
            <Dialog id="save" content="Stage save success! Please proceed to the next stage."></Dialog>
            <Dialog id="submit" content="Submission success! Thank you."></Dialog>
            <div className={`h-auto w-[90%] backdrop-blur-sm bg-white/90 rounded-lg p-10 md:p-20 transition ${isChange && "animate-bounce"}`}>
                {activeForm}
            </div>
        </div>
    );
}

export default FormContainer;