import React from "react";

const Modal = ({ children, onClose }) => {
    const handleOverlayClick = (e) => {
        if (e.target.id === "overlay") {
            onClose(); // Close when clicking outside modal box
        }
    };

    return (
        <div
            id="overlay"
            onClick={handleOverlayClick}
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
        >
            <div className="bg-white rounded-lg shadow-xl p-6 w-96 animate-fadeIn">
                {children}
            </div>
        </div>
    );
};

export default Modal;
