interface Props {
    id: string;
    content: string;
}

const Dialog = (props:Props) => {
    return (
        <dialog id={props.id} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-xl">{props.content}</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-neutral text-xl text-white bg-[#95684c]">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}

export default Dialog;