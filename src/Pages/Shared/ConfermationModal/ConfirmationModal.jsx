import React from 'react';

const ConfirmationModal = ({ title, message, closeDoctor, modalData, successAction }) => {
    return (
        <div>

            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}!</h3>
                    <p className="py-4">{message}!</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)}
                            htmlFor="my_modal_6" className="btn btn-sm ">Delete</label>
                        <label onClick={closeDoctor} className="btn  btn-sm btn-outline">Cancel!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;