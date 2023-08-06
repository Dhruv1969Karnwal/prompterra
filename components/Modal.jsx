// Modal.js
import Link from "next/link";
import { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose }) => {
    const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div className="dropdown"  ref={modalRef}>
      <Link href="/profile" className="dropdown_link" onClick={onClose}>
        My Profile
      </Link>
      <Link href="/create-prompt" className="dropdown_link" onClick={onClose}>
        Create Prompt
      </Link>
      <button type="button" onClick={onClose} className="mt-5 w-full black_btn">
        Sign Out
      </button>
    </div>
  );
};

export default Modal;
